import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import './home.css'
import { assets, menu_list, food_list } from '../assets/frontend_assets/assets'

const Home = () => {
  const [selectedCategory, setSelectedCategory] = useState(null)
  const navigate = useNavigate()

  const addToCart = (item) => {
    try {
      const cart = JSON.parse(localStorage.getItem('cart') || '[]')
      const itemId = item._id || item.id
      const existing = cart.find(ci => ci.id === itemId)
      if (existing) {
        existing.quantity = (existing.quantity || 1) + 1
      } else {
        cart.push({
          id: itemId,
          name: item.name,
          price: item.price,
          quantity: 1,
          image: item.image
        })
      }
      localStorage.setItem('cart', JSON.stringify(cart))
      navigate('/cart')
    } catch (err) {
      console.error('Failed to add to cart', err)
    }
  }

  const filteredFoods = selectedCategory
    ? food_list.filter(item => item.category === selectedCategory)
    : food_list

  return (
    <div className='home'>
      {/* Header Section */}
      <div className='header'>
        <div className='header-content'>
          <h1>Order Your Favorite Food Online</h1>
          <p>Delicious meals delivered to your doorstep in minutes</p>
          <button className='header-btn'>Order Now</button>
        </div>
        <img src={assets.header_img} alt='Header' className='header-img' />
      </div>

      {/* Menu Categories */}
      <div className='explore-menu'>
        <h2>Explore Our Menu</h2>
        <div className='menu-list'>
          {menu_list.map((item, index) => (
            <div
              key={index}
              className={`menu-item ${selectedCategory === item.menu_name ? 'active' : ''}`}
              onClick={() => setSelectedCategory(
                selectedCategory === item.menu_name ? null : item.menu_name
              )}
            >
              <img src={item.menu_image} alt={item.menu_name} />
              <p>{item.menu_name}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Food Items Display */}
      <div className='food-display'>
        <h2>{selectedCategory ? selectedCategory : 'All Items'}</h2>
        <div className='food-list'>
          {filteredFoods.map((item) => (
            <div key={item._id} className='food-item'>
              <div className='food-item-img-container'>
                <img src={item.image} alt={item.name} className='food-item-img' />
                <div className='food-item-overlay'>
                  <button className='add-to-cart-btn' onClick={() => addToCart(item)}>+ Add to Cart</button>
                </div>
              </div>
              <div className='food-item-info'>
                <p className='food-item-name'>{item.name}</p>
                <div className='food-item-rating'>
                  <img src={assets.rating_starts} alt='Rating' />
                </div>
                <p className='food-item-desc'>{item.description}</p>
                <p className='food-item-price'>${item.price}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Download App Section */}
      <div className='app-download'>
        <p>For better experience download our app</p>
        <div className='download-links'>
          <img src={assets.play_store} alt='Play Store' />
          <img src={assets.app_store} alt='App Store' />
        </div>
      </div>
    </div>
  )
}

export default Home
