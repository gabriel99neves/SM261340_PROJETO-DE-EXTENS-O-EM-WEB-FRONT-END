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
    <div className="bg-[#111111] p-6 neon-border h-full">
      <div className="flex items-center gap-4 mb-6">
        <div className="w-16 h-16 rounded-full neon-border flex items-center justify-center">
          <User className="w-10 h-10 neon-text" />
        </div>
        <div>
          <p className="neon-text text-sm uppercase tracking-widest">{rank}</p>
          <p className="text-2xl text-white font-bold">{playerName}</p>
        </div>
      </div>

      {/* HP (Orçamento) */}
      <div className="mb-5">
        <div className="flex items-center justify-between mb-1.5">
          <span className="text-[#B0B0B0] text-xs uppercase tracking-widest">HP (Orçamento)</span>
          <span className="neon-text text-xs">R$ {currentBudget.toFixed(2)} / R$ {maxBudget.toFixed(2)}</span>
        </div>
        <div className="h-2.5 w-full bg-[#222222] neon-border">
          <div className="h-full bg-[#00FF41] neon-border" style={{ width: `${hpRate}%` }}></div>
        </div>
      </div>

      {/* MP (Economias) */}
      <div>
        <div className="flex items-center justify-between mb-1.5">
          <span className="text-[#B0B0B0] text-xs uppercase tracking-widest">MP (Economias)</span>
          <span className="neon-text-blue text-xs">R$ {savings.toFixed(2)} / R$ {maxSavings.toFixed(2)}</span>
        </div>
        <div className="h-2.5 w-full bg-[#222222] neon-border-blue">
          <div className="h-full bg-[#39FF14] neon-border-blue" style={{ width: `${mpRate}%` }}></div>
        </div>
      </div>
    </div>
  );
}