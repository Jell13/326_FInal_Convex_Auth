"use client"

import { AuthLoading, Authenticated } from 'convex/react'
import React from 'react'

const layout = ({children}) => {
  return (
    <html lang="en">
      <body className="">
        <AuthLoading>
            <div className='h-screen w-screen flex justify-center items-center'>
                <p className='text-3xl'>Loading...</p>
            </div>
        </AuthLoading>
        <Authenticated>
            {children}
        </Authenticated>
      </body>
    </html>
  )
}

export default layout
