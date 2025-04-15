import React, { useEffect, useState } from 'react'
import Recipe from './components/Recipe'

export const BASE_URL = "http://127.0.0.1:8000/"

const App = () => {

  const [recipes, setRecipes] = useState([])

  useEffect(()=>{
    fetch(BASE_URL + "/recipes/")
    .then(response => response.json())
    .then(data => setRecipes(data))
  }, [])

  return (
    <div className='recipeWrapper'>
      {recipes.map(recipe => <Recipe key={recipe.id} {...recipe}/>)}
    </div>
  )
}

export default App