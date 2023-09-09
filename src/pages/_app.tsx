import { ChakraProvider } from '@chakra-ui/react'
import { AppProps } from 'next/app'
import { inter, theme } from "@/themes/protheme"
import {store} from "@/store";
import { Provider } from "react-redux";


export default function App({ Component, pageProps }: AppProps) {
  return (
      <Provider store={store}>
    <ChakraProvider theme={theme}>
      <main className={inter.className}>
        <Component {...pageProps} />
      </main>
    </ChakraProvider>
      </Provider>
  )
}
