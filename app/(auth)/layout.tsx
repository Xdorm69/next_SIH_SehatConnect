import Logo from '@/components/Logo'
import React from 'react'

const layout = ({children}: {children: React.ReactNode}) => {
  return (
    <div>
        <Logo className='absolute top-4 left-12 text-primary'/>
        {children}
    </div>
  )
}

export default layout