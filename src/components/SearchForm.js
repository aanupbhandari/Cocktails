import React from 'react'
import { useGlobalContext } from '../context'

const SearchForm = () => {
  const { setSearchTerm } = useGlobalContext()
  // const searchValue = React.useRef('')

  // focus the input

  // React.useEffect(() => {
  //   searchValue.current.focus()
  // }, [])

  // app wont refresh as user presses the enter

  const handleSubmit = (e) => {
    e.preventDefault()
  }

  const searchCocktail = (e) => {
    setSearchTerm(e.target.value)
  }
  return (
    <section className='section search'>
      <form className='search-form' onSubmit={handleSubmit}>
        <div className='form-control'>
          <label htmlFor='name'>Search your favorite drinks</label>
          <input
            type='text'
            id='name'
            // ref={searchValue}
            onChange={searchCocktail}
          />
        </div>
      </form>
    </section>
  )
}

export default SearchForm
