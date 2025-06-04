import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'

import { OwlbearGate } from '~/components/owlbear-gate'
import { ThemeProvider } from '~/components/theme-provider'

import App from '~/rapp'
import '~/index.css'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <OwlbearGate>
      <ThemeProvider>
        <App />        
      </ThemeProvider>
    </OwlbearGate>
  </StrictMode>,
)
