import React from 'react'
import { Link } from 'react-router-dom'

const Error = () => {
  return (
    <section className='section error-page'>
      <div className='error-container'>
        <h4>There are no cocktails found with the matching results</h4>
        <Link to='/' className='btn-primary'>
          Back Home
        </Link>
      </div>
    </section>
  )
}

export default Error
