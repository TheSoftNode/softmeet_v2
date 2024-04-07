import React, { FC } from 'react'

type Props = {
    readonly children: React.ReactNode
}

const RootLayout: FC<Props> = ({children}) => {
  return (
    <main>
        {children}
    </main>
  )
}

export default RootLayout