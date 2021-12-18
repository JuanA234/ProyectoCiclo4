
import React from 'react'
import { ToastContainer } from 'react-toastify';

import 'react-toastify/dist/ReactToastify.css';

const PrivateLayout = ({children}) => {
    return (
        <div className='flex flex-col md:flex-row flex-no-wrap h-screen'>
        <div className='flex w-full h-full '>
          <div className='w-full h-full'>
            {children}
          </div>
        </div>
        <ToastContainer />
      </div>
    )
}

export default PrivateLayout
