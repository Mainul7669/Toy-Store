import { useState } from "react";
import { Form, Button } from "react-bootstrap";
import Swal from "sweetalert2";

const AddAToy = () => {
  const [formData, setFormData] = useState({
    pictureUrl: "",
    name: "",
    sellerName: "",
    sellerEmail: "",
    subCategory: "",
    price: "",
    rating: "",
    quantity: "",
    description: "",
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
          <Form.Label>Picture URL of the Toy</Form.Label>
          <Form.Control
            type="text"
            name="pictureUrl"
            placeholder="Picture URL"
            value={formData.pictureUrl}
            onChange={handleInputChange}
          />
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Label>Name</Form.Label>
          <Form.Control
            type="text"
            name="name"
            placeholder="Name"
            value={formData.name}
            onChange={handleInputChange}
          />
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Label>Seller Name</Form.Label>
          <Form.Control
            type="text"
            name="sellerName"
            placeholder="Seller Name"
            value={formData.sellerName}
            onChange={handleInputChange}
          />
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Label>Seller Email</Form.Label>
          <Form.Control
            type="email"
            name="sellerEmail"
            placeholder="Seller Email"
            value={formData.sellerEmail}
            onChange={handleInputChange}
          />
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Label>Sub-category</Form.Label>
          <Form.Control
            type="text"
            name="subCategory"
            placeholder="Sub-category"
            value={formData.subCategory}
            onChange={handleInputChange}
          />
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Label>Price</Form.Label>
          <Form.Control
            type="text"
            name="price"
            placeholder="Price"
            value={formData.price}
            onChange={handleInputChange}
          />
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Label>Rating</Form.Label>
          <Form.Control
            type="text"
            name="rating"
            placeholder="Rating"
            value={formData.rating}
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
          <Form.Label>Detail Description</Form.Label>
          <Form.Control
            as="textarea"
            rows={3}
            name="description"
            placeholder="Description"
            value={formData.description}
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
