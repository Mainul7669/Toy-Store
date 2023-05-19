import { useEffect, useState } from "react";
import { Table, Form, FormControl, Button, Modal } from "react-bootstrap";


const AllToys = () => {
  const [toys, setToys] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [limit, setLimit] = useState(20);
  const [showModal, setShowModal] = useState(false);
  const [selectedToy, setSelectedToy] = useState(null);



  useEffect(() => {
    fetchToys();
  }, []);

  const fetchToys = async () => {
    try {
      const response = await fetch("http://localhost:5000/toys");
      const data = await response.json();
      setToys(data);
    } catch (error) {
      console.log("Error fetching toys:", error);
    }
  };

  const handleSearch = (e) => {
    setSearchTerm(e.target.value);
  };

  const handleLimitChange = (e) => {
    setLimit(e.target.value);
  };

  const filteredToys = toys.filter((toy) =>
    toy.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const limitedToys = filteredToys.slice(0, limit);

  const openModal = (toy) => {
    setSelectedToy(toy);
    setShowModal(true);
  };

  const closeModal = () => {
    setShowModal(false);
  };

  return (
    <div className="d-flex flex-column align-items-center">
      <h1 className="text-center fw-bold mt-3 mb-4">All Toys</h1>
      <Form className="d-flex mb-4 w-25">
        <FormControl
          type="search"
          className="me-3"
          aria-label="Search"
          placeholder="Search by Toy Name"
          value={searchTerm}
          onChange={handleSearch}
        />
        <Form.Group className="w-25">
          <Form.Control
            className="fw-bold text-center"
            as="select"
            value={limit}
            onChange={handleLimitChange}
          >
            <option value={5}>5</option>
            <option value={10}>10</option>
            <option value={20}>20</option>
            <option value={30}>30</option>
          </Form.Control>
        </Form.Group>
      </Form>

      <Table striped bordered hover responsive>
        <thead>
          <tr>
            <th>Seller</th>
            <th>Toy Name</th>
            <th>Sub-category</th>
            <th>Price</th>
            <th>Available Quantity</th>
            <th>View Details</th>
          </tr>
        </thead>
        <tbody>
          {limitedToys.map((toy) => (
            <tr key={toy._id}>
              <td>{toy.sellerName || "-"}</td>
              <td>{toy.name}</td>
              <td>{toy.subcategory}</td>
              <td>{toy.price}</td>
              <td>{toy.quantity}</td>
              <td>
                <div className="d-grid">
                  <Button
                    onClick={() => openModal(toy)}
                    variant="outline-danger"
                    className="text-dark fw-bold border rounded-3"
                  >
                    View Details
                  </Button>
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </Table>

      <Modal show={showModal} onHide={closeModal} centered>
        {selectedToy && (
          <>
            <Modal.Header closeButton>
              <Modal.Title>{selectedToy.name}</Modal.Title>
            </Modal.Header>
            <Modal.Body>
              <img className="w-50" src={selectedToy.picture} alt={selectedToy.name} />
              <p>Seller: {selectedToy.sellerName || "-"}</p>
              <p>Seller Email: {selectedToy.sellerEmail || "-"}</p>
              <p>Price: {selectedToy.price}</p>
              <p>Rating: {selectedToy.rating}</p>
              <p>Available Quantity: {selectedToy.quantity}</p>
              <p>{selectedToy.detailDescription}</p>
            </Modal.Body>
            <Modal.Footer>
              <Button onClick={closeModal} variant="secondary">
                Close
              </Button>
            </Modal.Footer>
          </>
        )}
      </Modal>
    </div>
  );
};

export default AllToys;
