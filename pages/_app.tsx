import '../styles/globals.css'
import { ThemeProvider } from 'next-themes'
import { Reset } from 'styled-reset'
import { AppProps } from 'next/app'

function MyApp({ Component , pageProps }:AppProps) {
  
  return (
    <ThemeProvider attribute='class'>
        <Reset />
        <Component {...pageProps} />
    </ThemeProvider>
  )
}

export default MyApp
