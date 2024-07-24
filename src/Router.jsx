// Liens React et React-Router
import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

// Liens composants pages (fichiers jsx)
import Home from './Pages/Home/home.jsx'
import About from './Pages/About/about.jsx'
import Error404 from './Pages/Error404/error404.jsx'
import Housing from './Pages/Housing/housing.jsx'

// Liens composants standard (fichier jsx)
import Header from './Components/Header/header.jsx'
import Footer from './Components/Footer/footer.jsx'

// Liens styles des composants pages (fichier scss)
// import './Pages/Home/home.scss'

// Liens styles des composants standard (fichier scss)
import './Components/Header/header.scss'
import './Components/Footer/footer.scss'
import './Components/Card/card.scss'
import './Components/Banner/banner.scss'

function Router() {
  return (
    <React.StrictMode>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/housing/:bookingId" element={<Housing />} />
          <Route path="*" element={<Error404 />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </React.StrictMode>
  )
}

export default Router
