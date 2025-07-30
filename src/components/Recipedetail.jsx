import React, { useEffect, useState } from 'react'
import { useContext } from 'react'
import { useParams, useNavigate } from 'react-router-dom';
import { context } from './../context/Recipecontext';

import { useForm } from 'react-hook-form';
import { toast } from 'react-toastify';

const Recipedetail = () => {
  const { data, setdata } = useContext(context)
  const params = useParams()
  const recipe = data.find(recipe => params.id == recipe.id)


  const navigate = useNavigate()


  const { register, handleSubmit } = useForm({
    defaultValues: {
      title: recipe.title,
      name: recipe.name,
      ingi: recipe.ingi,
      desc: recipe.desc,
      instructions: recipe.instructions,
      category: recipe.category,
      url: recipe.url
    }
  })

  const submitHandler = (recipe) => {
    const index = data.findIndex((recipe) => params.id == recipe.id)

    let copydata = [...data]
    copydata[index] = { ...copydata[index], ...recipe }

    setdata(copydata)
    localStorage.setItem("recipes", JSON.stringify(copydata))


  }


  const deleteHandler = () => {
    const filterdata = data.filter(r => r.id != params.id)




    setdata(filterdata)

    localStorage.setItem("recipes", JSON.stringify(filterdata))


    const existingFav = JSON.parse(localStorage.getItem('fav')) || [];
    const updatedFav = existingFav.filter(f => f.id !== recipe.id);
    localStorage.setItem("fav", JSON.stringify(updatedFav));


    toast.success('Recipe Deleted!')
    navigate('/recipes ')
  }

  const [favourite, setfavourite] = useState(
    JSON.parse(localStorage.getItem('fav')) || []
  )
  const favouriteHandler = () => {
    let copyfav = [...favourite]
    copyfav.push(recipe)
    setfavourite(copyfav)
    localStorage.setItem('fav', JSON.stringify(copyfav))
  }

  const unfavouriteHandler = () => {

    const filterfav = favourite.filter(f => f.id != recipe?.id)
    setfavourite(filterfav)
    localStorage.setItem('fav', JSON.stringify(filterfav))


  }

  useEffect(() => {
    console.log("recipe.detail mounted");
    return () => {
      console.log("unmounted");

    }

  }, [favourite])





  return recipe ? <div className='flex relative bg-[#101828] '>
    <button onClick={() => navigate('/recipes')} className="active:scale-98 absolute right-[4%] top-[2%] bg-green-600 text-xl px-[1rem] py-[0.5rem] rounded-2xl  outline-0 cursor-pointer">Go back</button>


    <div className="left relative w-1/2 p-4 ">
      {favourite.find((f) => f.id == recipe?.id) ?
        <i onClick={unfavouriteHandler} className="text-red-700 active:scale-120 duration-150 absolute right-[5%] text-3xl ri-heart-3-fill"></i>

        :
        <i onClick={favouriteHandler} className="text-red-700 duration-150 active:scale-120 absolute right-[5%] text-3xl ri-heart-3-line"></i>

      }
      <h1 className='px-3 pt-2 text-2xl font-black'>{recipe.title}</h1>
      <h4 className='px-3  text-xl font-thin text-red-500 mb-3'><span className='text-white'>~</span>{recipe.name}</h4>
      <img className="w-1/2 h-[25vh] object-cover overflow-hidden rounded ml-[4rem] mb-3" src={recipe.url} alt="" />
      <p className='px-3  text-md font-thin text-white mb-3'><span className='text-2xl'>Ingridients:</span><br />{recipe.ingi}</p>
      <p className='px-3  text-md font-thin text-white mb-3'><span className='text-2xl'>Description:</span><br />{recipe.desc}</p>
      <p className='px-3  text-md font-thin text-white mb-3'><span className='text-2xl'>Instructions:</span><br />{recipe.instructions}</p>
      <h4 className='px-3  text-xl font-thin text-white '><span className='text-2xl'>Category:</span>{recipe.category}</h4></div>


    <div className=' w-fit h-fit bg-gray-900  p-[2rem] ml-[8rem]'>
      <form className="bg-gray-800 pl-4 p-5" onSubmit={handleSubmit(submitHandler)}>
        <input {...register("url")} type="url"

          placeholder='Enter image Url'
          className="block text-xl px-1 bg-gray-400/20 w-full outline-0 py-2 mb-[1rem]" />

        <input {...register("title")} type="text" placeholder='Recipe title'
          className="block text-xl px-1 bg-gray-400/20 w-full outline-0 py-2 mb-[1rem]" />

        <input {...register("name")} type="text" placeholder='chef name'
          className="block text-xl px-1 bg-gray-400/20 w-full outline-0 py-2 mb-[1rem]" />

        <textarea {...register('desc')} placeholder="enter description"
          className="block text-xl px-1 w-full bg-gray-400/20 outline-0 py-2 mb-[1rem]"></textarea>

        <textarea {...register('ingi')} placeholder="enter ingridients"
          className="block text-xl px-1 w-full bg-gray-400/20 outline-0 py-2 mb-[1rem]" ></textarea>

        <textarea {...register('instructions')} placeholder="enter instructions"
          className="block text-xl px-1 w-full bg-gray-400/20 outline-0 py-2 mb-[1rem]"></textarea>


        <select  {...register('category')}
          className="block text-xl w-full px-1 outline-0 py-2 mb-[1rem] bg-gray-400/50 " >
          <option value="starter">Starter</option>
          <option value="sizzler">Sizzler</option>
          <option value="maincourse">Maincourse</option>
          <option value="dessert">Dessert</option>
        </select>

        <button onClick={() => { toast.success('Recipe Updated!') }}
          className="active:scale-98 mr-4 text-xl px-[1rem] py-[0.5rem] rounded-2xl bg-sky-500 outline-0 cursor-pointer">Update Recipe</button>
        <button onClick={deleteHandler}
          className="active:scale-98 bg-red-600 text-xl px-[1rem] py-[0.5rem] rounded-2xl  outline-0 cursor-pointer">Delete Recipe</button>

      </form>
    </div>

  </div> : "loading..."
}

export default Recipedetail
