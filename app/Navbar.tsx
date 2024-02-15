'use client';

import Link from "next/link";
import { PiBugBeetleFill } from "react-icons/pi";
import classnames from "classnames";
import { usePathname } from "next/navigation";

const Navbar = () => {
    const currentPath = usePathname();
    const links = [
        { label: 'Dashboard', href: '/' },
        { label: 'Issues', href: '/issues' }
    ]
    return (
        <nav>
            <ul className="flex items-center gap-16 mb-10 border-b p-5 h-16">
                <li className="ml-3 hover:bg-slate-100 p-2.5 rounded-full transition-colors"><Link href="/"><PiBugBeetleFill size={35} /></Link></li>
                {links.map(link => <li key={link.href} className={classnames({
                    'text-slate-600': link.href !== currentPath,
                    'text-slate-950': link.href === currentPath,
                    'hover:text-slate-950': link.href !== currentPath,
                    'transition-colors': link.href !== currentPath,
                    'text-lg': true,
                    'font-medium': true,
                })}><Link href={link.href}>{link.label}</Link></li>)}
            </ul>
        </nav>
    )
}

export default Navbar;