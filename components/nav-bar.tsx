import { auth, signOut } from '~/auth'
import GithubButton from './github-button'
import SignIn from './sign-in-button'
import { ModeToggle } from './toggle-colour-mode'
import { Avatar, AvatarFallback, AvatarImage } from './ui/avatar'
import { User } from 'next-auth'
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from './ui/dropdown-menu'

export default async function NavBar() {
  const session = await auth()

  return (
    <nav className="w-full flex items-center justify-end p-4">
      <div className="flex gap-1 items-center">
        <GithubButton />
        <ModeToggle />
        {session ? <UserButton user={session.user} /> : <SignIn />}
      </div>
    </nav>
  )
}

export type UserButtonProps = {
  user: User | undefined
}

export function UserButton({ user }: UserButtonProps) {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger>
        <UserAvatar user={user} />
      </DropdownMenuTrigger>
      <DropdownMenuContent>
        <DropdownMenuItem>
          <form
            action={async () => {
              'use server'
              await signOut()
            }}
          >
            <button type="submit">Sign Out</button>
          </form>
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  )
}

export type UserAvatarProps = {
  user: User | undefined
}

export function UserAvatar({ user }: UserAvatarProps) {
  if (!user || !user.image) return

  return (
    <Avatar className="h-10 w-10">
      <AvatarImage src={user.image} alt={'user avatar'} />
      <AvatarFallback>
        {(user.name &&
          user.name
            .trim()
            .split(' ')
            .filter(Boolean)
            .map(n => n[0].toUpperCase())
            .join('')) ||
          'Invalid Input'}
      </AvatarFallback>
    </Avatar>
  )
}
