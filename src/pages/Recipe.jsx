import React, { useContext } from 'react'
import { context } from '../context/Recipecontext'
import Recipecard from './Recipecard';
import Footer from './../components/Footer';

const Recipe = () => {

  const { data } = useContext(context)

  const renderrecipe = data.map(recipe => {
    return (
      <div key={recipe?.id}>
        <Recipecard recipe={recipe} />
      </div>
    )
  })
  return (
    <div className='h-fit'>
      <div className='bg-[#101828] h-fit flex flex-wrap p-4 '>
        {data.length ? renderrecipe : " recipe not found"}

      </div>

    </div>
  )
}

export default Recipe
