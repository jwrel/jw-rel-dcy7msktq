import { useAuth } from '@/hooks/use-auth'

const Index = () => {
  const { user, loading } = useAuth()

  if (loading) {
    return (
      <div className="min-h-[80vh] flex items-center justify-center">
        <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-primary"></div>
      </div>
    )
  }

  return (
    <div className="container mx-auto py-12 px-4 flex flex-col items-center justify-center min-h-[80vh] text-center space-y-6 animate-fade-in-up">
      <div className="space-y-2">
        <h1 className="text-4xl font-bold tracking-tight">JW REL</h1>
        <p className="text-xl text-muted-foreground">Iniciando a importação do projeto.</p>
      </div>

      <div className="bg-card border rounded-xl p-8 max-w-lg w-full shadow-sm text-left space-y-6">
        <div>
          <h2 className="text-lg font-semibold flex items-center gap-2">
            <span className="flex h-3 w-3 relative">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-3 w-3 bg-green-500"></span>
            </span>
            Passos 1 e 2 Concluídos
          </h2>
          <p className="text-sm text-muted-foreground mt-1">
            Arquitetura base configurada e conexão com o Supabase estabelecida com sucesso.
          </p>
        </div>

        <div className="space-y-2">
          <p className="text-sm font-medium">Status do Supabase:</p>
          <div className="bg-secondary/50 rounded-md p-3 text-sm flex items-center justify-between border border-border/50">
            <span className="text-muted-foreground">Autenticação:</span>
            <span className="font-mono bg-background px-2 py-1 rounded border shadow-sm text-xs">
              {user ? 'Conectado' : 'Aguardando Login / Sessão'}
            </span>
          </div>
        </div>

        <div className="pt-4 border-t border-border">
          <h3 className="font-medium text-primary">Próximo Passo (3 e 4)</h3>
          <p className="text-sm mt-2 text-muted-foreground">
            Aguardando os arquivos de <strong>Layout</strong> e <strong>Rotas</strong> para
            continuarmos com a reconstrução da interface. Por favor, cole os arquivos no chat.
          </p>
        </div>
      </div>
    </div>
  )
}

export default Index
