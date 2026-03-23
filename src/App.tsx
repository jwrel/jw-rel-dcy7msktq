import { useEffect } from 'react'
import { Toaster } from '@/components/ui/toaster'
import { Toaster as Sonner } from '@/components/ui/sonner'
import { TooltipProvider } from '@/components/ui/tooltip'
import { BrowserRouter, Routes, Route, Navigate, useLocation } from 'react-router-dom'
import { BottomNav } from '@/components/BottomNav'
import { ConnectionStatusBar } from '@/components/ConnectionStatusBar'
import { PaywallScreen } from '@/components/PaywallScreen'
import { startAutoSync } from '@/lib/syncService'
import { useAuth as useAppAuth } from '@/hooks/useAuth'
import { useSubscription } from '@/hooks/useSubscription'
import { AuthProvider } from '@/hooks/use-auth'
import { Loader2 } from 'lucide-react'

import LandingPage from './pages/LandingPage'
import LoginPage from './pages/LoginPage'
import InicioPage from './pages/InicioPage'
import EstudosPage from './pages/EstudosPage'
import DiarioPage from './pages/DiarioPage'
import DatasImportantesPage from './pages/DatasImportantesPage'
import HistoricoPage from './pages/HistoricoPage'
import EnviarPage from './pages/EnviarPage'
import PerfilPage from './pages/PerfilPage'
import CheckoutRetornoPage from './pages/CheckoutRetornoPage'
import NotFound from './pages/NotFound'

/** Check if current hostname is the landing page domain */
function isLandingDomain(): boolean {
  const host = window.location.hostname
  return host === 'jwrel.com.br' || host === 'www.jwrel.com.br' || host === 'jwrel.lovable.app'
}

function AppRoutes() {
  const { user, isReady } = useAppAuth()
  const location = useLocation()

  useEffect(() => {
    const cleanup = startAutoSync()
    return cleanup
  }, [])

  // Landing page: shown on jwrel.com.br / www.jwrel.com.br / jwrel.lovable.app or /lp route
  if (isLandingDomain() || location.pathname === '/lp') {
    return (
      <Routes>
        <Route path="*" element={<LandingPage />} />
      </Routes>
    )
  }

  // Loading state
  if (!isReady) {
    return (
      <div className="min-h-dvh bg-background flex items-center justify-center">
        <Loader2 className="w-8 h-8 animate-spin text-primary" />
      </div>
    )
  }

  // Checkout return page is accessible without auth
  if (location.pathname === '/checkout/sucesso') {
    return (
      <Routes>
        <Route path="/checkout/sucesso" element={<CheckoutRetornoPage />} />
      </Routes>
    )
  }

  // Not authenticated → show login
  if (!user) {
    if (location.pathname !== '/login') {
      return <Navigate to="/login" replace />
    }
    return (
      <Routes>
        <Route path="/login" element={<LoginPage />} />
        <Route path="*" element={<Navigate to="/login" replace />} />
      </Routes>
    )
  }

  // Authenticated → redirect away from /login
  if (location.pathname === '/login') {
    return <Navigate to="/" replace />
  }

  // Authenticated app with subscription check
  return <AuthenticatedApp />
}

function AuthenticatedApp() {
  const { hasAccess, isLoading, refresh, result, userEmail } = useSubscription()

  if (isLoading) {
    return (
      <div className="min-h-dvh bg-background flex items-center justify-center">
        <Loader2 className="w-8 h-8 animate-spin text-primary" />
      </div>
    )
  }

  if (!hasAccess) {
    return <PaywallScreen onRefresh={refresh} result={result} userEmail={userEmail} />
  }

  return (
    <>
      <ConnectionStatusBar />
      <Routes>
        <Route path="/" element={<InicioPage />} />
        <Route path="/estudos" element={<EstudosPage />} />
        <Route path="/diario" element={<DiarioPage />} />
        <Route path="/datas-importantes" element={<DatasImportantesPage />} />
        <Route path="/historico" element={<HistoricoPage />} />
        <Route path="/enviar" element={<EnviarPage />} />
        <Route path="/perfil" element={<PerfilPage />} />
        <Route path="/checkout/sucesso" element={<CheckoutRetornoPage />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
      <BottomNav />
    </>
  )
}

const App = () => {
  return (
    <AuthProvider>
      <TooltipProvider>
        <Toaster />
        <Sonner
          position="top-center"
          toastOptions={{
            style: {
              background: 'hsl(220 65% 22%)',
              color: 'hsl(0 0% 100%)',
              border: '1px solid hsl(220 50% 35%)',
              borderRadius: '1rem',
            },
          }}
        />
        <BrowserRouter>
          <AppRoutes />
        </BrowserRouter>
      </TooltipProvider>
    </AuthProvider>
  )
}

export default App
