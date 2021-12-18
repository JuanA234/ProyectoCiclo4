import React from 'react'

const AuthLayout = ({children}) => {
    return (
        <div className='flex flex-col md:flex-row flex-no-wrap h-screen'>
        <div className='flex w-full h-full'>
          <div className='w-full h-full'>
            {children}
          </div>
        </div>
      </div>
    )
}

export default AuthLayout
