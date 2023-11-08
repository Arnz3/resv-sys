'use client'
import { NextUIProvider } from '@nextui-org/react';
import { SessionProvider } from 'next-auth/react';




const Provider = ({ children }) => {
  return(
    <NextUIProvider>
      <SessionProvider>
          {children}
      </SessionProvider>
    </NextUIProvider>
  );
}

export default Provider;