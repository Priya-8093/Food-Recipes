
import Recipecard from './Recipecard';
import Footer from './../components/Footer';

const Favourite = () => {

  const favourite = JSON.parse(localStorage.getItem('fav')) || []

  const renderrecipe = favourite.map(recipe => {
    return (
      <div key={recipe?.id}>
        <Recipecard recipe={recipe} />
      </div>
    )
  })
  return (
    <div className='relative  bg-[#101828]'>
      <div className='mb-[7rem] flex flex-wrap p-4 '>
        {favourite.length ? renderrecipe : " No Fav recipe not found"}
      </div>

    </div>
  )
}

export default Favourite
