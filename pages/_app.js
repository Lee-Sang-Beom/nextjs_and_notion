import '../styles/globals.css'
import { ThemeProvider } from 'next-themes'
import { Reset } from 'styled-reset'

function MyApp({ Component, pageProps }) {
  
  return (
    <ThemeProvider attribute='class'>
        <Reset />
        <Component {...pageProps} />
    </ThemeProvider>
  )
}

export default MyApp
