import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { AuxiProvider } from 'auxi/react'
import { auxiSupabase } from './lib/supabase'
import './styles/index.css'
import App from './App'

async function bootstrap() {
  // Auxi requires an authenticated user to capture events.
  // Anonymous sign-in satisfies this without any user-facing auth flow.
  await auxiSupabase.auth.signInAnonymously()

  createRoot(document.getElementById('root')!).render(
    <StrictMode>
      <AuxiProvider supabase={auxiSupabase}>
        <App />
      </AuxiProvider>
    </StrictMode>,
  )
}

bootstrap()
