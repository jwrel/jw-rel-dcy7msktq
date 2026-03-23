import { useState } from 'react'
import { useAuth } from '@/hooks/use-auth'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { toast } from 'sonner'

export default function LoginPage() {
  const { signIn, signUp } = useAuth()
  const [email, setEmail] = useState('dppsoft@gmail.com')
  const [password, setPassword] = useState('securepassword123')
  const [loading, setLoading] = useState(false)

  const handleAuth = async (action: 'login' | 'register') => {
    setLoading(true)
    const { error } =
      action === 'login' ? await signIn(email, password) : await signUp(email, password)

    if (error) {
      toast.error(error.message)
    } else if (action === 'register') {
      toast.success('Conta criada com sucesso! Você já pode entrar.')
    }
    setLoading(false)
  }

  return (
    <div className="flex min-h-dvh items-center justify-center p-4 bg-muted/30">
      <div className="w-full max-w-sm space-y-6 bg-card p-8 rounded-2xl border shadow-sm animate-fade-in-up">
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold tracking-tight text-primary">JW REL</h1>
          <p className="text-sm text-muted-foreground mt-2">Acesse sua conta para continuar</p>
        </div>

        <div className="space-y-4">
          <div className="space-y-2">
            <Input
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              type="email"
              placeholder="Email"
              className="h-12"
            />
          </div>
          <div className="space-y-2">
            <Input
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              type="password"
              placeholder="Senha"
              className="h-12"
            />
          </div>
        </div>

        <div className="space-y-3 pt-2">
          <Button
            className="w-full h-12 text-md"
            disabled={loading}
            onClick={() => handleAuth('login')}
          >
            Entrar
          </Button>
          <Button
            variant="outline"
            className="w-full h-12"
            disabled={loading}
            onClick={() => handleAuth('register')}
          >
            Criar Nova Conta
          </Button>
        </div>
      </div>
    </div>
  )
}
