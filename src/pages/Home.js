import React, { useState, useEffect } from 'react'
import axios from 'axios'
import Navigation from '../components/Navigation'
import CardMovie from '../components/CardMovie'
import CategoryButton from '../components/CategoryButton'
import CarouselCard from '../components/CarouselCard'
import '../Styling/app.css'
import PopularCategory from '../components/PopularCategory'
import FooterSection from '../components/FooterSection'


export default function Home() {
  const [database, setDatabase] = useState([])
  const [genre, setGenre] = useState([])
  const apiKey = '39d534102975349064b234a5f47263bb'


  const loadData = async () => {
    try {
      const response = await axios.get(`https://api.themoviedb.org/3/movie/popular?api_key=${apiKey}&language=en-US&page=1`)
      const genreResponse = await axios.get(`https://api.themoviedb.org/3/genre/movie/list?api_key=${apiKey}&language=en-US`)
      setDatabase(response.data.results)
      setGenre(genreResponse.data.genres)
      console.log(genre)
    } catch (error) {
      console.log(error)
    }
  }

  useEffect(() => {
    loadData()
  }, [])

  return (
    <div className='wrapper-movies'>
      <Navigation />
      <CarouselCard database={database} />
      <PopularCategory title={'Popular Video'} />
      <CardMovie database={database} />
      <PopularCategory title={'Browse by Category'} />
      <CategoryButton genre={genre} />
      <CardMovie database={database} />
      <FooterSection />
    </div>
  )
}
