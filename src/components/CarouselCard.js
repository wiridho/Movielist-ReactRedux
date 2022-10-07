import Carousel from 'react-bootstrap/Carousel';

function CarouselCard({ database }) {
    console.log(database)
    return (
        <Carousel className="carousel-wrapper">
            {database.slice(6, 9).map((items, index) => {
                return (
                    <Carousel.Item interval={1000} key={index}>
                        <img
                            style={{ height: '100vh', backgroundSize: 'cover', backgroundRepeat: 'no-repeat' }}
                            key={index}
                            className="d-block w-100"
                            src={`https://image.tmdb.org/t/p/original/${items.backdrop_path}`}
                            alt="First slide"
                        />
                        <Carousel.Caption>
                            <h3>First slide label</h3>
                            <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                        </Carousel.Caption>
                    </Carousel.Item>
                )
            })}
        </Carousel>
    );
}

export default CarouselCard;