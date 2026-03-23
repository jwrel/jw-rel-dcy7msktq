import { Link } from 'react-router-dom'
import { CheckCircle } from 'lucide-react'
import { Button } from '@/components/ui/button'

export default function CheckoutRetornoPage() {
  return (
    <div className="min-h-dvh bg-background flex flex-col items-center justify-center p-6 text-center animate-fade-in-up">
      <div className="h-20 w-20 rounded-full bg-green-100 flex items-center justify-center mb-6">
        <CheckCircle className="h-10 w-10 text-green-600" />
      </div>
      <h1 className="text-2xl font-bold mb-2">Pagamento Confirmado!</h1>
      <p className="text-muted-foreground mb-8 max-w-xs">
        Sua assinatura foi processada com sucesso. Você já pode voltar a usar o JW REL.
      </p>
      <Link to="/">
        <Button className="w-full max-w-xs h-12">Voltar para o Início</Button>
      </Link>
    </div>
  )
}
