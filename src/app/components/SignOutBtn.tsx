'use client'
import { useSession,signOut } from 'next-auth/react'
import { redirect } from 'next/navigation'

const SignOutBtn = () => {
    const session  = useSession({
        required: true,
        onUnauthenticated() {
          redirect('/signIn')
        }
      })
  return (
    <button onClick={()=> signOut()}>Sign Out</button>
  )
}

export default SignOutBtn