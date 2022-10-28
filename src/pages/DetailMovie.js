import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { useParams } from 'react-router-dom'
import { getMovieDetails, getMovieCast } from '../features/movie/movieDetailSlice'

import Navigation from '../components/Navigation'
import CardCast from '../components/CardCast'
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


    return (
        <div className=''>
            <Navigation />
            <BannerDetailMovie movie={details} />
            <CardCast />
            <CardMovie database={cast} statuscast='false' />
            <FooterSection />
        </div >
    )
}
