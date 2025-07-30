import React, { createContext, useEffect } from 'react'
import { useState } from 'react'

export const context = createContext(null)

const Recipecontext = (props) => {
    const [data, setdata] = useState([])
   
    useEffect(() => {
  try {
    const storedRecipes = JSON.parse(localStorage.getItem('recipes'));
    if (Array.isArray(storedRecipes)) {
      setdata(storedRecipes);
    } else {
      setdata([]);
    }
  } catch (error) {
    console.error("Failed to parse localStorage data:", error);
    setdata([]);
  }
},[]);
    
  return (
    <context.Provider value={{data,setdata}}>
{props.children}
    </context.Provider>
  )
}

export default Recipecontext
