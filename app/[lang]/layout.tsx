import { PropsWithChildren } from 'react'

export default function Layout({ children }: PropsWithChildren) {
  return (
    <div>
      home layout
      {children}
    </div>
  )
}
