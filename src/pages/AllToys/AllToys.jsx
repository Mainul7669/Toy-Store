import { useEffect, useState } from "react";
import { Table, Form, FormControl, Button, Modal } from "react-bootstrap";
import { useNavigate, useLocation } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "../../providers/AuthProvider";

const AllToys = () => {
  const [toys, setToys] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [limit, setLimit] = useState(20);
  const [showModal, setShowModal] = useState(false);
  const [selectedToy, setSelectedToy] = useState(null);

  const { user } = useContext(AuthContext);
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    fetchToys();
  }, []);

  const fetchToys = async () => {
    try {
      const response = await fetch("https://assignment-11-server-ashy-ten.vercel.app/MyToys");
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

  const handleLoginRedirect = () => {
    navigate("/login", { state: { from: location } });
  };

  return (
    <div className="d-flex flex-column align-items-center">
      <h1 className="text-center mt-3 mb-4">All Toys</h1>
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
            className="fw-bold text-center btn btn-info"
            as="select"
            value={limit}
            onChange={handleLimitChange}
          >
            <option value={2}>2</option>
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
              <td>{toy.subCategory}</td>
              <td>{toy.price}</td>
              <td>{toy.quantity}</td>
              <td>
                <div className="d-grid">
                  <Button
                    onClick={() => {
                      if (user) {
                        openModal(toy);
                      } else {
                        handleLoginRedirect();
                      }
                    }}
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
              <img
                className="w-50 mb-3"
                src={selectedToy.pictureUrl}
                alt={selectedToy.name}
              />
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
