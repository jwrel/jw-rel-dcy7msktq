import { useAuth as useSupabaseAuth } from './use-auth'

export function useAuth() {
  const { user, loading } = useSupabaseAuth()

  return {
    user,
    isReady: !loading,
  }
}
