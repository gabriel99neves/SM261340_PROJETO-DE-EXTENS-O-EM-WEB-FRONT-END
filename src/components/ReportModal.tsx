import { X, TrendingUp, TrendingDown, Target, Building, BookOpenText, BarChart3, FileText, DollarSign, BrainCircuit, CheckCircle2 } from "lucide-react";
import { NeonButton } from "./NeonButton";

interface ReportModalProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  transactions: any[];
  monthlyBudget: number;
  currentBudget: number;
  totalExpenses: number;
}

export function ReportModal({ open, onOpenChange, monthlyBudget, currentBudget, totalExpenses }: ReportModalProps) {
  if (!open) return null;

  return (
    <div className="fixed inset-0 bg-black/80 flex items-center justify-center p-6 z-50 backdrop-blur-sm overflow-y-auto">
      <div className="bg-[#111111] p-8 neon-border max-w-5xl w-full relative mt-[20vh] mb-12">
        <button onClick={() => onOpenChange(false)} className="absolute top-4 right-4 text-[#B0B0B0] hover:text-white">
          <X className="w-6 h-6" />
        </button>

        <h2 className="text-3xl uppercase tracking-widest text-[#00FF41] mb-8" style={{ fontFamily: "var(--font-display)" }}>Relatório Financeiro</h2>

        {/* Notificação */}
        <div className="bg-[#080808] p-5 neon-border-blue mb-8 flex gap-4">
          <TrendingUp className="w-6 h-6 text-[#39FF14]" />
          <div>
            <p className="text-[#39FF14] text-xs uppercase tracking-widest">Bom Progresso</p>
            <p className="text-white text-sm">Você está mantendo um bom controle financeiro. Evite gastos desnecessários para maximizar economias.</p>
          </div>
        </div>

        {/* Resumo */}
        <div className="grid grid-cols-3 gap-6 mb-8">
          <div className="bg-[#080808] p-6 neon-border-blue">
            <DollarSign className="w-5 h-5 text-[#B0B0B0] mb-2" />
            <p className="text-white text-4xl font-bold">R$ {monthlyBudget.toFixed(2)}</p>
            <p className="text-[#B0B0B0] text-xs uppercase tracking-widest">Orçamento Total</p>
          </div>
          <div className="bg-[#080808] p-6 neon-border">
            <TrendingDown className="w-5 h-5 text-red-500 mb-2" />
            <p className="text-red-500 text-4xl font-bold">R$ {totalExpenses.toFixed(2)}</p>
            <p className="text-[#B0B0B0] text-xs uppercase tracking-widest">Total Gasto</p>
          </div>
          <div className="bg-[#080808] p-6 neon-border-blue">
            <Target className="w-5 h-5 text-[#39FF14] mb-2" />
            <p className="text-[#39FF14] text-4xl font-bold">R$ {currentBudget.toFixed(2)}</p>
            <p className="text-[#B0B0B0] text-xs uppercase tracking-widest">Saldo Restante</p>
          </div>
        </div>

        {/* Gráficos */}
        <div className="grid grid-cols-2 gap-8 mb-8">
          {/* Gastos por Categoria (Gráfico de Pizza Manual) */}
          <div>
            <h4 className="text-white text-base font-bold mb-5 flex items-center gap-2"><FileText className="w-4 h-4 neon-text" /> Gastos por Categoria</h4>
            <div className="flex justify-center items-center h-52">
              {/* Representação visual simplificada do gráfico de pizza */}
              <div className="w-48 h-48 rounded-full border-[15px] border-[#222222] relative">
                <div className="absolute inset-0 rounded-full border-[15px] border-[#00FF41]" style={{ clipPath: 'polygon(50% 50%, 50% 0%, 100% 0%, 100% 65%, 50% 65%)' }}></div>
                <div className="absolute inset-0 rounded-full border-[15px] border-blue-400" style={{ clipPath: 'polygon(50% 50%, 50% 65%, 20% 100%, 0% 80%, 0% 50%)' }}></div>
                <div className="absolute inset-0 rounded-full border-[15px] border-yellow-400" style={{ clipPath: 'polygon(50% 50%, 0% 50%, 0% 20%, 20% 0%, 50% 0%)' }}></div>
              </div>
            </div>
          </div>
          {/* Visão Geral Financeira (Gráfico de Barras Manual) */}
          <div>
            <h4 className="text-white text-base font-bold mb-5 flex items-center gap-2"><BarChart3 className="w-4 h-4 neon-text" /> Visão Geral Financeira</h4>
            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <div className="w-3 h-3 bg-cyan-400"></div>
                <span className="text-[#B0B0B0] text-xs flex-1">Orçamento</span>
                <div className="w-40 h-2 bg-[#222222]"><div className="h-full bg-cyan-400" style={{ width: '100%' }}></div></div>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-3 h-3 bg-red-500"></div>
                <span className="text-[#B0B0B0] text-xs flex-1">Gastos</span>
                <div className="w-40 h-2 bg-[#222222]"><div className="h-full bg-red-500" style={{ width: `${(totalExpenses/monthlyBudget)*100}%` }}></div></div>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-3 h-3 bg-[#00FF41]"></div>
                <span className="text-[#B0B0B0] text-xs flex-1">Restante</span>
                <div className="w-40 h-2 bg-[#222222]"><div className="h-full bg-[#00FF41]" style={{ width: `${(currentBudget/monthlyBudget)*100}%` }}></div></div>
              </div>
            </div>
          </div>
        </div>

        {/* Upgrades Disponíveis */}
        <div className="mb-8">
          <h4 className="text-white text-base font-bold mb-5 flex items-center gap-2"><BrainCircuit className="w-4 h-4 neon-text" /> Upgrades Disponíveis</h4>
          <div className="grid grid-cols-2 gap-4">
            <div className="bg-[#080808] p-5 neon-border-blue relative">
              <span className="text-[#00FF41] text-[10px] uppercase tracking-widest neon-border p-1.5 absolute -top-3 right-4 bg-[#080808]">Recomendado</span>
              <div className="flex gap-4 items-center mb-4 mt-2">
                <div className="w-10 h-10 neon-border-blue flex items-center justify-center"><Building className="w-6 h-6 neon-text-blue" /></div>
                <div>
                  <p className="text-white text-sm font-bold">Fundo de Emergência</p>
                  <p className="text-[#B0B0B0] text-xs">Construa uma reserva de segurança para imprevistos</p>
                </div>
              </div>
              <div className="flex justify-between text-xs text-[#B0B0B0] uppercase tracking-widest">
                <span>Investimento: <span className="neon-text-blue">R$ 500.00</span></span>
                <span>Benefício: <span className="neon-text">+10% Defesa contra eventos críticos</span></span>
              </div>
            </div>
            <div className="bg-[#080808] p-5 neon-border group hover:border-[#39FF14] hover:shadow-[0_0_10px_rgba(57,255,20,0.2)]">
              <div className="flex gap-4 items-center mb-4">
                <div className="w-10 h-10 neon-border flex items-center justify-center"><BookOpenText className="w-6 h-6 neon-text" /></div>
                <div>
                  <p className="text-white text-sm font-bold">Curso/Capacitação</p>
                  <p className="text-[#B0B0B0] text-xs">Aumente sua renda futura com novas habilidades</p>
                </div>
              </div>
              <div className="flex justify-between text-xs text-[#B0B0B0] uppercase tracking-widest">
                <span>Investimento: <span className="neon-text">R$ 300.00</span></span>
                <span>Benefício: <span className="neon-text">+15% Chance de missões de renda extra</span></span>
              </div>
            </div>
          </div>
        </div>

        {/* Upgrades Bloqueados */}
        <div>
          <h4 className="text-white text-base font-bold mb-5 flex items-center gap-2"><BrainCircuit className="w-4 h-4 text-[#B0B0B0]" /> Upgrades Bloqueados</h4>
          <div className="grid grid-cols-2 gap-4">
            {/* Upgrade Bloqueado 1 */}
            <div className="bg-[#080808] p-5 neon-border border-dashed border-[#222222] opacity-60">
              <span className="text-[#B0B0B0] text-[10px] uppercase tracking-widest neon-border border-dashed border-[#222222] p-1.5 absolute -top-3 right-4 bg-[#080808]">Bloqueado</span>
              <div className="flex gap-4 items-center mb-4 mt-2">
                <div className="w-10 h-10 neon-border border-dashed border-[#222222] flex items-center justify-center"><Target className="w-6 h-6 text-[#B0B0B0]" /></div>
                <div>
                  <p className="text-[#B0B0B0] text-sm font-bold">Investimento em CDB</p>
                  <p className="text-[#B0B0B0] text-xs">Rendimento conservador com liquidez</p>
                </div>
              </div>
              <p className="text-xs text-red-500 uppercase tracking-widest">Necessário: Faltam R$ 331.30</p>
            </div>
            {/* Upgrade Bloqueado 2 */}
            <div className="bg-[#080808] p-5 neon-border border-dashed border-[#222222] opacity-60">
              <span className="text-[#B0B0B0] text-[10px] uppercase tracking-widest neon-border border-dashed border-[#222222] p-1.5 absolute -top-3 right-4 bg-[#080808]">Bloqueado</span>
              <div className="flex gap-4 items-center mb-4 mt-2">
                <div className="w-10 h-10 neon-border border-dashed border-[#222222] flex items-center justify-center"><Target className="w-6 h-6 text-[#B0B0B0]" /></div>
                <div>
                  <p className="text-[#B0B0B0] text-sm font-bold">Tesouro Direto</p>
                  <p className="text-[#B0B0B0] text-xs">Investimento de longo prazo garantido pelo governo</p>
                </div>
              </div>
              <p className="text-xs text-red-500 uppercase tracking-widest">Necessário: Faltam R$ 131.30</p>
            </div>
          </div>
        </div>

        {/* Botões */}
        <div className="grid grid-cols-2 gap-4 mt-12">
          <NeonButton variant="secondary"><TrendingDown className="w-4 h-4 mr-2" /> Baixar Relatório</NeonButton>
          <NeonButton onClick={() => onOpenChange(false)}><CheckCircle2 className="w-4 h-4 mr-2" /> Entendido</NeonButton>
        </div>
      </div>
    </div>
  );
}