import React from 'react'
import { BASE_URL } from '../App'

const Recipe = (props) => {

  const {ingredients, name, category, image, description} = props

  return (
    <div className='recipeCard'>
        <img src={BASE_URL + image} alt={name} />
        <h2>{name}</h2>
        <h3>{category}</h3>
        <ul>
            {ingredients.map(ingredient => <li>{ingredient}</li>)}
        </ul>
        <p>{description}</p>
    </div>
  )
}

export default Recipe