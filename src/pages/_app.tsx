import '../styles/globals.css'
import type { AppProps } from 'next/app'
<link 
  rel="stylesheet" 
  href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.4/css/all.min.css" 
/>
export default function App({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />
}