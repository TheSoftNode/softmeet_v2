import React, { FC } from 'react'

import Navbar from '@/components/Navbar'
import Sidebar from '@/components/Sidebar'

type Props = {
    readonly children: React.ReactNode
}

const HomeLayout: FC<Props> = ({children}) => {
  return (
    <main className='relative'>
        <Navbar />

        <div className="flex">
            <Sidebar />

            <section className="flex min-h-screen flex-1 flex-col px-6 pb-6 pt-28
             max-md:pb-14 sm:px-14">
                <div className="w-full">
                    {children}
                </div>

            </section>
        </div>
    </main>
  )
}

export default HomeLayout