import React, { useState } from 'react'
import './placeorder.css'
import OrderService from '../services/OrderService'

const PlaceOrder = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    street: '',
    city: '',
    state: '',
    zipCode: '',
    country: '',
    phone: ''
  })
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(null)
  const [success, setSuccess] = useState(false)

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: value
    }))
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setLoading(true)
    setError(null)
    setSuccess(false)

    try {
      const orderData = {
        ...formData,
        items: [], // Add cart items here
        totalPrice: 0 // Add total price here
      }

      const response = await OrderService.createOrder(orderData)
      if (response.success) {
        setSuccess(true)
        setFormData({
          firstName: '',
          lastName: '',
          email: '',
          street: '',
          city: '',
          state: '',
          zipCode: '',
          country: '',
          phone: ''
        })
        console.log('Order created successfully:', response.order)
      }
    } catch (err) {
      setError(err.message || 'Failed to place order')
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className='placeorder'>
      {error && <div className='error-message'>{error}</div>}
      {success && <div className='success-message'>Order placed successfully!</div>}

      <div className='placeorder-left'>
        <p className='title'>Delivery Information</p>
        <form onSubmit={handleSubmit} className='placeorder-form'>
          <div className='multi-fields'>
            <input
              type='text'
              name='firstName'
              placeholder='First name'
              value={formData.firstName}
              onChange={handleChange}
              required
            />
            <input
              type='text'
              name='lastName'
              placeholder='Last name'
              value={formData.lastName}
              onChange={handleChange}
              required
            />
          </div>

          <input
            type='email'
            name='email'
            placeholder='Email address'
            value={formData.email}
            onChange={handleChange}
            required
          />

          <input
            type='text'
            name='street'
            placeholder='Street'
            value={formData.street}
            onChange={handleChange}
            required
          />

          <div className='multi-fields'>
            <input
              type='text'
              name='city'
              placeholder='City'
              value={formData.city}
              onChange={handleChange}
              required
            />
            <input
              type='text'
              name='state'
              placeholder='State'
              value={formData.state}
              onChange={handleChange}
              required
            />
          </div>

          <div className='multi-fields'>
            <input
              type='text'
              name='zipCode'
              placeholder='Zip code'
              value={formData.zipCode}
              onChange={handleChange}
              required
            />
            <input
              type='text'
              name='country'
              placeholder='Country'
              value={formData.country}
              onChange={handleChange}
              required
            />
          </div>

          <input
            type='tel'
            name='phone'
            placeholder='Phone'
            value={formData.phone}
            onChange={handleChange}
            required
          />
        </form>
      </div>

      <div className='placeorder-right'>
        <div className='cart-total'>
          <h2>Cart Totals</h2>
          <div>
            <div className='cart-total-details'>
              <p>Subtotal</p>
              <p>$0.00</p>
            </div>
            <hr />
            <div className='cart-total-details'>
              <p>Delivery Fee</p>
              <p>$0.00</p>
            </div>
            <hr />
            <div className='cart-total-details'>
              <p>Total</p>
              <p>$0.00</p>
            </div>
          </div>
          <button className='checkout-btn' onClick={handleSubmit} disabled={loading}>
            {loading ? 'PROCESSING...' : 'PROCEED TO PAYMENT'}
          </button>
        </div>
      </div>
    </div>
  )
}

export default PlaceOrder
