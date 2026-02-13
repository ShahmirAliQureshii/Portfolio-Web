import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App'
import React from 'react'
import { ThemeProvider } from './context/ThemeContext'

createRoot(document.getElementById('root')! as HTMLElement).render(
    <React.StrictMode>
        <ThemeProvider>
            <App />
        </ThemeProvider>
    </React.StrictMode>
)