import { ShoppingBag, Coffee, Car, Zap, FileText, BarChart3, Ticket } from "lucide-react";

const categoryIcons = {
  food: Coffee,
  transport: Car,
  utilities: Zap,
  shopping: ShoppingBag,
  other: Ticket,
};

interface Transaction {
  id: string;
  description: string;
  amount: number;
  date: string;
  category: string;
  type: "expense" | "income";
}

interface QuestLogProps {
  transactions: Transaction[];
}

export function QuestLog({ transactions }: QuestLogProps) {
  return (
    <div className="bg-[#111111] p-6 neon-border">
      <div className="flex items-center gap-3 mb-6">
        <div className="h-px flex-1 bg-gradient-to-r from-transparent to-[rgba(0,255,65,0.3)]"></div>
        <h2 className="text-xl uppercase tracking-widest text-[#00FF41]" style={{ fontFamily: "var(--font-display)" }}>Quest Log</h2>
        <div className="h-px flex-1 bg-gradient-to-l from-transparent to-[rgba(0,255,65,0.3)]"></div>
      </div>

      <div className="space-y-4">
        {transactions.map((transaction) => {
          const Icon = categoryIcons[transaction.category as keyof typeof categoryIcons] || FileText;
          return (
            <div key={transaction.id} className="bg-[#080808] p-4 flex items-center gap-4 neon-border group hover:bg-[rgba(0,255,65,0.05)] transition-colors">
              <div className="w-12 h-12 rounded neon-border flex items-center justify-center">
                <Icon className="w-6 h-6 neon-text" />
              </div>
              <div className="flex-1">
                <p className="text-white text-base font-bold group-hover:neon-text">{transaction.description}</p>
                <p className="text-[#B0B0B0] text-xs">{transaction.date}</p>
              </div>
              <div className="text-right">
                <p className="text-red-500 text-xl font-bold">R$ {transaction.amount.toFixed(2)}</p>
                <FileText className="w-3.5 h-3.5 text-red-500 inline mr-1" />
                <span className="text-red-500 text-xs">-{transaction.amount.toFixed(2)}</span>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}