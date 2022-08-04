import * as React from 'react'
import { SWRConfig } from "swr";
import { ChakraProvider } from '@chakra-ui/react'
import theme from './theme'

function MyApp({ Component, pageProps }) {
  return (
    <SWRConfig
      value={{
        fetcher: (resource, init) =>
          fetch(resource, init).then((res) => res.json()),
      }}
    ><ChakraProvider theme={theme}>
      <Component {...pageProps} />
      </ChakraProvider>
    </SWRConfig>
  );
}

export default MyApp;
