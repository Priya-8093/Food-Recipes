import React from 'react'
import { NavLink } from 'react-router-dom'

const Navbar = () => {
  return (
    <div className='border-b  text-2xl bg-[#101828] font-thin flex justify-center items-center gap-x-[4rem] py-[2rem]'>
      <NavLink className={(e) => e.isActive ? "text-orange-400" : ""} to='/'>Home</NavLink>
      <NavLink className={(e) => e.isActive ? "text-orange-400" : ""} to='/recipes'>Recipes</NavLink>
      <NavLink className={(e) => e.isActive ? "text-orange-400" : ""} to='/about'>About</NavLink>
      <NavLink className={(e) => e.isActive ? "text-orange-400" : ""} to='/create'>Create Recipe</NavLink>
      <NavLink className={(e) => e.isActive ? "text-orange-400" : ""} to='/fav'>Favourite Recipe</NavLink>

    </div>

  )
}

export default Navbar
