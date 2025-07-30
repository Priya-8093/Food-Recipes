import React from 'react'
import { Link, } from 'react-router-dom'

const Recipecard = (props) => {

  const { id, url, name, title, ingi, desc, category, instruction } = props.recipe



  return (

    <div className=' mr-3 mb-2 w-[20vw]  bg-[#B8CFCE] text-gray-800  shadow-sm hover:scale-101 '>

      <Link to={`/recipes/details/${id}`}>
        <img className="w-full h-[25vh] object-cover overflow-hidden rounded" src={url} alt="" />
        <h1 className='px-3 pt-2 text-2xl font-black'>{title}</h1>
        <h4 className='px-3  text-xl font-thin text-red-500'>{name}</h4>
        <p className='px-3 py-2 text-xl font-thin text-[#27391C]'>{desc.slice(0, 100)}...{""}
          <small className=' text-blue-400'>more</small>

        </p>

      </Link>
    </div>

  )
}

export default Recipecard
