import React from 'react'
import { useNavigate } from 'react-router-dom'

const Footer = () => {
  const navigate = useNavigate()
  return (
    <footer className="bg-gray-900 text-white  border-t">
      <div className="max-w-7xl mx-auto px-6 py-12 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-10">

        {/* Logo & About */}
        <div>
          <h1 className="text-2xl font-bold text-orange-400 mb-3">Yummify</h1>
          <p className="text-sm text-gray-400">
            Discover and share delicious recipes curated by passionate home chefs. Join the Yummify community today!
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h2 className="text-lg font-semibold mb-3">Quick Links</h2>
          <ul className="space-y-2 text-sm text-gray-400">
            <li><a onClick={() => navigate('/')} className="hover:text-white">Home</a></li>
            <li><a onClick={() => navigate('/recipes')} className="hover:text-white">Recipes</a></li>
            <li><a onClick={() => navigate('/fav')} className="hover:text-white">Favourites</a></li>
            <li><a onClick={() => navigate('/create')} className="hover:text-white">Add Recipe</a></li>
          </ul>
        </div>

        {/* Categories */}
        <div>
          <h2 className="text-lg font-semibold mb-3">Categories</h2>
          <ul className="space-y-2 text-sm text-gray-400">
            <li>Starter</li>
            <li>Main Course</li>
            <li>Dessert</li>
            <li>Sizzler</li>
          </ul>
        </div>

        {/* Social Media */}
        <div>
          <h2 className="text-lg font-semibold mb-3">Connect with Us</h2>
          <div className="flex space-x-4 text-gray-400">
            <a href="#" className="hover:text-white"><i className="ri-instagram-line text-2xl"></i></a>
            <a href="#" className="hover:text-white"><i className="ri-facebook-box-line text-2xl"></i></a>
            <a href="#" className="hover:text-white"><i className="ri-twitter-x-line text-2xl"></i></a>
            <a href="#" className="hover:text-white"><i className="ri-mail-line text-2xl"></i></a>
          </div>
        </div>
      </div>

      <div className="text-center text-gray-500 text-sm py-6 border-t border-gray-700">
        &copy; {new Date().getFullYear()} Yummify. All rights reserved.
      </div>
    </footer>

  )
}

export default Footer
