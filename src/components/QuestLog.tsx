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
    <div className="bg-[#111111] p-4 sm:p-6 neon-border">
      <div className="flex items-center gap-2 sm:gap-3 mb-4 sm:mb-6">
        <div className="h-px flex-1 bg-gradient-to-r from-transparent to-[rgba(0,255,65,0.3)]"></div>
        <h2 className="text-base sm:text-xl uppercase tracking-widest text-[#00FF41] shrink-0" style={{ fontFamily: "var(--font-display)" }}>Quest Log</h2>
        <div className="h-px flex-1 bg-gradient-to-l from-transparent to-[rgba(0,255,65,0.3)]"></div>
      </div>

      <div className="space-y-3 sm:space-y-4">
        {transactions.map((transaction) => {
          const Icon = categoryIcons[transaction.category as keyof typeof categoryIcons] || FileText;
          return (
            <div key={transaction.id} className="bg-[#080808] p-3 sm:p-4 flex items-start sm:items-center gap-3 sm:gap-4 neon-border group hover:bg-[rgba(0,255,65,0.05)] transition-colors">
              <div className="w-10 h-10 sm:w-12 sm:h-12 rounded neon-border flex items-center justify-center shrink-0">
                <Icon className="w-5 h-5 sm:w-6 sm:h-6 neon-text" />
              </div>
              <div className="flex-1 min-w-0">
                <p className="text-white text-sm sm:text-base font-bold group-hover:neon-text truncate">{transaction.description}</p>
                <p className="text-[#B0B0B0] text-xs">{transaction.date}</p>
              </div>
              <div className="text-right shrink-0">
                <p className="text-red-500 text-base sm:text-xl font-bold whitespace-nowrap">R$ {transaction.amount.toFixed(2)}</p>
                <span className="text-red-500 text-xs hidden sm:inline">
                  <FileText className="w-3.5 h-3.5 inline mr-1" />
                  -{transaction.amount.toFixed(2)}
                </span>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}