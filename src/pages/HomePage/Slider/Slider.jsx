import  { useEffect, useState } from 'react';
import { Carousel } from 'react-bootstrap';

const Slider = () => {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prevIndex) => (prevIndex + 1) % 3);
    }, 3000);

    return () => {
      clearInterval(interval);
    };
  }, []);

  const handleSelect = (selectedIndex) => {
    setIndex(selectedIndex);
  };

  return (
    <Carousel className='mb-3' activeIndex={index} onSelect={handleSelect} pause={false}>
      <Carousel.Item>
        <img
          className="d-block w-100 h-50 "
          src="https://images.squarespace-cdn.com/content/v1/51b3dc8ee4b051b96ceb10de/1385749702832-BMRW4DDR340X92D22MJ7/1470412_10151763454557344_2046313636_n.jpg"
          alt="First slide"
        />
        <div className="carousel-caption">
          <h3>Slide 1</h3>
          <p>Description for Slide 1</p>
        </div>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://i0.wp.com/lylesmoviefiles.com/wp-content/uploads/2018/10/hot-toys-hulkbuster-iron-man-deluxe-version-figure-wide-shot.jpg?fit=640%2C388&ssl=1"
          alt="Second slide"
        />
        <div className="carousel-caption">
          <h3>Slide 2</h3>
          <p>Description for Slide 2</p>
        </div>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://i.ytimg.com/vi/NMVGsGiV8Ro/maxresdefault.jpg"
          alt="Third slide"
        />
        <div className="carousel-caption">
          <h3>Slide 3</h3>
          <p>Description for Slide 3</p>
        </div>
      </Carousel.Item>
    </Carousel>
  );
};

export default Slider;
