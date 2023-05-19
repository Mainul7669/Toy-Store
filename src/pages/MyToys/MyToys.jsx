import { useState, useEffect } from "react";
import { Table, Button, Modal, Form } from "react-bootstrap";
import Swal from "sweetalert2";

const MyToys = () => {
  const [toys, setToys] = useState([]);
  const [selectedToy, setSelectedToy] = useState(null);
  const [showUpdateModal, setShowUpdateModal] = useState(false);
  const [updateFormData, setUpdateFormData] = useState({
    price: "",
    quantity: "",
    description: "",
  });

  // Fetch toys data for the logged-in user
  useEffect(() => {
    // Replace this with your API endpoint to fetch user-specific toy data
    fetch("http://localhost:5000/myToys")
      .then((res) => res.json())
      .then((data) => {
        setToys(data);
      })
      .catch((error) => {
        console.error("Error fetching toys data:", error);
      });
  }, []);

  const handleDeleteToy = (toyId) => {
    Swal.fire({
      title: "Delete Confirmation",
      text: "Are you sure you want to delete this toy?",
      icon: "warning",
      showCancelButton: true,
      confirmButtonText: "Delete",
      cancelButtonText: "Cancel",
    }).then((result) => {
      if (result.isConfirmed) {
        // Delete the toy
        // Replace this with your API endpoint to delete the toy
        fetch(`http://localhost:5000/myToys/${toyId}`, {
          method: "DELETE",
        })
          .then((res) => res.json())
          .then((data) => {
            // Remove the deleted toy from the state
            setToys((prevToys) =>
              prevToys.filter((toy) => toy._id !== toyId)
            );
            Swal.fire({
              title: "Deleted!",
              text: "The toy has been deleted.",
              icon: "success",
            });
          })
          .catch((error) => {
            console.error("Error deleting toy:", error);
            Swal.fire({
              title: "Error",
              text: "An error occurred while deleting the toy.",
              icon: "error",
            });
          });
      }
    });
  };


  


  const handleUpdateToy = (event) => {
    event.preventDefault();
  
    const { price, quantity, description, pictureUrl, name, sellerName, sellerEmail, subCategory, rating } = updateFormData;
  
    // Update the toy
    // Replace this with your API endpoint to update the toy
    fetch(`http://localhost:5000/myToys/${selectedToy._id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ price, quantity, description, pictureUrl, name, sellerName, sellerEmail, subCategory, rating }),
    })
      .then((res) => res.json())
      .then((updatedToy) => {
        // Update the toy in the state
        setToys((prevToys) =>
          prevToys.map((toy) =>
            toy._id === selectedToy._id
              ? { ...toy, ...updatedToy }
              : toy
          )
        );
        setShowUpdateModal(false);
        Swal.fire({
          title: "Success!",
          text: "Toy information updated successfully.",
          icon: "success",
        });
      })
      .catch((error) => {
        console.error("Error updating toy:", error);
        Swal.fire({
          title: "Error",
          text: "An error occurred while updating the toy.",
          icon: "error",
        });
      });
  };
  
  
  

  const handleUpdateModalOpen = (toy) => {
    setSelectedToy(toy);
    setUpdateFormData({
      price: toy.price,
      quantity: toy.quantity,
      description: toy.description,
    });
    setShowUpdateModal(true);
  };

  const handleUpdateModalClose = () => {
    setShowUpdateModal(false);
  };

  const handleUpdateInputChange = (event) => {
    const { name, value } = event.target;
    setUpdateFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  

  return (
    <div>
      <h1>My Toys</h1>
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>Name</th>
            <th>Price</th>
            <th>Quantity</th>
            <th>Description</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {toys.map((toy) => (
            <tr key={toy._id}>
              <td>{toy.name}</td>
              <td>{toy.price}</td>
              <td>{toy.quantity}</td>
              <td>{toy.description}</td>
              <td>
                <Button
                  variant="primary"
                  onClick={() => handleUpdateModalOpen(toy)}
                >
                  Update
                </Button>{" "}
                <Button
                  variant="danger"
                  onClick={() => handleDeleteToy(toy._id)}
                >
                  Delete
                </Button>
              </td>
            </tr>
          ))}
        </tbody>
      </Table>

      <Modal show={showUpdateModal} onHide={handleUpdateModalClose}>
        <Modal.Header closeButton>
          <Modal.Title>Update Toy</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form onSubmit={handleUpdateToy}>
            <Form.Group className="mb-3">
              <Form.Label>Price</Form.Label>
              <Form.Control
                type="text"
                name="price"
                placeholder="Price"
                value={updateFormData.price}
                onChange={handleUpdateInputChange}
              />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>Quantity</Form.Label>
              <Form.Control
                type="text"
                name="quantity"
                placeholder="Quantity"
                value={updateFormData.quantity}
                onChange={handleUpdateInputChange}
              />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>Description</Form.Label>
              <Form.Control
                as="textarea"
                rows={3}
                name="description"
                placeholder="Description"
                value={updateFormData.description}
                onChange={handleUpdateInputChange}
              />
            </Form.Group>
            <Button variant="primary" type="submit">
              Update
            </Button>
          </Form>
        </Modal.Body>
      </Modal>
    </div>
  );
};

export default MyToys;
