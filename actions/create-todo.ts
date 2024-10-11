'use server'

import { revalidatePath } from 'next/cache'
import { auth } from '~/auth'
import prisma from '~/prisma'

export async function createTodo(formData: FormData) {
  const session = await auth()
  const user = session?.user

  if (!user?.id) {
    console.log('Not Authenticated')
    throw new Error('Not Authenticated')
  }
  const title = formData.get('title') as string

  if (!title) {
    throw new Error('Title is required')
  }

  try {
    await prisma.todo.create({
      data: {
        title,
        authorId: user.id,
      },
    })

    revalidatePath('/')
  } catch (error) {
    console.error('Failed to create todo:', error)
    throw new Error('Failed to create todo')
  }
}
