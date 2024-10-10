'use client'

import { TooltipProvider } from '@radix-ui/react-tooltip'
import { ReactNode } from 'react'

type ProvidersProps = { children: ReactNode }

export default function Providers({ children }: ProvidersProps) {
  return <TooltipProvider>{children}</TooltipProvider>
}
