import React from 'react'
import '../Styling/BannerDetailMovie.css'


export default function BannerDetailMovie({ movie }) {
    console.log(movie)
    return (
        <div key={movie.id} className='d-flex justify-content-center jumbotron-container'>

            <div className=' shadow' >
            </div>

            <img className='image_movie'
                style={{ backgroundImage: 'linear-gradient(to top, rgba(0,0,0,0), rgba(0,0,0,0))' }} src={`https://image.tmdb.org/t/p/original${movie.backdrop_path}`} alt='teks' />
            <div className='container bg-primary  justify-content-center detail_movie'>
                <h1>tes</h1>
                <p>{movie.overview}</p>
            </div>
        </div>
    )
}