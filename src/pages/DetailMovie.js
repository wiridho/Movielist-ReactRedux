import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { useParams } from 'react-router-dom'
import CardMovie from '../components/CardMovie'

export default function DetailMovie() {
    const apiKey = '39d534102975349064b234a5f47263bb'
    const [database, setDatabase] = useState([])
    const location = useParams()
    const id = location.id
    // console.log(id)

    useEffect(() => {
        getDetail();
    })

    const getDetail = async () => {
        try {
            const tes = await axios.get(`https://api.themoviedb.org/3/movie/${id}?api_key=${apiKey}&language=en-US`)
            setDatabase(tes.data)
        } catch (error) {
            console.error(error)
        }
    }

    return (
        <div>
            {/* <CardMovie database={database} /> */}
            <h1>{database.title}</h1>
        </div>
    )
}
