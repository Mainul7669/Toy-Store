
import { Container, Row, Col, Card } from 'react-bootstrap';

const Gallery = () => {
  const galleryItems = [
    {
      image: 'https://i.shgcdn.com/33622921-088a-4e8d-a594-625b55f918a9/-/format/auto/-/preview/3000x3000/-/quality/lighter/',
      title: 'Image 1',
      description: 'Description for Image 1',
    },
    {
      image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTFKYwi_vfEqfqvIfCD2Q0ZlO_sqBfjP9zn_qY2NFLK2fJ3GIQIwWZy4gyTsv0smnJmFDg&usqp=CAU',
      title: 'Image 2',
      description: 'Description for Image 2',
    },
    {
      image: 'https://www.superherohype.com/wp-content/uploads/sites/4/gallery/hot-toys-avengers-endgame-loki/102659686_10157289487262344_48386051222328563_o.jpg',
      title: 'Image 3',
      description: 'Description for Image 3',
    },
    {
      image: 'https://cdn.shopify.com/s/files/1/1969/6605/products/1fba5830-fdcd-475f-9b34-95000514b87c.jpg?v=1614060799',
      title: 'Image 3',
      description: 'Description for Image 3',
    },
    // Add more gallery items as needed
  ];

  return (
    <section className="gallery-section my-3 mb-3">
      <Container>
        <h2 className="section-title text-center">Gallery</h2>
        <Row>
          {galleryItems.map((item, index) => (
            <Col sm={6} md={4} lg={3} key={index}>
              <Card className="gallery-item">
                <Card.Img variant="top" src={item.image} alt={item.title} />
                <Card.Body>
                  <Card.Title>{item.title}</Card.Title>
                  <Card.Text>{item.description}</Card.Text>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>
    </section>
  );
};

export default Gallery;
