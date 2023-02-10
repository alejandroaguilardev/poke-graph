import type { AppProps } from 'next/app'
import { ModeProvider } from '../context'
import '../styles/globals.css'
import { ThemeSetting } from '../theme/ThemeSetting'

export default function App({ Component, pageProps }: AppProps) {
  return (
    <ModeProvider>
      <ThemeSetting>
        <Component {...pageProps} />
      </ThemeSetting>
    </ModeProvider>
  )
}
