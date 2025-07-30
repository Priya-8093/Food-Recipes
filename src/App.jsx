import React from 'react'
import Navbar from './components/Navbar'
import Mainroutes from './routes/Mainroutes'
import Footer from './components/Footer'

const App = () => {
  return (
    <div className=' h-screen w-screen bg-[#101828] text-white'>
      <Navbar />
      <Mainroutes />
      <Footer />
    </div>
  )
}

export default App
