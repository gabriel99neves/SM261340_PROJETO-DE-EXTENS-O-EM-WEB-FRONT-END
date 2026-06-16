import { CheckCircle2, AlertTriangle, Info } from "lucide-react";

interface MissionNotificationProps {
  title: string;
  description: string;
  target: number;
  current: number;
  type?: 'info' | 'warning' | 'completed';
}

export function MissionNotification({ title, description, target, current, type = 'info' }: MissionNotificationProps) {
  const isWarning = current > target;
  
  const Icon = type === 'completed' || !isWarning ? CheckCircle2 : (isWarning ? AlertTriangle : Info);
  const color = type === 'completed' || !isWarning ? "text-[#00FF41]" : (isWarning ? "text-red-500" : "text-[#00FF41]");
  const neonTextClass = type === 'completed' || !isWarning ? "neon-text" : (isWarning ? "text-red-500 shadow-[0_0_5px_rgba(255,0,0,0.5)]" : "neon-text");

  return (
    <div className={`bg-[#111111] p-4 sm:p-6 neon-border h-full relative flex flex-col`}>
      <div className="flex gap-3 sm:gap-4 mb-3 sm:mb-4">
        <Icon className={`w-8 h-8 sm:w-10 sm:h-10 shrink-0 ${neonTextClass}`} />
        <div className="min-w-0">
          <p className="text-[#00FF41] text-xs uppercase tracking-widest">Missão Completa</p>
          <p className="text-xl sm:text-2xl text-white font-bold">{title}</p>
        </div>
      </div>
      <p className="text-[#B0B0B0] text-sm mb-4 sm:mb-6">{description}</p>
      
      <div className="mt-auto pt-2 flex flex-wrap items-baseline justify-end gap-x-2 gap-y-1">
        <span className="text-[#B0B0B0] text-xs uppercase tracking-widest">Meta</span>
        <span className={`${neonTextClass} text-lg sm:text-xl`}>R$ {current.toFixed(2)}</span>
        <span className="text-[#B0B0B0] text-sm">/</span>
        <span className={`${neonTextClass} text-lg sm:text-xl`}>R$ {target.toFixed(2)}</span>
      </div>
    </div>
  );
}