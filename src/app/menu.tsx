'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'

const LINKS = [
    { href: '/', label: 'Static route' },
    { href: '/dynamic/1', label: 'Dynamic route' },
]

export default function Menu() {
    const pathname = usePathname()
    return (
        <nav>
            {LINKS.map(({ href, label }) =>
                <Link
                    key={href}
                    href={href}
                    className={`nav-link ${(href === pathname ? 'nav-link--current' : '')}`}
                >
                    {label}
                </Link>,
            )}
        </nav>
    )
}
