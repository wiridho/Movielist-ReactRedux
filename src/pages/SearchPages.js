import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'

import { useParams } from 'react-router-dom'
import { searchMovie } from '../features/movie/movieSLice'
import CardMovie from '../components/CardMovie'
import Navigation from '../components/Navigation'
import BannerSearchMovie from '../components/BannerSearchMovie'
import SearchResult from '../components/SearchResult'
import FooterSection from '../components/FooterSection'


export default function SearchPages() {
    const { query } = useParams()
    const dispatch = useDispatch()
    const { search } = useSelector((state) => state.movies)
    // const [database, setDatabase] = useState([])
    // const apiKey = '39d534102975349064b234a5f47263bb'

    useEffect(() => {
        dispatch(searchMovie(query))
        // eslint-disable-next-line
    }, [dispatch, query])



    return (
        <div>
            <Navigation />
            <BannerSearchMovie query={query} />
            <SearchResult query={query} />
            <CardMovie database={search} />
            <FooterSection />
        </div>
    )
}
