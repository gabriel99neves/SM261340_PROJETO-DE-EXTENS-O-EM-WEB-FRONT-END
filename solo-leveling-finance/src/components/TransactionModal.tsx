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
    <div className="fixed inset-0 bg-black/80 flex items-center justify-center p-6 z-50 backdrop-blur-sm">
      <div className="bg-[#111111] p-8 neon-border max-w-lg w-full relative">
        <button onClick={() => onOpenChange(false)} className="absolute top-4 right-4 text-[#B0B0B0] hover:text-white">
          <X className="w-6 h-6" />
        </button>

        <h2 className="text-3xl uppercase tracking-widest text-[#00FF41] mb-8" style={{ fontFamily: "var(--font-display)" }}>Nova Transação</h2>

        {/* Tipo */}
        <div className="grid grid-cols-2 gap-4 mb-6">
          <button onClick={() => setType('expense')} className={`flex flex-col items-center gap-2 p-6 neon-border transition-colors ${type === 'expense' ? 'bg-[rgba(255,0,0,0.1)] border-red-500' : 'bg-[#080808] hover:bg-[rgba(255,0,0,0.05)]'}`}>
            <TrendingDown className={`w-8 h-8 ${type === 'expense' ? 'text-red-500' : 'text-[#B0B0B0]'}`} />
            <span className={`uppercase tracking-widest text-sm ${type === 'expense' ? 'text-red-500' : 'text-[#B0B0B0]'}`}>Despesa</span>
          </button>
          <button onClick={() => setType('income')} className={`flex flex-col items-center gap-2 p-6 neon-border transition-colors ${type === 'income' ? 'bg-[rgba(0,255,65,0.1)]' : 'bg-[#080808] hover:bg-[rgba(0,255,65,0.05)]'}`}>
            <TrendingUp className={`w-8 h-8 ${type === 'income' ? 'text-[#00FF41]' : 'text-[#B0B0B0]'}`} />
            <span className={`uppercase tracking-widest text-sm ${type === 'income' ? 'text-[#00FF41]' : 'text-[#B0B0B0]'}`}>Receita</span>
          </button>
        </div>

        {/* Formulário */}
        <div className="space-y-5 mb-8">
          <div>
            <label className="text-[#B0B0B0] text-xs uppercase tracking-widest mb-1.5 block">Descrição</label>
            <input type="text" value={description} onChange={(e) => setDescription(e.target.value)} placeholder="Ex: Mercado, Uber..." className="w-full p-3.5 bg-[#080808] neon-border text-white text-sm" />
          </div>

          <div>
            <label className="text-[#B0B0B0] text-xs uppercase tracking-widest mb-1.5 block">Categoria</label>
            <select value={category} onChange={(e) => setCategory(e.target.value)} className="w-full p-3.5 bg-[#080808] neon-border text-white text-sm">
              <option value="other">Outros</option>
              <option value="food">Alimentação</option>
              <option value="transport">Transporte</option>
              <option value="utilities">Contas</option>
              <option value="shopping">Compras</option>
            </select>
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="text-[#B0B0B0] text-xs uppercase tracking-widest mb-1.5 block">Valor (R$)</label>
              <input type="number" value={amount} onChange={(e) => setAmount(e.target.value)} placeholder="0.00" className="w-full p-3.5 bg-[#080808] neon-border text-white text-sm" />
            </div>
            <div className="relative">
              <label className="text-[#B0B0B0] text-xs uppercase tracking-widest mb-1.5 block">Data</label>
              <input type="text" value={date} onChange={(e) => setDate(e.target.value)} placeholder="dd/mm/aaaa hh:mm" className="w-full p-3.5 bg-[#080808] neon-border text-white text-sm" />
              <CalendarDays className="w-5 h-5 text-[#B0B0B0] absolute bottom-3.5 right-3.5" />
            </div>
          </div>
        </div>

        {/* Botões */}
        <div className="grid grid-cols-2 gap-4">
          <NeonButton variant="secondary" onClick={() => onOpenChange(false)}>Cancelar</NeonButton>
          <NeonButton onClick={handleAdd}>{type === 'expense' ? 'Adicionar Despesa' : 'Adicionar Receita'}</NeonButton>
        </div>
      </div>
    </div>
  );
}