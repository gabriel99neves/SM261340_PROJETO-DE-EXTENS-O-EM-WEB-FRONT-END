import { useState } from "react";
import { PlayerStatusCard } from "./components/PlayerStatusCard";
import { QuestLog } from "./components/QuestLog";
import { MissionNotification } from "./components/MissionNotification";
import { StatsPanel } from "./components/StatsPanel";
import { NeonButton } from "./components/NeonButton";
import { TransactionModal } from "./components/TransactionModal";
import { ReportModal } from "./components/ReportModal";
import { Plus, Download, Settings } from "lucide-react";
import { ConfigModal, type UserConfig } from "./components/ConfigModal";

export interface Transaction {
  id: string;
  description: string;
  amount: number;
  date: string;
  category: string;
  type: "expense" | "income";
}
export default function App() {
  const [modalOpen, setModalOpen] = useState(false);
  const [reportModalOpen, setReportModalOpen] = useState(false);
  const [configModalOpen, setConfigModalOpen] = useState(false);
  const [userConfig, setUserConfig] = useState<UserConfig>({
    name: "JOGADOR",
    email: "",
    baseIncome: 2090.0,
  });
  const baseBudget = userConfig.baseIncome;
  const [transactions, setTransactions] = useState<Transaction[]>([
    {
      id: "1",
      description: "Mercado Atacadista",
      amount: 450.0,
      date: "08/06/2026 - 14:32",
      category: "food",
      type: "expense" as const,
    },
    {
      id: "2",
      description: "Uber - Centro",
      amount: 28.5,
      date: "08/06/2026 - 09:15",
      category: "transport",
      type: "expense" as const,
    },
    {
      id: "3",
      description: "Conta de Luz",
      amount: 187.0,
      date: "07/06/2026 - 18:45",
      category: "utilities",
      type: "expense" as const,
    },
    {
      id: "4",
      description: "Loja de Roupas",
      amount: 150.0,
      date: "06/06/2026 - 16:20",
      category: "shopping",
      type: "expense" as const,
    },
    {
      id: "5",
      description: "Netflix Assinatura",
      amount: 45.9,
      date: "05/06/2026 - 12:00",
      category: "other",
      type: "expense" as const,
    },
    {
      id: "6",
      description: "Bar",
      amount: 270.0,
      date: "05/06/2026 - 20:30",
      category: "food",
      type: "expense" as const,
    },
    {
      id: "7",
      description: "Passagem - Transporte público ",
      amount: 200.0,
      date: "04/06/2026 - 08:00",
      category: "transport",
      type: "expense" as const,
    },
    {
      id: "8",
      description: "Academia Mensal",
      amount: 89.9,
      date: "03/06/2026 - 07:00",
      category: "other",
      type: "expense" as const,
    },
  ]);

  const handleAddTransaction = (newTransaction: {
    type: "expense" | "income";
    description: string;
    amount: number;
    date: string;
    category: string;
  }) => {
    const transaction = {
      id: Date.now().toString(),
      ...newTransaction,
    };
    setTransactions([transaction, ...transactions]);
  };

  const totalIncome = transactions
    .filter((t) => t.type === "income")
    .reduce((sum, t) => sum + t.amount, 0);

  const totalExpenses = transactions
    .filter((t) => t.type === "expense")
    .reduce((sum, t) => sum + t.amount, 0);

  const monthlyBudget = baseBudget + totalIncome;
  const currentBudget = monthlyBudget - totalExpenses;
  const savings = 1250.0;
  const savingsGoal = 3000.0;
  const savingsRate = (savings / savingsGoal) * 100;
  const daysRemaining = 22;

  return (
    <div className="min-h-screen bg-[#080808] p-4 sm:p-6">
      <div className="max-w-7xl mx-auto">
        <header className="mb-6 sm:mb-8">
          <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between mb-6">
            <div>
              <h1
                className="uppercase tracking-widest text-2xl sm:text-3xl lg:text-4xl mb-2"
                style={{
                  fontFamily: "var(--font-display)",
                  background:
                    "linear-gradient(90deg, #00FF41 0%, #39FF14 100%)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  filter:
                    "drop-shadow(0 0 10px rgba(0, 255, 65, 0.5))",
                }}
              >
                Gerenciamento de Gastos
              </h1>
              <p
                className="text-[#B0B0B0] text-sm"
                style={{ fontFamily: "var(--font-body)" }}
              >
                Dashboard de Gestão Gamificada
              </p>
            </div>
            <div className="flex flex-col sm:flex-row gap-2 sm:gap-3 w-full sm:w-auto">
              <NeonButton
                variant="secondary"
                className="w-full sm:w-auto justify-center"
                onClick={() => setConfigModalOpen(true)}
              >
                <Settings className="w-4 h-4 mr-2 inline shrink-0" />
                Config
              </NeonButton>
              <NeonButton
                variant="primary"
                className="w-full sm:w-auto justify-center"
                onClick={() => setModalOpen(true)}
              >
                <Plus className="w-4 h-4 mr-2 inline shrink-0" />
                Nova Despesa
              </NeonButton>
            </div>
          </div>

          <div
            className="h-0.5 w-full mb-8"
            style={{
              background:
                "linear-gradient(90deg, transparent 0%, #00FF41 50%, transparent 100%)",
              boxShadow: "0 0 10px rgba(0, 255, 65, 0.5)",
            }}
          />

          <StatsPanel
            totalSpent={totalExpenses}
            monthlyGoal={monthlyBudget}
            savingsRate={savingsRate}
            daysRemaining={daysRemaining}
          />
        </header>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-6">
          <div className="lg:col-span-1">
            <PlayerStatusCard
              playerName={userConfig.name}
              rank="RANK C"
              currentBudget={currentBudget}
              maxBudget={monthlyBudget}
              savings={savings}
              maxSavings={savingsGoal}
              bonusIncome={totalIncome}
            />
          </div>

          <div className="lg:col-span-2">
            <MissionNotification
              title="Sobreviva ao Mês"
              description="Mantenha seus gastos abaixo do orçamento até o final do mês para subir de rank e desbloquear novos benefícios."
              target={monthlyBudget}
              current={totalExpenses}
              type={
                totalExpenses > monthlyBudget
                  ? "warning"
                  : "info"
              }
            />
          </div>
        </div>

        <div className="grid grid-cols-1 gap-6">
          <QuestLog transactions={transactions} />
        </div>

        <div className="mt-6 sm:mt-8 flex justify-center px-2">
          <NeonButton
            variant="secondary"
            className="w-full sm:w-auto justify-center max-w-sm"
            onClick={() => setReportModalOpen(true)}
          >
            <Download className="w-4 h-4 mr-2 inline shrink-0" />
            Exportar Relatório
          </NeonButton>
        </div>
      </div>

      <TransactionModal
        open={modalOpen}
        onOpenChange={setModalOpen}
        onAddTransaction={handleAddTransaction}
      />

      <ReportModal
        open={reportModalOpen}
        onOpenChange={setReportModalOpen}
        transactions={transactions}
        monthlyBudget={monthlyBudget}
        currentBudget={currentBudget}
        totalExpenses={totalExpenses}
      />

      <ConfigModal
        open={configModalOpen}
        onOpenChange={setConfigModalOpen}
        config={userConfig}
        onSave={setUserConfig}
      />

      <style>{`
        @keyframes shimmer {
          0% { background-position: 200% 200%; }
          100% { background-position: -200% -200%; }
        }
      `}</style>
    </div>
  );
}