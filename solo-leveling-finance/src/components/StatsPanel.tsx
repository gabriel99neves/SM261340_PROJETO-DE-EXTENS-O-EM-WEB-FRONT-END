import { DollarSign, Target, TrendingUp, Clock3 } from "lucide-react";

interface StatsPanelProps {
  totalSpent: number;
  monthlyGoal: number;
  savingsRate: number;
  daysRemaining: number;
}

export function StatsPanel({ totalSpent, monthlyGoal, savingsRate, daysRemaining }: StatsPanelProps) {
  const remaining = monthlyGoal - totalSpent;

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
      {/* Gasto Total */}
      <div className="bg-[#111111] p-6 neon-border relative group overflow-hidden">
        <DollarSign className="w-6 h-6 neon-text absolute top-4 left-4" />
        <div className="flex items-center justify-end mb-1">
          <TrendingUp className="w-4 h-4 text-red-500 mr-1.5" />
          <span className="text-red-500 text-sm">68%</span>
        </div>
        <p className="text-4xl neon-text mb-1">R$ {totalSpent.toFixed(2)}</p>
        <p className="text-[#B0B0B0] text-xs uppercase tracking-widest">Gasto Total</p>
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-[rgba(0,255,65,0.05)] to-transparent group-hover:animate-shimmer" style={{ backgroundSize: '200% 200%' }}></div>
      </div>

      {/* Restante */}
      <div className="bg-[#111111] p-6 neon-border relative group overflow-hidden">
        <Target className="w-6 h-6 neon-text absolute top-4 left-4" />
        <div className="flex items-center justify-end mb-1">
          <TrendingUp className="w-4 h-4 text-[#00FF41] mr-1.5" />
          <span className="text-[#00FF41] text-sm">669</span>
        </div>
        <p className="text-4xl neon-text mb-1">R$ {remaining.toFixed(2)}</p>
        <p className="text-[#B0B0B0] text-xs uppercase tracking-widest">Restante</p>
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-[rgba(0,255,65,0.05)] to-transparent group-hover:animate-shimmer" style={{ backgroundSize: '200% 200%' }}></div>
      </div>

      {/* Taxa de Economia */}
      <div className="bg-[#111111] p-6 neon-border relative group overflow-hidden">
        <TrendingUp className="w-6 h-6 neon-text absolute top-4 left-4" />
        <div className="flex items-center justify-end mb-1">
          <TrendingUp className="w-4 h-4 text-[#00FF41] mr-1.5" />
          <span className="text-[#00FF41] text-sm">+42%</span>
        </div>
        <p className="text-4xl neon-text mb-1">{savingsRate.toFixed(1)}%</p>
        <p className="text-[#B0B0B0] text-xs uppercase tracking-widest">Taxa de Economia</p>
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-[rgba(0,255,65,0.05)] to-transparent group-hover:animate-shimmer" style={{ backgroundSize: '200% 200%' }}></div>
      </div>

      {/* Dias Restantes */}
      <div className="bg-[#111111] p-6 neon-border relative group overflow-hidden">
        <Clock3 className="w-6 h-6 neon-text absolute top-4 left-4" />
        <p className="text-4xl neon-text mb-1 mt-6">{daysRemaining}</p>
        <p className="text-[#B0B0B0] text-xs uppercase tracking-widest">Dias Restantes</p>
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-[rgba(0,255,65,0.05)] to-transparent group-hover:animate-shimmer" style={{ backgroundSize: '200% 200%' }}></div>
      </div>
    </div>
  );
}