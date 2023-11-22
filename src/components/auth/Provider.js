'use client'
import { NextUIProvider } from '@nextui-org/react';
import { SessionProvider } from 'next-auth/react';
import { useState } from 'react';
import { QueryClient, QueryClientProvider } from 'react-query';



const Provider = ({ children }) => {
  const [client] = useState(new QueryClient());

  return(
    <QueryClientProvider client={client}>
      <NextUIProvider>
        <SessionProvider>
            {children}
        </SessionProvider>
      </NextUIProvider>
    </QueryClientProvider>
  );
}

export default Provider;