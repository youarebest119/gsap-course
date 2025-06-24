import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.scss'
import App from './App.jsx'
import UseGsap from './UseGsap.jsx'
import Interactions from './Interactions.jsx'

createRoot(document.getElementById('root')).render(
    <StrictMode>
        {/* <App /> */}
        {/* <UseGsap /> */}
        <Interactions />
    </StrictMode>,
)
