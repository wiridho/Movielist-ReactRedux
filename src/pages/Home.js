import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'


import '../Styling/app.css'
import Navigation from '../components/Navigation'
import CardMovie from '../components/CardMovie'
import CategoryButton from '../components/CategoryButton'
import CarouselCard from '../components/CarouselCard'
import PopularCategory from '../components/PopularCategory'
import FooterSection from '../components/FooterSection'

import { getMovies, getGenre, } from '../features/movie/movieSLice'


export default function Home() {
  const dispatch = useDispatch()
  const { movies, genre } = useSelector((state) => state.movies)
  const apiKey = '39d534102975349064b234a5f47263bb'

  useEffect(() => {
    dispatch(getMovies(apiKey))
    dispatch(getGenre(apiKey))
  }, [dispatch])

  return (
    <div className='wrapper-movies'>
      <Navigation />
      <CarouselCard database={movies} />
      <PopularCategory title={'Popular Video'} />
      <CardMovie database={movies} />
      <PopularCategory title={'Browse by Category'} />
      <CategoryButton genre={genre} />
      <CardMovie database={movies} />
      <FooterSection />
    </div>
  )
}
