export default function DiarioPage() {
  return (
    <div className="p-6 pb-24 min-h-dvh animate-fade-in">
      <h1 className="text-2xl font-bold mb-2">Diário</h1>
      <p className="text-muted-foreground mb-6">Seus registros de serviço diário.</p>

      <div className="bg-card border rounded-xl p-8 text-center text-muted-foreground">
        Seu diário está vazio.
      </div>
    </div>
  )
}
