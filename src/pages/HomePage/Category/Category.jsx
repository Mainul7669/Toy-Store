import { Tab, TabContainer, Nav, Row, Col } from 'react-bootstrap';

const Category = () => {
  return (
    <div>
      <h2 className="section-title fw-bold text-center">Category</h2>
      <TabContainer defaultActiveKey="1">
        <Row className="justify-content-center">
          <Col md={6}>
            <Nav variant="tabs" className="justify-content-center">
              <Nav.Item>
                <Nav.Link eventKey="1">Avengers</Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link eventKey="2">Transformers</Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link eventKey="3">Star Wars</Nav.Link>
              </Nav.Item>
            </Nav>
            <Tab.Content>
              <Tab.Pane eventKey="1">
                <h2>Any content 1</h2>
              </Tab.Pane>
              <Tab.Pane eventKey="2">
                <h2>Any content 2</h2>
              </Tab.Pane>
              <Tab.Pane eventKey="3">
                <h2>Any content 3</h2>
              </Tab.Pane>
            </Tab.Content>
          </Col>
        </Row>
      </TabContainer>
    </div>
  );
};

export default Category;
