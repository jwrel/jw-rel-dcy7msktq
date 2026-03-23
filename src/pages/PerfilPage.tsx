import { useAuth } from '@/hooks/use-auth'
import { Button } from '@/components/ui/button'
import { LogOut, User as UserIcon } from 'lucide-react'

export default function PerfilPage() {
  const { signOut, user } = useAuth()

  return (
    <div className="p-6 pb-24 min-h-dvh animate-fade-in">
      <h1 className="text-2xl font-bold mb-6">Perfil</h1>

      <div className="bg-card border rounded-2xl p-6 shadow-sm mb-6 flex flex-col items-center">
        <div className="h-20 w-20 rounded-full bg-secondary flex items-center justify-center mb-4">
          <UserIcon className="h-10 w-10 text-muted-foreground" />
        </div>
        <h2 className="font-semibold text-lg">{user?.email || 'Usuário'}</h2>
        <p className="text-sm text-muted-foreground mt-1">Conta Ativa</p>
      </div>

      <div className="space-y-4">
        <Button variant="outline" className="w-full justify-start h-12 px-4">
          Configurações da Conta
        </Button>
        <Button variant="outline" className="w-full justify-start h-12 px-4">
          Gerenciar Assinatura
        </Button>
        <Button
          variant="destructive"
          className="w-full justify-start h-12 px-4 mt-8"
          onClick={signOut}
        >
          <LogOut className="w-4 h-4 mr-2" />
          Sair da Conta
        </Button>
      </div>
    </div>
  )
}
