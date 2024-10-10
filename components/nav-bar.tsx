import { ModeToggle } from './toggle-colour-mode'

export default function NavBar() {
  return (
    <nav className="w-full flex items-center justify-end p-4">
      <ModeToggle />
    </nav>
  )
}
