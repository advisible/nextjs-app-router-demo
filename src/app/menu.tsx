'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useAdkReset } from '@advisible/adk-react'

const LINKS = [
    { href: '/', label: 'Static route' },
    { href: '/dynamic/1', label: 'Dynamic route' },
]

export default function Menu() {
    const pathname = usePathname()
    /*
     * `pathname` does not include query parameters. Add them to the string
     * passed to `useAdkReset` to also trigger a reset on query parameter changes:
     *
     * const params = useSearchParams()
     * useAdkReset(pathname + params)
    */
    useAdkReset(pathname)

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
