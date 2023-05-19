import { useEffect, useState } from "react";
import { Table, Form, FormControl, Button } from "react-bootstrap";

const AllToys = () => {
  const [toys, setToys] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [limit, setLimit] = useState(20);

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

  return (
    <div>
      <h1 className="text-center fw-bold mt-3 mb-4">All Toys</h1>
      <Form inline className="mb-4">
        <FormControl
          type="text"
          placeholder="Search by Toy Name"
          className="mr-2"
          value={searchTerm}
          onChange={handleSearch}
        />
        <Form.Group controlId="limitSelect">
          <Form.Control as="select" value={limit} onChange={handleLimitChange}>
            <option value={5}>5</option>
            <option value={10}>10</option>
            <option value={20}>20</option>
            <option value={30}>30</option>
          </Form.Control>
        </Form.Group>
      </Form>
      <Table striped bordered hover>
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
            <tr key={toy.id}>
              <td>{toy.seller || "-"}</td>
              <td>{toy.name}</td>
              <td>{toy.subcategory}</td>
              <td>{toy.price}</td>
              <td>{toy.quantity}</td>
              <td>
                <Button variant="primary">View Details</Button>
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
    </div>
  );
};

export default AllToys;
