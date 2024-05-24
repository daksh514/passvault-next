
import LogInComp from '@/components/LogInComp'
import { authOptions } from '@/lib/authOptions'
import { getServerSession } from 'next-auth'
import { signIn } from 'next-auth/react'
import { redirect } from 'next/navigation'

import React from 'react'

async function page() {
  const session = await getServerSession(authOptions)
  if (session) {
    redirect('/')
  }
  return (
    <div className='flex size-[100vh] items-center justify-center'>
        <LogInComp/>
        {/* <button onClick={()=>signIn('google')}>LogIn</button> */}
    </div>
  )
}

export default page