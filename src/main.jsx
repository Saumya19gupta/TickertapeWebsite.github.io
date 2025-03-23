import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import Footer from "./components/Footer";
import { Outlet } from 'react-router-dom';


createRoot(document.getElementById('root')).render(
  
  <StrictMode>
    <App />
    <Outlet/>
    <Footer />
  </StrictMode>,
); 




