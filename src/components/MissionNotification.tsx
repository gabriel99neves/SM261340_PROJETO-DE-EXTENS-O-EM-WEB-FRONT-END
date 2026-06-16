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
    <div className={`bg-[#111111] p-6 neon-border h-full relative`}>
      <div className="flex gap-4 mb-4">
        <Icon className={`w-10 h-10 ${neonTextClass}`} />
        <div>
          <p className="text-[#00FF41] text-xs uppercase tracking-widest">Missão Completa</p>
          <p className="text-2xl text-white font-bold">{title}</p>
        </div>
      </div>
      <p className="text-[#B0B0B0] text-sm mb-6 max-w-2xl">{description}</p>
      
      <div className="absolute bottom-6 right-6 flex items-baseline gap-2">
        <span className="text-[#B0B0B0] text-xs uppercase tracking-widest">Meta</span>
        <span className={`${neonTextClass} text-xl`}>R$ {current.toFixed(2)}</span>
        <span className="text-[#B0B0B0] text-sm">/</span>
        <span className={`${neonTextClass} text-xl`}>R$ {target.toFixed(2)}</span>
      </div>
    </div>
  );
}