import { useState } from "react";
import { X, TrendingDown, TrendingUp, CalendarDays } from "lucide-react";
import { NeonButton } from "./NeonButton";

interface TransactionModalProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  onAddTransaction: (newTransaction: {
    type: "expense" | "income";
    description: string;
    amount: number;
    date: string;
    category: string;
  }) => void;
}

export function TransactionModal({ open, onOpenChange, onAddTransaction }: TransactionModalProps) {
  const [type, setType] = useState<'expense' | 'income'>('expense');
  const [description, setDescription] = useState('');
  const [amount, setAmount] = useState('');
  const [category, setCategory] = useState('other');
  const [date, setDate] = useState('');

  if (!open) return null;

  const handleAdd = () => {
    onAddTransaction({
      type,
      description,
      amount: parseFloat(amount) || 0,
      date: date || new Date().toLocaleString('pt-BR'),
      category,
    });
    // Reset e fecha
    setDescription('');
    setAmount('');
    setCategory('other');
    setDate('');
    onOpenChange(false);
  };

  return (
    <div className="fixed inset-0 bg-black/80 flex items-end sm:items-center justify-center p-0 sm:p-6 z-50 backdrop-blur-sm">
      <div className="bg-[#111111] p-5 sm:p-8 neon-border max-w-lg w-full relative max-h-[92vh] overflow-y-auto rounded-t-lg sm:rounded-none">
        <button onClick={() => onOpenChange(false)} className="absolute top-3 right-3 sm:top-4 sm:right-4 text-[#B0B0B0] hover:text-white p-1">
          <X className="w-6 h-6" />
        </button>

        <h2 className="text-2xl sm:text-3xl uppercase tracking-widest text-[#00FF41] mb-6 sm:mb-8 pr-8" style={{ fontFamily: "var(--font-display)" }}>Nova Transação</h2>

        {/* Tipo */}
        <div className="grid grid-cols-2 gap-3 sm:gap-4 mb-5 sm:mb-6">
          <button onClick={() => setType('expense')} className={`flex flex-col items-center gap-2 p-4 sm:p-6 neon-border transition-colors ${type === 'expense' ? 'bg-[rgba(255,0,0,0.1)] border-red-500' : 'bg-[#080808] hover:bg-[rgba(255,0,0,0.05)]'}`}>
            <TrendingDown className={`w-7 h-7 sm:w-8 sm:h-8 ${type === 'expense' ? 'text-red-500' : 'text-[#B0B0B0]'}`} />
            <span className={`uppercase tracking-widest text-xs sm:text-sm ${type === 'expense' ? 'text-red-500' : 'text-[#B0B0B0]'}`}>Despesa</span>
          </button>
          <button onClick={() => setType('income')} className={`flex flex-col items-center gap-2 p-4 sm:p-6 neon-border transition-colors ${type === 'income' ? 'bg-[rgba(0,255,65,0.1)]' : 'bg-[#080808] hover:bg-[rgba(0,255,65,0.05)]'}`}>
            <TrendingUp className={`w-7 h-7 sm:w-8 sm:h-8 ${type === 'income' ? 'text-[#00FF41]' : 'text-[#B0B0B0]'}`} />
            <span className={`uppercase tracking-widest text-xs sm:text-sm ${type === 'income' ? 'text-[#00FF41]' : 'text-[#B0B0B0]'}`}>Receita</span>
          </button>
        </div>

        {/* Formulário */}
        <div className="space-y-4 sm:space-y-5 mb-6 sm:mb-8">
          <div>
            <label className="text-[#B0B0B0] text-xs uppercase tracking-widest mb-1.5 block">Descrição</label>
            <input type="text" value={description} onChange={(e) => setDescription(e.target.value)} placeholder="Ex: Mercado, Uber..." className="w-full p-3 sm:p-3.5 bg-[#080808] neon-border text-white text-base sm:text-sm" />
          </div>

          <div>
            <label className="text-[#B0B0B0] text-xs uppercase tracking-widest mb-1.5 block">Categoria</label>
            <select value={category} onChange={(e) => setCategory(e.target.value)} className="w-full p-3 sm:p-3.5 bg-[#080808] neon-border text-white text-base sm:text-sm">
              <option value="other">Outros</option>
              <option value="food">Alimentação</option>
              <option value="transport">Transporte</option>
              <option value="utilities">Contas</option>
              <option value="shopping">Compras</option>
            </select>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label className="text-[#B0B0B0] text-xs uppercase tracking-widest mb-1.5 block">Valor (R$)</label>
              <input type="number" inputMode="decimal" value={amount} onChange={(e) => setAmount(e.target.value)} placeholder="0.00" className="w-full p-3 sm:p-3.5 bg-[#080808] neon-border text-white text-base sm:text-sm" />
            </div>
            <div className="relative">
              <label className="text-[#B0B0B0] text-xs uppercase tracking-widest mb-1.5 block">Data</label>
              <input type="text" value={date} onChange={(e) => setDate(e.target.value)} placeholder="dd/mm/aaaa hh:mm" className="w-full p-3 sm:p-3.5 bg-[#080808] neon-border text-white text-base sm:text-sm pr-10" />
              <CalendarDays className="w-5 h-5 text-[#B0B0B0] absolute bottom-3 sm:bottom-3.5 right-3 sm:right-3.5 pointer-events-none" />
            </div>
          </div>
        </div>

        {/* Botões */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
          <NeonButton variant="secondary" className="justify-center" onClick={() => onOpenChange(false)}>Cancelar</NeonButton>
          <NeonButton className="justify-center" onClick={handleAdd}>{type === 'expense' ? 'Adicionar Despesa' : 'Adicionar Receita'}</NeonButton>
        </div>
      </div>
    </div>
  );
}