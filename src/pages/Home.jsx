import React from 'react'
import { useNavigate } from 'react-router-dom'
import Footer from './../components/Footer';

const Home = () => {
  const navigate = useNavigate()


  return (
    <div className='h-fit rounded-2xl bg-[#101828] overflow-x-hidden  '>

      <div>
        <div className='h-fit relative'>
          <div className='w-[100%] absolute left-[20vw] top-[5%]'>
            <h1 className='text-9xl justify content-center absolute left-[15vw]'>Yummify </h1>
            <h1 className='text-9xl text-white font-thin '> <br /> Discover & Share <br/> Delicious Recipes</h1>
            <p className='text-2xl text-emerald-50  font-thin py-7 px-[7rem]'>Explore dishes from around the world , curated by passionate home chef</p>
            <button onClick={() => { navigate('/recipes') }} className='bg-orange-400 ml-[12rem] px-[1rem] text-2xl py-[0.5rem] rounded-2xl active:scale-95 cursor-pointer'>Explore recipies</button>
            <button onClick={() => { navigate('/create') }} className='bg-none border-2 ml-[4rem] px-[1rem] text-2xl py-[0.5rem] rounded-2xl active:scale-95 cursor-pointer'>Add your own</button>
          </div>
          <img className="w-[99vw] mb-20 h-[85vh] object-center p-[1rem] rounded-[2rem]  " src="https://images.unsplash.com/photo-1576402187878-974f70c890a5?q=80&w=1333&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" />
        </div>
        <h1 className='text-3xl font-thin pb-[3rem] px-[3rem]'>Featured Category</h1>
        <div className='w-full flex justify-between items-center px-[2rem] mb-[3rem] gap-[2rem]'>
          <div className='relative w-1/4 h-[40vh] hover:scale-102 rounded-2xl'>
            <h4 className='absolute top-[50%] left-[50%] translate-[-50%] text-5xl font-thin z-10'>Starter</h4>

            <img className='h-full blur-[1px] object-cover overflow-hidden rounded-2xl' src="https://plus.unsplash.com/premium_photo-1661600407445-f672740d5c53?q=80&w=1171&auto=format&fit=crop&
        ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" />

          </div>

          <div className='relative hover:scale-102 w-1/4 h-[40vh] rounded-2xl'>
            <h4 className='absolute top-[50%] left-[50%] translate-[-50%] text-5xl font-thin z-10'>Main Course</h4>

            <img className='h-full blur-[1px] object-cover overflow-hidden rounded-2xl' src="https://images.unsplash.com/photo-1690401767645-595de0e0e5f8?q=80&w=1013&auto=format&fit=crop&
ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" />        </div>

          <div className='relative hover:scale-102 w-1/4 h-[40vh] rounded-2xl'>
            <h4 className='absolute top-[50%] left-[50%] translate-[-50%] text-5xl font-thin z-10'>Desserts</h4>

            <img className='h-full blur-[1px] object-cover overflow-hidden rounded-2xl' src="https://images.unsplash.com/photo-1624353365286-3f8d62daad51?q=80&w=1170&auto=format&fit=crop&
ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" />
          </div>

          <div className='relative hover:scale-102 w-1/4 h-[40vh] rounded-2xl'>
            <h4 className='absolute top-[50%] left-[50%] translate-[-50%] text-5xl font-thin z-10'>Drinks</h4>

            <img className='h-full blur-[1px] object-cover overflow-hidden rounded-2xl' src="https://images.unsplash.com/photo-1619604395920-a16f33192a50?q=80&w=1171&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" />
          </div>
        </div>

      </div>

    </div>
  )
}

export default Home
