import React from 'react'
import '../Styling/BannerDetailMovie.css'


export default function BannerDetailMovie({ movie }) {
    console.log(movie)
    return (
        <div key={movie.id} className='container jumbotron-container'>
            <div>
                <div className=''>
                    <img className='image_movie' src={`https://image.tmdb.org/t/p/original${movie.backdrop_path}`} alt='teks' />
                </div>
                <div className='detail_movie'>
                    <h1>{movie.title}</h1>
                    {movie.genres && movie.genres.map((item, id) => (
                        <div className='genre_movie'>
                            <p key={item.id}>{item.name}</p>
                        </div>
                    ))}
                    <p>{movie.overview}</p>
                </div>
            </div>
        </div>
    )
}