import React, { useState, useEffect } from 'react'
import axios from 'axios'
import Button from 'react-bootstrap/Button';
import { useNavigate } from 'react-router-dom'

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import '../Styling/CategoryButton.css'

const apiKey = '39d534102975349064b234a5f47263bb'

export default function CategoryButton() {
	const [genre, setGenre] = useState([])
	const navigate = useNavigate()

	useEffect(() => {
		loadGenre()
	}, [])

	const loadGenre = async () => {
		try {
			const genreResponse = await axios.get(`https://api.themoviedb.org/3/genre/movie/list?api_key=${apiKey}&language=en-US`)
			setGenre(genreResponse.data.genres)
		} catch (error) {
			console.log(error)
		}
	}
	return (
		<>
			<div className='container category_wrapper d-flex justify-content-center'>
				<Swiper
					slidesPerView={6}
					spaceBetween={30}
					className="mySwiper">
					{genre && genre.map((item, index) => (
						<SwiperSlide key={index} className='button_wrapper'>
							<Button key={item.id} className='button_category' variant='outline-danger' style={{ color: 'red', background: 'none' }} onClick={() => navigate(`/category/${item.name}/${item.id}`)} > {item.name} </Button>
						</SwiperSlide>
					))}
				</Swiper>
			</div>
		</>
	)
}
