import Carousel from 'react-bootstrap/Carousel';
import '../Styling/CarouselCard.css'
import { BsPlayCircle } from "react-icons/bs";

function CarouselCard({ database }) {
	return (
		<Carousel className="carousel-wrapper">
			{database.slice(6, 9).map((items, index) => {
				return (
					<Carousel.Item interval={2000} key={index}>
						<div
							style={{
								position: 'absolute',
								width: "100%",
								height: '100vh',
								backgroundImage: 'linear-gradient(to top, rgba(0,0,0,2), rgba(0,0,0,0.3))'
							}}>
						</div>

						<Carousel.Caption>
							<div className='container'>
								<h1>{items.title ? items.title : items.original_title}</h1>
								<p>{items.overview}</p>
								<a className='movieLink' href={`https://www.youtube.com/results?search_query=${items.title ? items.title : items.original_title} trailer`}>
									<button className='trailer'>Watch Trailer <BsPlayCircle /></button>
								</a>
							</div>
						</Carousel.Caption>

						<img
							style={{ height: '100vh', backgroundSize: 'cover', backgroundRepeat: 'no-repeat', }}
							key={index}
							className="d-block w-100 carousel_img"
							src={`https://image.tmdb.org/t/p/original/${items.backdrop_path}`}
							alt="First slide"
						/>
					</Carousel.Item>
				)
			})}
		</Carousel>
	);
}

export default CarouselCard;