import { User, DollarSign } from "lucide-react";

interface PlayerStatusCardProps {
  playerName: string;
  rank: string;
  currentBudget: number;
  maxBudget: number;
  savings: number;
  maxSavings: number;
  bonusIncome: number;
}

export function PlayerStatusCard({ playerName, rank, currentBudget, maxBudget, savings, maxSavings }: PlayerStatusCardProps) {
  const hpRate = (currentBudget / maxBudget) * 100;
  const mpRate = (savings / maxSavings) * 100;

  return (
    <div className="bg-[#111111] p-4 sm:p-6 neon-border h-full">
      <div className="flex items-center gap-3 sm:gap-4 mb-5 sm:mb-6">
        <div className="w-12 h-12 sm:w-16 sm:h-16 rounded-full neon-border flex items-center justify-center shrink-0">
          <User className="w-8 h-8 sm:w-10 sm:h-10 neon-text" />
        </div>
        <div className="min-w-0">
          <p className="neon-text text-xs sm:text-sm uppercase tracking-widest">{rank}</p>
          <p className="text-xl sm:text-2xl text-white font-bold truncate">{playerName}</p>
        </div>
      </div>

      {/* HP (Orçamento) */}
      <div className="mb-5">
        <div className="flex flex-col gap-0.5 sm:flex-row sm:items-center sm:justify-between mb-1.5">
          <span className="text-[#B0B0B0] text-xs uppercase tracking-widest">HP (Orçamento)</span>
          <span className="neon-text text-xs break-all sm:break-normal sm:text-right">R$ {currentBudget.toFixed(2)} / R$ {maxBudget.toFixed(2)}</span>
        </div>
        <div className="h-2.5 w-full bg-[#222222] neon-border">
          <div className="h-full bg-[#00FF41] neon-border" style={{ width: `${hpRate}%` }}></div>
        </div>
      </div>

      {/* MP (Economias) */}
      <div>
        <div className="flex flex-col gap-0.5 sm:flex-row sm:items-center sm:justify-between mb-1.5">
          <span className="text-[#B0B0B0] text-xs uppercase tracking-widest">MP (Economias)</span>
          <span className="neon-text-blue text-xs break-all sm:break-normal sm:text-right">R$ {savings.toFixed(2)} / R$ {maxSavings.toFixed(2)}</span>
        </div>
        <div className="h-2.5 w-full bg-[#222222] neon-border-blue">
          <div className="h-full bg-[#39FF14] neon-border-blue" style={{ width: `${mpRate}%` }}></div>
        </div>
      </div>
    </div>
  );
}