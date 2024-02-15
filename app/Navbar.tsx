import Link from "next/link";
import { PiBugBeetleFill } from "react-icons/pi";

const Navbar = () => {
    const links = [
        { label: 'Dashboard', href: '/' },
        { label: 'Issues', href: '/issues' }
    ]
    return (
        <nav>
            <ul className="flex items-center gap-16 mb-10 border-b p-5 h-16">
                <li className="ml-3 hover:bg-slate-100 p-2.5 rounded-full transition-colors"><Link href="/"><PiBugBeetleFill size={35} /></Link></li>
                {links.map(link => <li key={link.href} className="text-slate-600 text-lg font-medium hover:text-slate-950 transition-colors"><Link href={link.href}>{link.label}</Link></li>)}
            </ul>
        </nav>
    )
}

export default Navbar;