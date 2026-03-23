import { Button } from './ui/button'

export function PaywallScreen({
  onRefresh,
}: {
  onRefresh: () => void
  result: any
  userEmail: string | null
}) {
  return (
    <div className="min-h-dvh bg-background flex flex-col items-center justify-center p-6 text-center animate-fade-in-up">
      <div className="bg-card border rounded-2xl p-8 max-w-md w-full shadow-lg">
        <h2 className="text-2xl font-bold mb-4">Assinatura Necessária</h2>
        <p className="text-muted-foreground mb-8">
          Você precisa de uma assinatura ativa para acessar todos os recursos do aplicativo.
        </p>
        <Button onClick={onRefresh} className="w-full">
          Renovar Assinatura
        </Button>
      </div>
    </div>
  )
}
