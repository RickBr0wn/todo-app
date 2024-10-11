'use client'

import { Prisma } from '@prisma/client'
import { Card } from '~/components/ui/card'
import { Button } from './ui/button'
import PencilSVG from './icons/pencil-svg'
import TrashSVG from './icons/trash-icon'
import ClockSVG from './icons/clock-svg'

export type TodoWithAuthor = Prisma.TodoGetPayload<{
  include: { author: true }
}>

export type TodoItemProps = {
  todo: TodoWithAuthor
}

export default function TodoItem({ todo }: TodoItemProps) {
  return (
    <li className="w-full">
      <Card className="w-full flex items-center gap-4 py-1 px-4">
        <div className="flex flex-1">
          {todo.title.charAt(0).toUpperCase() + todo.title.slice(1)}
        </div>
        <div className="text-muted-foreground text-xs">
          {todo.createdAt.toLocaleDateString()}
        </div>
        <div className="flex gap-2 pl-4">
          <Button variant={'outline'} className="p-3">
            <PencilSVG height={15} width={15} />
          </Button>
          <Button variant={'outline'} className="p-3">
            <ClockSVG height={15} width={15} />
          </Button>
          <Button variant={'outline'} className="p-3">
            <TrashSVG height={15} width={15} />
          </Button>
        </div>
      </Card>
    </li>
  )
}
