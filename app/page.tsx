import { auth } from '~/auth'
import TodoInputForm from '~/components/todo-input-form'
import TodoItem from '~/components/todo-item'
import prisma from '~/prisma'

export default async function Home() {
  let session

  try {
    session = await auth()
  } catch (error) {
    console.error('Failed to retrieve session:', error)
    return <p className="text-center">Something went wrong</p>
  }

  if (session?.user?.id) {
    try {
      const todos = await prisma.todo.findMany({
        include: {
          author: true,
        },
      })

      if (todos.length > 0) {
        return (
          <div className="flex flex-col items-center justify-center gap-4 p-4">
            <TodoInputForm />
            <ul className="w-full flex flex-col gap-2">
              {todos.map(todo => (
                <TodoItem key={todo.id} todo={todo} />
              ))}
            </ul>
          </div>
        )
      }

      return (
        <div className="flex flex-col items-center justify-center gap-4 p-4">
          <TodoInputForm />
          <p>You have no posts</p>
        </div>
      )
    } catch (error) {
      console.log(error)
      throw new Error('Something went wrong')
    }
  }

  return <p className="text-center">You must be signed in to view the todos</p>
}
