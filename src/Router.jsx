// Liens React et React-Router
import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

// Liens composants pages (fichiers jsx)
import Home from './Pages/Home/home.jsx'
import About from './Pages/About/about.jsx'
import Error404 from './Pages/Error404/error404.jsx'
import Housing from './Pages/Housing/housing.jsx'

// Liens composants standard (fichier jsx)
import Header from './Layout/Header/header.jsx'
import Footer from './Layout/Footer/footer.jsx'

function Router() {
  return (
    <React.StrictMode>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/housing/:housingId" element={<Housing />} />
          <Route path="*" element={<Error404 />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </React.StrictMode>
  )
}

export default Router
