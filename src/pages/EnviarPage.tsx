import { Button } from '@/components/ui/button'

export default function EnviarPage() {
  return (
    <div className="p-6 pb-24 min-h-dvh animate-fade-in">
      <h1 className="text-2xl font-bold mb-2">Enviar Relatório</h1>
      <p className="text-muted-foreground mb-6">Confira os dados do mês antes de enviar.</p>

      <div className="bg-card border rounded-xl p-6 mb-6">
        <div className="space-y-4">
          <div className="flex justify-between border-b pb-2">
            <span className="text-muted-foreground">Horas</span>
            <span className="font-semibold">12</span>
          </div>
          <div className="flex justify-between border-b pb-2">
            <span className="text-muted-foreground">Estudos</span>
            <span className="font-semibold">3</span>
          </div>
          <div className="flex justify-between pb-2">
            <span className="text-muted-foreground">Vídeos</span>
            <span className="font-semibold">5</span>
          </div>
        </div>
      </div>

      <Button className="w-full h-12">Confirmar e Enviar via WhatsApp</Button>
    </div>
  )
}
