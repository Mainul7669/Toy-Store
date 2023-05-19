import { Tab, TabContainer, Nav, Row, Col } from "react-bootstrap";
import { useEffect, useState } from "react";
import { Card, Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

const Category = () => {
  const [toys, setToys] = useState([]);

  const navigate = useNavigate();

  useEffect(() => {
    // Fetch toys data from API
    fetch("http://localhost:5000/toys")
      .then((response) => response.json())
      .then((data) => setToys(data));
  }, []);

  // Group toys by subcategory
  const groupedToys = toys.reduce((acc, toy) => {
    const { subcategory } = toy;
    if (!acc[subcategory]) {
      acc[subcategory] = [];
    }
    acc[subcategory].push(toy);
    return acc;
  }, {});

  return (
    <div>
      <h2 className="section-title fw-bold text-center mb-4">Category</h2>
      <TabContainer defaultActiveKey="1">
        <Row className="justify-content-center">
          <Col md={6}>
            <Nav variant="tabs" className="justify-content-center">
              {Object.keys(groupedToys).map((category, index) => (
                <Nav.Item key={index}>
                  <Nav.Link eventKey={index + 1}>
                    <span className="text-dark">{category}</span>
                  </Nav.Link>
                </Nav.Item>
              ))}
            </Nav>
            <Tab.Content className="mt-3">
              {Object.entries(groupedToys).map(
                ([category, categoryToys], index) => (
                  <Tab.Pane key={index} eventKey={index + 1}>
                    <h2>{category}</h2>

                    <div className="container mt-5">
                      <div className="row row-cols-1 row-cols-md-2 row-cols-lg-3 g-4 mt-3">
                        {categoryToys.map((toy) => (
                          <div className="col" key={toy._id}>
                            <Card>
                              <Card.Img
                                style={{ height: "311px", width: "414px" }}
                                className="img-fluid"
                                variant="top"
                                loading="lazy"
                                src={toy.picture}
                              />

                              <Card.Body>
                                <Card.Title>{toy.name}</Card.Title>
                                <Card.Text>
                                  <strong>Price:</strong> ${toy.price}
                                  <br />
                                  <strong>Rating:</strong> {toy.rating}
                                </Card.Text>
                                <Button
                                  onClick={() => navigate(`singleData/${toy._id}`)}
                                  className="bg-warning border border-0"
                                >
                                  View Details
                                </Button>
                              </Card.Body>
                            </Card>
                          </div>
                        ))}
                      </div>
                    </div>
                  </Tab.Pane>
                )
              )}
            </Tab.Content>
          </Col>
        </Row>
      </TabContainer>
    </div>
  );
};

export default Category;