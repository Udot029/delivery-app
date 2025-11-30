import React, { useState, useEffect } from 'react'
import './cart.css'
import { assets } from '../assets/frontend_assets/assets'

const Cart = () => {
  const [cartItems, setCartItems] = useState([])

  useEffect(() => {
    try {
      const stored = JSON.parse(localStorage.getItem('cart') || '[]')
      setCartItems(stored)
    } catch (err) {
      console.error('Failed to load cart from localStorage', err)
      setCartItems([])
    }
  }, [])

  const removeItem = (id) => {
    const updated = cartItems.filter(item => item.id !== id)
    setCartItems(updated)
    localStorage.setItem('cart', JSON.stringify(updated))
  }

  const updateQuantity = (id, quantity) => {
    if (quantity > 0) {
      const updated = cartItems.map(item =>
        item.id === id ? { ...item, quantity } : item
      )
      setCartItems(updated)
      localStorage.setItem('cart', JSON.stringify(updated))
    }
  }

  const getTotalPrice = () => {
    return cartItems.reduce((total, item) => total + (item.price * item.quantity), 0).toFixed(2)
  }

  const getTotalItems = () => {
    return cartItems.reduce((total, item) => total + item.quantity, 0)
  }

  return (
    <div className='cart'>
      <div className='cart-items'>
        <h2>Your Cart</h2>
        {cartItems.length === 0 ? (
          <p className='empty-cart'>Your cart is empty</p>
        ) : (
          <div className='cart-items-list'>
            {cartItems.map((item) => (
              <div key={item.id} className='cart-item'>
                <img src={item.image} alt={item.name} className='item-image' />
                <div className='item-details'>
                  <h3>{item.name}</h3>
                  <p className='item-price'>${item.price}</p>
                </div>
                <div className='item-quantity'>
                  <button onClick={() => updateQuantity(item.id, item.quantity - 1)}>-</button>
                  <input
                    type='number'
                    value={item.quantity}
                    onChange={(e) => updateQuantity(item.id, parseInt(e.target.value) || 1)}
                  />
                  <button onClick={() => updateQuantity(item.id, item.quantity + 1)}>+</button>
                </div>
                <p className='item-total'>${(item.price * item.quantity).toFixed(2)}</p>
                <button
                  className='remove-btn'
                  onClick={() => removeItem(item.id)}
                >
                  <img src={assets.remove_icon_red} alt='Remove' />
                </button>
              </div>
            ))}
          </div>
        )}
      </div>

      <div className='cart-summary'>
        <div className='summary-box'>
          <h2>Cart Summary</h2>
          <div className='summary-details'>
            <div className='summary-row'>
              <span>Subtotal</span>
              <span>${getTotalPrice()}</span>
            </div>
            <hr />
            <div className='summary-row'>
              <span>Delivery Fee</span>
              <span>$2.00</span>
            </div>
            <hr />
            <div className='summary-row total'>
              <span>Total</span>
              <span>${(parseFloat(getTotalPrice()) + 2).toFixed(2)}</span>
            </div>
          </div>
          <button className='checkout-btn'>PROCEED TO CHECKOUT</button>
        </div>
      </div>
    </div>
  )
}

export default Cart
