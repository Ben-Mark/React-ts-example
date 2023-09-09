import { ChakraProvider } from '@chakra-ui/react'
import { AppProps } from 'next/app'
import { inter, theme } from '../themes/protheme'
import {store} from "@/store";
import { Provider } from "react-redux";

process.env.OPENAI_API_KEY="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"

process.env.AI_TEMP="0.7"

process.env.AI_MAX_TOKENS="100"
process.env.OPENAI_API_ORG="org-gSba5GY4bxsaB8fYSKqO05Mo"

// import '../css/example.css'
// import 'swiper/swiper-bundle.css';

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
