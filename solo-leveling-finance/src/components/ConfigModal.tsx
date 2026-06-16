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
    <div className="fixed inset-0 bg-black/80 flex items-center justify-center p-6 z-50 backdrop-blur-sm">
      <div className="bg-[#111111] p-8 neon-border max-w-lg w-full relative">
        <button onClick={() => onOpenChange(false)} className="absolute top-4 right-4 text-[#B0B0B0] hover:text-white">
          <X className="w-6 h-6" />
        </button>

        <h2 className="text-3xl uppercase tracking-widest text-[#00FF41] mb-8" style={{ fontFamily: "var(--font-display)" }}>Configurações</h2>

        <div className="flex items-center gap-4 mb-6">
          <div className="w-16 h-16 rounded-full neon-border flex items-center justify-center">
            <User className="w-10 h-10 neon-text" />
          </div>
          <div>
            <p className="neon-text text-sm uppercase tracking-widest">JOGADOR PRINCIPAL</p>
          </div>
        </div>

        <div className="space-y-5 mb-8">
          <div>
            <label className="text-[#B0B0B0] text-xs uppercase tracking-widest mb-1.5 block">Nome do Jogador</label>
            <input type="text" value={name} onChange={(e) => setName(e.target.value)} className="w-full p-3.5 bg-[#080808] neon-border text-white text-sm" />
          </div>
          <div>
            <label className="text-[#B0B0B0] text-xs uppercase tracking-widest mb-1.5 block">Renda Base (R$)</label>
            <input type="number" value={baseIncome} onChange={(e) => setBaseIncome(e.target.value)} placeholder="0.00" className="w-full p-3.5 bg-[#080808] neon-border text-white text-sm" />
          </div>
        </div>

        <div className="grid grid-cols-2 gap-4">
          <NeonButton variant="secondary" onClick={() => onOpenChange(false)}>Cancelar</NeonButton>
          <NeonButton onClick={handleSave}>Salvar</NeonButton>
        </div>
      </div>
    </div>
  );
}