import { useEffect, useState } from "react";
import { Carousel } from "react-bootstrap";

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
    <Carousel
      className="mb-3 slider-container"
      activeIndex={index}
      onSelect={handleSelect}
      pause={false}
    >
      <Carousel.Item>
        <img
          className="d-block w-100 slider-image"
          src="https://images.squarespace-cdn.com/content/v1/51b3dc8ee4b051b96ceb10de/1385749702832-BMRW4DDR340X92D22MJ7/1470412_10151763454557344_2046313636_n.jpg"
          alt="First slide"
        />
        <div className="carousel-caption mb-5">
          <h3 className="text-white fw-bold">The Hulk</h3>
          <p className="text-white fw-bold">
            Bruce Banner and Hulk - Hot Toys Collectible Action Figures —
            GeekTyrant ; Opens a new tab Hot Toys has revealed their collectible
            action figure for Bruce Banner and the Hulk from Marvels The
            Avengers .
          </p>
        </div>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100 slider-image"
          src="https://i0.wp.com/lylesmoviefiles.com/wp-content/uploads/2018/10/hot-toys-hulkbuster-iron-man-deluxe-version-figure-wide-shot.jpg?fit=640%2C388&ssl=1"
          alt="Second slide"
        />
        <div className="carousel-caption mb-5">
          <h3 className="text-white fw-bold">IRON MAN</h3>
          <p className="text-white fw-bold">Marvel Avengers Iron Man Toy Electronic LED Light Singing Dancing Robot Gift for Kids</p>
        </div>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100 slider-image"
          src="https://i.ytimg.com/vi/NMVGsGiV8Ro/maxresdefault.jpg"
          alt="Third slide"
        />
        <div className="carousel-caption mb-5">
          <h3 className="text-white fw-bold">Transformers</h3>
          <p className="text-white fw-bold">Transformers toys are amazing right now - and they are gonna get weirder</p>
        </div>
      </Carousel.Item>
    </Carousel>
  );
};

export default Slider;
