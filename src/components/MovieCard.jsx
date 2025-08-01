import React from 'react'
import { MOVIE_IMG } from '../utils/constants'

const MovieCard = ({posterPath}) => {
  return (
    <div className='w-48 pr-4'>
        <img  src={MOVIE_IMG+posterPath} alt="" />
    </div>
  )
}

export default MovieCard