import { useState } from "react";
import { Form, Button } from "react-bootstrap";
import Swal from "sweetalert2";

const AddAToy = () => {
  const [formData, setFormData] = useState({
    name: "",
    quantity: "",
    supplier: "",
    taste: "",
    category: "",
    details: "",
    photo: "",
  });

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleAddToy = (event) => {
    event.preventDefault();

    console.log(formData);

    // Send data to the server
    fetch("http://localhost:5000/toys", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(formData),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.insertedId) {
          Swal.fire({
            title: "Success!",
            text: "Toy Added Successfully",
            icon: "success",
            confirmButtonText: "Cool",
          });
        }
      });
  };

  return (
    <div className="bg-light p-4">
      <h2 className="text-3xl font-extrabold">Add a Toy</h2>
      <Form onSubmit={handleAddToy}>
        <Form.Group className="mb-3">
          <Form.Label>Toy Name</Form.Label>
          <Form.Control
            type="text"
            name="name"
            placeholder="Toy Name"
            value={formData.name}
            onChange={handleInputChange}
          />
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Label>Available Quantity</Form.Label>
          <Form.Control
            type="text"
            name="quantity"
            placeholder="Available Quantity"
            value={formData.quantity}
            onChange={handleInputChange}
          />
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Label>Supplier Name</Form.Label>
          <Form.Control
            type="text"
            name="supplier"
            placeholder="Supplier Name"
            value={formData.supplier}
            onChange={handleInputChange}
          />
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Label>Taste</Form.Label>
          <Form.Control
            type="text"
            name="taste"
            placeholder="Taste"
            value={formData.taste}
            onChange={handleInputChange}
          />
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Label>Category</Form.Label>
          <Form.Control
            type="text"
            name="category"
            placeholder="Category"
            value={formData.category}
            onChange={handleInputChange}
          />
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Label>Details</Form.Label>
          <Form.Control
            type="text"
            name="details"
            placeholder="Details"
            value={formData.details}
            onChange={handleInputChange}
          />
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Label>Photo URL</Form.Label>
          <Form.Control
            type="text"
            name="photo"
            placeholder="Photo URL"
            value={formData.photo}
            onChange={handleInputChange}
          />
        </Form.Group>
        <Button variant="primary" type="submit">
          Add Toy
        </Button>
      </Form>
    </div>
  );
};

export default AddAToy;
