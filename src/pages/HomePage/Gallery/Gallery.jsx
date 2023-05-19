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
      image: 'https://www.sideshow.com/storage/product-images/904926/thor-sixth-scale-figure_marvel_feature.jpg',
      title: 'Image 3',
      description: 'Description for Image 3',
    },
    {
      image: 'https://cf.shopee.ph/file/66c040ed3d69c9b60475c7c5902038ab',
      title: 'Image 3',
      description: 'Description for Image 3',
    },
    {
      image: 'https://youbentmywookie.com/wookie/uploads/2022/08/black-panther-original-suit__feature.jpg',
      title: 'Image 3',
      description: 'Description for Image 3',
    },
    {
      image: 'https://bbts1.azureedge.net/images/p/full/2021/08/e24342b6-9bfc-4183-8003-44ec1caa4d95.jpg',
      title: 'Image 3',
      description: 'Description for Image 3',
    },
    {
      image: 'https://images.ladbible.com/resize?type=jpeg&quality=70&width=1200&fit=contain&gravity=auto&url=https://eu-images.contentstack.com/v3/assets/bltbc1876152fcd9f07/blt0c104f8419d1447c/6364fab52bb398427d7f2949/Transformers_Header_1.png',
      title: 'Image 3',
      description: 'Description for Image 3',
    },
    // Add more gallery items as needed
  ];

  return (
<section className="gallery-section my-5 mb-5">
      <Container>
        <h2 className="section-title fw-bold text-center">Gallery</h2>
        <Row className="row-cols-1 row-cols-sm-2 row-cols-md-3 row-cols-lg-4 g-2 my-3">
          {galleryItems.map((item, index) => (
            <Col key={index}>
              <Card className="gallery-item">
                <div className="ratio ratio-4x3">
                  <Card.Img data-aos="zoom-in-up" variant="top" className='onHover' src={item.image} alt={item.title} />
                </div>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>
    </section>
  );
};

export default Gallery;


