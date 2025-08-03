import React, { useContext } from 'react'
import { useForm } from 'react-hook-form'
import Recipe from './Recipe';
import { nanoid } from 'nanoid';
import { context } from '../context/Recipecontext';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import Footer from '../components/Footer';



const Create = () => {
  const navigate = useNavigate()

  const { data, setdata } = useContext(context)
  const { register, handleSubmit, reset } = useForm()



  const submitHandler = (e) => {
    e.id = nanoid()

    let copydata = [...data]
    copydata.push(e)
    setdata(copydata)

    localStorage.setItem("recipes", JSON.stringify(copydata))

    toast.success('Recipe create!')
    reset()

    navigate('/recipes')

  }
  console.log(data);


  return (
    <div className='flex h-[100vh] bg-[#101828] w-full'>

      <div className='w-1/2  '>
        <img className='w-full h-[100vh] object-contain hover:scale-105' src="/assets/pngwing.com.png" alt="" />

      </div>

      <div className=' w-fit h-fit bg-gray-900  p-[2rem]'>
        <form onSubmit={handleSubmit(submitHandler)}>
          <h1 className='text-4xl font-thin pb-3'>Create Your Own Recipe!</h1>
          <input {...register("url")} type="url"

            placeholder='Enter image Url'
            className="block text-xl px-1 bg-gray-400/20 w-full outline-0 py-2 mb-[1rem]" />

          <input {...register("title")} type="text" placeholder='Recipe title'
            className="block text-xl px-1 bg-gray-400/20 w-full outline-0 py-2 mb-[1rem]" />

          <input {...register("name")} type="text" placeholder='chef name'
            className="block text-xl px-1 bg-gray-400/20 w-full outline-0 py-2 mb-[1rem]" />

          <textarea {...register('desc')} placeholder="enter description"
            className="block text-xl px-1 w-full bg-gray-400/20 outline-0 py-2 mb-[1rem]" ></textarea>

          <textarea {...register('ingi')} placeholder="enter ingridients"
            className="block bg-gray-400/20  text-xl text-white px-1 w-full outline-0 py-2 mb-[1rem]" ></textarea>

          <textarea {...register('instructions')} placeholder="enter instructions"
            className="block text-xl px-1 w-full bg-gray-400/20 outline-0 py-2 mb-[1rem] "></textarea>


          <select  {...register('category')}
            className="block text-xl w-full px-1 outline-0 py-2 mb-[1rem] bg-gray-400/50 " >
            <option value="starter">Starter</option>
            <option value="sizzler">Sizzler</option>
            <option value="maincourse">Maincourse</option>
            <option value="dessert">Dessert</option>
          </select>

          <button
            className="active:scale-98 block text-xl bg-sky-600 px-[1rem] py-[0.5rem] rounded-2xl border-2 outline-0 cursor-pointer">Save Recipe</button>
        </form>

      </div>
    </div>
  )
}

export default Create
