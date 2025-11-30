import React, { useState } from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Navbar from './components/nav bar/nav.jsx'
import Home from './components/home.jsx'
import Orders from './components/orders.jsx'
import Cart from './components/cart.jsx'
import Footer from './components/footer.jsx'

const App = () => {
  const [showOrders, setShowOrders] = useState(false)

  return (
    <Router>
      <div className='app'>
        <Navbar />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/orders' element={<Orders />} />
          <Route path='/cart' element={<Cart />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  )
}

export default App
