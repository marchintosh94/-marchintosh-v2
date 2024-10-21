'use client'
import cn from '@/utils/cn'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

interface NavItemOptions {
  href: string
  children: React.ReactNode
}

const NavItem: React.FC<NavItemOptions> = ({ href, children }) => {
  const active = usePathname() == href

  return (
    <Link href={href}>
      <div
        className={cn({
          'menu-item': true,
          active: active
        })}
      >
        {children}
      </div>
    </Link>
  )
}

export default NavItem
