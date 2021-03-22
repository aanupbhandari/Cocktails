import React from 'react'
import { Link } from 'react-router-dom'

const Cocktail = ({ id, image, name, glass, info }) => {
  return (
    <article className='cocktail'>
      <div>
        <img src={image} alt={name} />
      </div>
      <div className='cocktail-footer'>
        <h4>{name}</h4>
        <h4>{glass}</h4>
        <p>{info}</p>
        <Link to={`/cocktails/${id}`} className='btn btn-primary btn-details'>
          Details
        </Link>
      </div>
    </article>
  )
}

export default Cocktail
