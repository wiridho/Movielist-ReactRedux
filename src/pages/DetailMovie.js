import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { useParams } from 'react-router-dom'
// import CardMovie from '../components/CardMovie'

import Navigation from '../components/Navigation'
// import BannerDetailMovie from '../components/BannerDetailMovie'

export default function DetailMovie() {
    const apiKey = '39d534102975349064b234a5f47263bb'
    // const [database, setDatabase] = useState([])
    // const [cast, setCast] = useState([])
    const location = useParams()
    const id = location.id
    // console.log(id)

    useEffect(() => {
        getDetail();
        getCast();
    }, [])

    const getDetail = async () => {
        try {
            const tes = await axios.get(`https://api.themoviedb.org/3/movie/${id}?api_key=${apiKey}&language=en-US`)
            console.log(tes.data)
        } catch (error) {
            console.error(error)
        }
    }

    const getCast = async () => {
        try {
            const tes = await axios.get(`https://api.themoviedb.org/3/movie/${id}/credits?api_key=${apiKey}&language=en-US`)
            console.log(tes.data.cast)
        } catch (error) {
            console.log(error)
        }
    }

    return (
        <div>
            <Navigation />
            {/* <BannerDetailMovie movie={database} /> */}
        </div>
    )
}
