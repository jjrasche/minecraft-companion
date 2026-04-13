import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { Provider } from '@factoredui/react'
import { auxiSupabase } from './lib/supabase'
import './styles/index.css'
import App from './App'

async function bootstrap() {
  // factoredui requires an authenticated user to capture events.
  // Anonymous sign-in satisfies this without any user-facing auth flow.
  await auxiSupabase.auth.signInAnonymously()

  createRoot(document.getElementById('root')!).render(
    <StrictMode>
      <Provider supabase={auxiSupabase}>
        <App />
      </Provider>
    </StrictMode>,
  )
}

bootstrap()
