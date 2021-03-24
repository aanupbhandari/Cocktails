import React, { useState, useContext, useEffect, useCallback } from 'react'
const url = 'https://www.thecocktaildb.com/api/json/v1/1/search.php?s='

const AppContext = React.createContext()

const AppProvider = ({ children }) => {
  // loading usestate
  const [loading, setLoading] = useState(false)
  // when user type to search the cocktails
  const [searchTerm, setSearchTerm] = useState('')
  // cocktails display usestate
  const [cocktails, setCocktails] = useState([])

  // since we have the url(api from cocktaildb) we fetch the url and we call this fucntion every time we type something in the input
  const fetchDrinks = useCallback(async () => {
    setLoading(true)
    try {
      const response = await fetch(`${url}${searchTerm}`)
      const data = await response.json()
      // passing the list of arrays of drinks to the data
      const { drinks } = data
      if (drinks) {
        const newDrinks = drinks.map((item) => {
          const {
            idDrink,
            strDrink,
            strAlcoholic,
            strGlass,
            strDrinkThumb,
          } = item
          return {
            id: idDrink,
            name: strDrink,
            image: strDrinkThumb,
            info: strAlcoholic,
            glass: strGlass,
          }
        })
        // after mapping the drinks of array we want to invoke the function
        setCocktails(newDrinks)
      } else {
        setCocktails([])
      }
      setLoading(false)
    } catch (error) {
      console.log(error)
    }
  }, [searchTerm])
  useEffect(() => {
    fetchDrinks()
  }, [searchTerm, fetchDrinks])

  return (
    <AppContext.Provider value={{ loading, cocktails, setSearchTerm }}>
      {children}
    </AppContext.Provider>
  )
}

export const useGlobalContext = () => {
  return useContext(AppContext)
}
export { AppContext, AppProvider }
