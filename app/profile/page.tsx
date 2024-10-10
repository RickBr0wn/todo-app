import Link from 'next/link'
import { Button } from '~/components/ui/button'

export default function ProfilePage() {
  return (
    <div className="flex flex-col items-center justify-center gap-4 p-4">
      <h1>Profile Page</h1>
      <Link href="/">
        <Button>Home</Button>
      </Link>
    </div>
  )
}
