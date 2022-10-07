import React from 'react'
import '../Styling/PopularCategory.css'
import { HiArrowRight } from "react-icons/hi";
import { Link } from 'react-router-dom'

export default function PopularCategory({ title }) {
    return (
        <div className='container popular_wrapper'>
            <div className='popular_movie'>
                <h2>{title}</h2>
                <Link className='see_all_movie' to='/movie'>See All Movie <HiArrowRight /></Link>
            </div>
        </div>
    )
}
