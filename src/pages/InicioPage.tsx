import { Link } from 'react-router-dom'
import { FileText, Play } from 'lucide-react'
import { Button } from '@/components/ui/button'

export default function InicioPage() {
  return (
    <div className="p-6 pb-24 min-h-dvh bg-muted/20 animate-fade-in">
      <div className="mb-8">
        <h1 className="text-3xl font-bold tracking-tight">Início</h1>
        <p className="text-muted-foreground mt-1">Bem-vindo de volta ao seu painel.</p>
      </div>

      <div className="grid gap-4 sm:grid-cols-2">
        <div className="bg-card border rounded-2xl p-6 shadow-sm flex items-center justify-between">
          <div>
            <p className="text-sm font-medium text-muted-foreground">Horas este mês</p>
            <h2 className="text-4xl font-bold mt-1">12:30</h2>
          </div>
          <div className="h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center text-primary">
            <Play className="w-6 h-6 ml-1" />
          </div>
        </div>

        <div className="bg-card border rounded-2xl p-6 shadow-sm flex items-center justify-between">
          <div>
            <p className="text-sm font-medium text-muted-foreground">Estudos ativos</p>
            <h2 className="text-4xl font-bold mt-1">3</h2>
          </div>
          <div className="h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center text-primary">
            <FileText className="w-6 h-6" />
          </div>
        </div>
      </div>

      <div className="mt-8">
        <Link to="/enviar">
          <Button className="w-full h-14 text-lg rounded-xl shadow-sm">
            Enviar Relatório Mensal
          </Button>
        </Link>
      </div>
    </div>
  )
}
