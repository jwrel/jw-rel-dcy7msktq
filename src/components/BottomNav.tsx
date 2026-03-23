import { Link, useLocation } from 'react-router-dom'
import { Home, BookOpen, Calendar, Clock, User } from 'lucide-react'
import { cn } from '@/lib/utils'

export function BottomNav() {
  const location = useLocation()

  const navItems = [
    { icon: Home, label: 'Início', path: '/' },
    { icon: BookOpen, label: 'Estudos', path: '/estudos' },
    { icon: Calendar, label: 'Diário', path: '/diario' },
    { icon: Clock, label: 'Histórico', path: '/historico' },
    { icon: User, label: 'Perfil', path: '/perfil' },
  ]

  return (
    <div className="fixed bottom-0 left-0 right-0 border-t bg-background flex justify-around p-2 pb-safe z-50 shadow-[0_-4px_10px_rgba(0,0,0,0.05)]">
      {navItems.map((item) => {
        const isActive = location.pathname === item.path
        return (
          <Link
            key={item.path}
            to={item.path}
            className={cn(
              'flex flex-col items-center justify-center p-2 text-[10px] sm:text-xs transition-colors',
              isActive
                ? 'text-primary font-semibold'
                : 'text-muted-foreground hover:text-foreground',
            )}
          >
            <item.icon className={cn('w-5 h-5 mb-1', isActive && 'stroke-2')} />
            <span>{item.label}</span>
          </Link>
        )
      })}
    </div>
  )
}
