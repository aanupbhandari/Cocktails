import React from 'react'
import Loading from '../components/Loading'
import { Link, useParams } from 'react-router-dom'
const url = 'https://www.thecocktaildb.com/api/json/v1/1/search.php?s='

const SingleCocktail = () => {
  // dynamically adding the id for the route we use useParams
  const { id } = useParams()
  const [loading, setLoading] = React.useState(false)
  const [singleCocktail, setsingleCocktail] = React.useState(null)

  React.useEffect(() => {
    setLoading(true)
    async function getCocktail() {
      try {
        const response = await fetch(`${url}${id}`)
        const data = await response.json()
        console.log(data)
      } catch (error) {
        console.log(error)
        setLoading(false)
      }
    }
    getCocktail()
  }, [id])

  return (
    <section className='section cocktail-section'>
      <h4>{id}</h4>
    </section>
  )
}

export default SingleCocktail
