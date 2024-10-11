'use client'

import { Button } from './ui/button'
import { Input } from './ui/input'
import { useRef, useState } from 'react'
import { createTodo } from '~/actions/create-todo'

export default function TodoInputForm() {
  const formRef = useRef<HTMLFormElement>(null)
  const [isSubmitting, setIsSubmitting] = useState(false)

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()

    setIsSubmitting(true)

    const formData = new FormData(formRef.current!)

    try {
      await createTodo(formData)

      if (formRef.current) {
        formRef.current.reset()
      }
    } catch (error) {
      console.error('Error creating todo:', error)
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <form
      ref={formRef}
      className="flex flex-col gap-2 max-w-md w-full"
      onSubmit={handleSubmit}
    >
      <Input type="text" name="title" placeholder="What needs to be done?" />
      <Button
        disabled={isSubmitting}
        variant={'outline'}
        className="uppercase"
        type="submit"
      >
        Add Todo
      </Button>
    </form>
  )
}
