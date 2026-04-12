import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { AuxiProvider } from '@factoredui/react'
import { createWebAdapter } from '@factoredui/core'
import { auxiSupabase } from './lib/supabase'
import './styles/index.css'
import App from './App'

async function bootstrap() {
  // Auxi requires an authenticated user to capture events.
  // Anonymous sign-in satisfies this without any user-facing auth flow.
  await auxiSupabase.auth.signInAnonymously()

  createRoot(document.getElementById('root')!).render(
    <StrictMode>
      <AuxiProvider supabase={auxiSupabase} adapter={createWebAdapter()} platform="web">
        <App />
      </AuxiProvider>
    </StrictMode>,
  )
}

bootstrap()
