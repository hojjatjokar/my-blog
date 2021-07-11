import Link from 'next/link'

export default function Header() {
  return (
      <header className="bg-primary text-white">
        <Link href="/">
          <a className="hover:underline inline-block p-4">Home</a>
        </Link>
        <Link href="/portfolio">
          <a className="hover:underline inline-block p-4">Portfolio</a>
        </Link>
        <Link href="/about">
          <a className="hover:underline inline-block p-4">About</a>
        </Link>
        <Link href="/contact">
          <a className="hover:underline inline-block p-4">Contact</a>
        </Link>
      </header>
  )
}
