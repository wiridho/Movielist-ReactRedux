import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { useParams } from 'react-router-dom'
import { getMovieDetails, getMovieCast } from '../features/movie/movieDetailSlice'

import Navigation from '../components/Navigation'
import BannerDetailMovie from '../components/BannerDetailMovie'
import CardMovie from '../components/CardMovie'
import FooterSection from '../components/FooterSection'


export default function DetailMovie() {
    const { id } = useParams();
    const { details, cast } = useSelector((state) => state.details)
    const dispatch = useDispatch()



    useEffect(() => {
        dispatch(getMovieDetails(id));
        dispatch(getMovieCast(id));
        // eslint-disable-next-line
    }, [dispatch, id])


    // const getCast = async () => {
    //     try {
    //         const tes = await axios.get(`https://api.themoviedb.org/3/movie/${id}/credits?api_key=${apiKey}&language=en-US`)
    //         setCast(tes.data.cast)
    //     } catch (error) {
    //         console.log(error)
    //     }
    // }


    return (
        <div>
            <Navigation />
            <BannerDetailMovie movie={details} />
            <CardMovie database={cast} statuscast='false' />
            <FooterSection />
        </div >
    )
}
