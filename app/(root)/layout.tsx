import StreamVideoProvider from '@/providers/StreamClientProvider'
import React, { FC } from 'react'

type Props = {
    readonly children: React.ReactNode
}

const RootLayout: FC<Props> = ({children}) => {
  return (
    <main>
        <StreamVideoProvider>
            {children}
        </StreamVideoProvider>
    </main>
  )
}

export default RootLayout