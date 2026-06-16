import { useState } from "react";
import { X, User } from "lucide-react";
import { NeonButton } from "./NeonButton";

export interface UserConfig {
  name: string;
  email: string;
  baseIncome: number;
}

interface ConfigModalProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  config: UserConfig;
  onSave: (config: UserConfig) => void;
}

export function ConfigModal({ open, onOpenChange, config, onSave }: ConfigModalProps) {
  const [name, setName] = useState(config.name);
  const [baseIncome, setBaseIncome] = useState(config.baseIncome.toString());

  if (!open) return null;

  const handleSave = () => {
    onSave({
      name,
      email: config.email,
      baseIncome: parseFloat(baseIncome) || config.baseIncome,
    });
    onOpenChange(false);
  };

  return (
    <div className="fixed inset-0 bg-black/80 flex items-end sm:items-center justify-center p-0 sm:p-6 z-50 backdrop-blur-sm">
      <div className="bg-[#111111] p-5 sm:p-8 neon-border max-w-lg w-full relative max-h-[92vh] overflow-y-auto rounded-t-lg sm:rounded-none">
        <button onClick={() => onOpenChange(false)} className="absolute top-3 right-3 sm:top-4 sm:right-4 text-[#B0B0B0] hover:text-white p-1">
          <X className="w-6 h-6" />
        </button>

        <h2 className="text-2xl sm:text-3xl uppercase tracking-widest text-[#00FF41] mb-6 sm:mb-8 pr-8" style={{ fontFamily: "var(--font-display)" }}>Configurações</h2>

        <div className="flex items-center gap-3 sm:gap-4 mb-5 sm:mb-6">
          <div className="w-12 h-12 sm:w-16 sm:h-16 rounded-full neon-border flex items-center justify-center shrink-0">
            <User className="w-8 h-8 sm:w-10 sm:h-10 neon-text" />
          </div>
          <div>
            <p className="neon-text text-xs sm:text-sm uppercase tracking-widest">JOGADOR PRINCIPAL</p>
          </div>
        </div>

        <div className="space-y-4 sm:space-y-5 mb-6 sm:mb-8">
          <div>
            <label className="text-[#B0B0B0] text-xs uppercase tracking-widest mb-1.5 block">Nome do Jogador</label>
            <input type="text" value={name} onChange={(e) => setName(e.target.value)} className="w-full p-3 sm:p-3.5 bg-[#080808] neon-border text-white text-base sm:text-sm" />
          </div>
          <div>
            <label className="text-[#B0B0B0] text-xs uppercase tracking-widest mb-1.5 block">Renda Base (R$)</label>
            <input type="number" inputMode="decimal" value={baseIncome} onChange={(e) => setBaseIncome(e.target.value)} placeholder="0.00" className="w-full p-3 sm:p-3.5 bg-[#080808] neon-border text-white text-base sm:text-sm" />
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
          <NeonButton variant="secondary" className="justify-center" onClick={() => onOpenChange(false)}>Cancelar</NeonButton>
          <NeonButton className="justify-center" onClick={handleSave}>Salvar</NeonButton>
        </div>
      </div>
    </div>
  );
}