import { Card, Button, Row, Col } from "react-bootstrap";
import { FaStar } from "react-icons/fa";
const PopularToysSection = () => {
  const popularToys = [
    {
      id: 1,
      name: "Toy Thanos",
      image:
        "https://freepngimg.com/save/80688-alliance-comics-figurine-toy-thanos-avengers-marvel/1024x1325",
      price: "$19.99",
      rating: 4.5,
    },
    {
      id: 2,
      name: "Infinity War Masterpiece",
      image:
        "https://cdn.webshopapp.com/shops/2090/files/375462926/650x650x2/avengers-infinity-war-masterpiece-series-diecast-a.jpg",
      price: "$24.99",
      rating: 4.2,
    },
    {
      id: 3,
      name: "THOR-Break",
      image:
        "https://www.nicepng.com/png/full/656-6567605_hot-toys-thor-sixth-scale-figure-avengers-2.png",
      price: "$14.99",
      rating: 4.7,
    },
    {
      id: 4,
      name: "The HULK",
      image:
        "https://www.sideshow.com/cdn-cgi/image/quality=90,f=auto/https://www.sideshow.com/storage/product-images/904922/hulk-sixth-scale-figure_marvel_silo.png",
      price: "$29.99",
      rating: 4.8,
    },
  ];

  return (
<div className="popular-toys-section">
  <h2 className="text-center mb-4 fw-bold">Popular Toys</h2>
  <Row className="justify-content-center m-3">
    {popularToys.map((toy) => (
      <Col key={toy.id} md={6} lg={3} className="mb-4">
        <Card className="h-100">
          <div className="aspect-ratio aspect-ratio-1x1 d-flex justify-content-center align-items-center">
            <Card.Img
              variant="top"
              src={toy.image}
              className="aspect-ratio-object mt-3"
              style={{ width: "200px", height: "200px" }}
            />
          </div>
          <Card.Body className="d-flex flex-column">
            <Card.Title>{toy.name}</Card.Title>
            <Card.Text>
              <div className="d-flex align-items-center">
                Price: {toy.price}
              </div>
              <div className="d-flex align-items-center gap-2">
                <FaStar className="text-warning" /> {toy.rating}
              </div>
            </Card.Text>
            <Button variant="info">Add to Cart</Button>
          </Card.Body>
        </Card>
      </Col>
    ))}
  </Row>
</div>

  );
};

export default PopularToysSection;
