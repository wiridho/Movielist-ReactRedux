import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { useParams } from 'react-router-dom'
import CardMovie from '../components/CardMovie'


export default function SearchPages() {
    const { query } = useParams()
    const [database, setDatabase] = useState([])
    const apiKey = '39d534102975349064b234a5f47263bb'

    useEffect(() => {
        loadData()
    }, [])

    const loadData = async () => {
        try {
            const response = await axios.get(`https://api.themoviedb.org/3/search/movie?api_key=${apiKey}&language=en-US&page=1&include_adult=false&query=${query}`)
            setDatabase(response.data.results)
        } catch (error) {
            console.error(error)
        }
    }

    return (
        <div>
            <CardMovie database={database} />
        </div>
    )
}
