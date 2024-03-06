import { Button } from '@nextui-org/react'
import { signOut, useSession } from 'next-auth/react'
import React from 'react'


export default function LogoutButton() {
  const { data: session } = useSession()
  return (
    <div>
      <p>{session.user.name}</p>

      <Button color='primary' variant='flat' className='text-base' onClick={() => signOut()}>
        Logout
      </Button>
    </div>
  )
}
