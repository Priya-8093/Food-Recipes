import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from './../pages/Home';
import Recipe from './../pages/Recipe';
import About from './../pages/About';
import Create from './../pages/Create';
import Recipedetail from './../components/Recipedetail';
import Error from './../pages/Error';
import Favourite from './../pages/Favourite';

const Mainroutes = () => {
  return (
    <Routes>
      <Route path='/' element=<Home /> />
      <Route path='/recipes' element=<Recipe /> />
      <Route path='/recipes/details/:id' element=<Recipedetail /> />

      <Route path='/about' element=<About /> />
      <Route path='/create' element=<Create /> />
      <Route path='/fav' element=<Favourite /> />
      <Route path='*' element=<Error /> />
    </Routes>
  )
}

export default Mainroutes
