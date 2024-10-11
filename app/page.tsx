import { auth } from '~/auth'
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
      const todos = await prisma.post.findMany()

      if (todos.length > 0) {
        return (
          <div className="flex flex-col items-center justify-center gap-4 p-4">
            <h1>Todos</h1>
            <ul className="list-disc list-inside">
              {todos.map(todo => (
                <li key={todo.id}>{todo.title}</li>
              ))}
            </ul>
          </div>
        )
      }

      return <p className="text-center">You have no posts</p>
    } catch (error) {
      console.log(error)
      throw new Error('Something went wrong')
    }
  }

  return <p className="text-center">You must be signed in to view the todos</p>
}
