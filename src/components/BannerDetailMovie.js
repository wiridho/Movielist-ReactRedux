import React from 'react'
import '../Styling/BannerDetailMovie.css'
// Import icon
import { BsPlayCircle } from "react-icons/bs";
import { BsFillStarFill } from "react-icons/bs";


export default function BannerDetailMovie({ movie }) {
    return (
        <div className='bannerDetail'>
            <div key={movie.id}>
                <div className='shadow' style={{
                }}>
                </div>
                <div className='detail_wrapper'>
                    <div className='container detail_movie'>
                        <h1>{movie.title}</h1>
                        <div className='captionMovie'>
                            <div ><BsFillStarFill color='yellow' className='mb-1 pe-1' /><span className='vote_average '>{parseFloat(movie.vote_average).toFixed(1)} / 10</span></div>
                            <div><span className='secondary'>{movie.release_date}</span></div>
                            {movie.genres && movie.genres.map((item, index) =>
                                <span key={index}> {item.name}, </span>)}
                        </div>
                        <p >{movie.overview}</p>
                        <a className='movieLink' href={`https://www.youtube.com/results?search_query=${movie.title ? movie.title : movie.original_title} trailer`}>
                            <button className='trailer'>Watch Trailer <BsPlayCircle /></button>
                        </a>
                    </div>
                </div>
                <img className='image_movie'
                    style={{ backgroundImage: 'linear-gradient(to top, rgba(0,0,0,0), rgba(0,0,0,0))' }} src={`https://image.tmdb.org/t/p/original${movie.backdrop_path}`} alt='teks' />
            </div>
        </div>
    )
}