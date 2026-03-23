import { Wifi, WifiOff } from 'lucide-react'
import { useEffect, useState } from 'react'

export function ConnectionStatusBar() {
  const [isOnline, setIsOnline] = useState(navigator.onLine)

  useEffect(() => {
    const handleOnline = () => setIsOnline(true)
    const handleOffline = () => setIsOnline(false)

    window.addEventListener('online', handleOnline)
    window.addEventListener('offline', handleOffline)

    return () => {
      window.removeEventListener('online', handleOnline)
      window.removeEventListener('offline', handleOffline)
    }
  }, [])

  if (isOnline) return null

  return (
    <div className="fixed top-0 left-0 right-0 bg-destructive text-destructive-foreground text-xs p-1 px-4 flex items-center justify-center gap-2 z-50">
      <WifiOff className="w-3 h-3" />
      <span>Você está offline. Alterações serão salvas localmente.</span>
    </div>
  )
}
