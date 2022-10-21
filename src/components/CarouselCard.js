import Carousel from 'react-bootstrap/Carousel';
import '../Styling/CarouselCard.css'

function CarouselCard({ database }) {
    return (
        <Carousel className="carousel-wrapper">
            {database.slice(6, 9).map((items, index) => {
                return (
                    <Carousel.Item interval={2000} key={index}>
                        <img
                            style={{ height: '100vh', backgroundSize: 'cover', backgroundRepeat: 'no-repeat', }}
                            key={index}
                            className="d-block w-100 carousel_img"
                            src={`https://image.tmdb.org/t/p/original/${items.backdrop_path}`}
                            alt="First slide"
                        />
                        <Carousel.Caption>

                        </Carousel.Caption>
                    </Carousel.Item>
                )
            })}
        </Carousel>
    );
}

export default CarouselCard;