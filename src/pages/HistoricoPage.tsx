export default function HistoricoPage() {
  return (
    <div className="p-6 pb-24 min-h-dvh animate-fade-in">
      <h1 className="text-2xl font-bold mb-2">Histórico</h1>
      <p className="text-muted-foreground mb-6">Visualize seus relatórios de meses anteriores.</p>

      <div className="bg-card border rounded-xl p-8 text-center text-muted-foreground">
        Sem histórico disponível.
      </div>
    </div>
  )
}
