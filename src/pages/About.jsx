import React from 'react'

const About = () => {
  return (
    <div className='bg-[#101828]'>
      <div className='flex py-[2rem] px-[4rem] mb-[3rem]'>
        <div className="left w-1/2">
          <h1 className='text-7xl font-bold text-center'>About Us</h1>
          <p className='text-2xl text-justify mr-[1rem] font-thin pt-[2rem] pr-[2rem]'>Yummify is a home for food lovers, curious cooks, and passionate creators. We’re more than just a recipe-sharing platform — we’re a growing community that believes in the power of food to bring people together. Whether you're discovering your first dish or sharing a family classic, Yummify makes it easy to explore, create, and connect. With carefully crafted features and a user-friendly experience, we aim to make cooking more inspiring, accessible, and enjoyable for everyone. </p>
        </div>
        <div className="right w-1/2">
          <img className='w-full object-contain rounded-[2rem] shadow-2xl shadow-gray-300/40' src="https://images.unsplash.com/photo-1625242661157-e9e5708ffe5e?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" />

        </div>
      </div>

      <div className='flex items-center justify-between gap-[1rem] px-[4rem] '>
        <div className=' relative p-[1rem]  h-[40vh] '>
          <i className="text-4xl text-orange-500 absolute left-[50%] top-[10%] translate-[-50%]  ri-global-line"></i>
          <h1 className='text-4xl text-center mt-[1rem] py-[1rem]'>Our Story</h1>
          <p className='font-thin'>Founded in 2025, Yummify began as a small passion project driven by a love for food and storytelling. Over time, it has evolved into a thriving digital space where culinary creativity meets community. From home kitchens to food enthusiasts around the globe, we aim to bring everyone together through the joy of cooking and sharing.</p>
        </div>

        <div className='relative p-[1rem] h-[40vh] '>
          <i className="text-4xl text-orange-500 absolute left-[50%] top-[10%] translate-[-50%] mb-[2rem]  ri-crosshair-2-fill"></i>
          <h1 className='text-4xl text-center mt-[1rem] py-[1rem]'>Our Mission</h1>
          <p className='font-thin'>Our mission is to empower individuals to discover, create, and share recipes that inspire. We believe cooking is not just about food — it's about connection, culture, and creativity. Whether you're a seasoned chef or just starting out, Yummify is here to support your culinary journey, one recipe at a time.</p>
        </div>

        <div className=' relative p-[1rem]  h-[40vh] '>
          <i className="text-4xl text-orange-500 absolute left-[50%] top-[10%] translate-[-50%] mb-[2rem]  ri-star-line"></i>
          <h1 className='text-4xl text-center mt-[1rem] py-[1rem]'>Our Values</h1>
          <p className='font-thin'>At Yummify, we believe food connects people. We value authenticity by honoring the stories behind every recipe, and we celebrate inclusivity by welcoming diverse cultures and cuisines. We encourage creativity in the kitchen and strive to build a supportive community where everyone can share, learn, and grow together through the joy of cooking.</p>
        </div>

      </div>

    </div>
  )
}

export default About
