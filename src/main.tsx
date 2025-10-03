import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import AppRoute from './Router/router.tsx'
import { ToastContainer } from 'react-toastify'
import { seededIfNeeded } from './db.ts'

await seededIfNeeded();

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <ToastContainer
      position="top-right"
      autoClose={3000}
      hideProgressBar
      closeButton={false}
      icon={false}
      toastClassName={() =>
        "bg-transparent shadow-none p-0 flex items-center mb-2"
      }
    />
    <AppRoute />
  </StrictMode>
)
