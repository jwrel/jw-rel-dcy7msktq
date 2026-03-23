import { Link } from 'react-router-dom'
import { Button } from '@/components/ui/button'

export default function LandingPage() {
  return (
    <div className="min-h-screen bg-background flex flex-col items-center justify-center text-center p-4">
      <h1 className="text-5xl font-bold tracking-tighter mb-4 text-primary">JW REL</h1>
      <p className="text-xl text-muted-foreground mb-8 max-w-[500px]">
        O seu companheiro para gerenciar horas de campo, revisitas e estudos de forma simples e
        eficiente.
      </p>
      <Link to="/login">
        <Button size="lg" className="rounded-full px-8 text-lg h-14">
          Acessar o Aplicativo
        </Button>
      </Link>
    </div>
  )
}
