import { useState, useEffect } from "react";
import { Table, Button, Modal, Form, DropdownButton, Dropdown } from "react-bootstrap";
import Swal from "sweetalert2";
import { useContext } from "react";
import { AuthContext } from "../../providers/AuthProvider";

const MyToys = () => {
  const [toys, setToys] = useState([]);
  const [selectedToy, setSelectedToy] = useState(null);
  const { user } = useContext(AuthContext);
  const [showUpdateModal, setShowUpdateModal] = useState(false);
  const [updateFormData, setUpdateFormData] = useState({
    price: "",
    quantity: "",
    description: "",
  });

  // Fetch toys data for the logged-in user

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
        fetch(`https://assignment-11-server-ashy-ten.vercel.app/MyToys/${toyId}`, {
          method: "DELETE",
        })
          .then((res) => res.json())
          .then(() => {
            // Remove the deleted toy from the state
            setToys((prevToys) => prevToys.filter((toy) => toy._id !== toyId));
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
  
    const {
      price,
      quantity,
      description,
      pictureUrl,
      name,
      sellerName,
      sellerEmail,
      subCategory,
      rating,
    } = updateFormData;
  
    // Update the toy
    fetch(`https://assignment-11-server-ashy-ten.vercel.app/MyToys/${selectedToy._id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        price,
        quantity,
        description,
        pictureUrl,
        name,
        sellerName,
        sellerEmail,
        subCategory,
        rating,
      }),
    })
      .then((res) => res.json())
      .then((updatedToy) => {
        // Update the toy in the state
        console.log(updatedToy);
        setToys((prevToys) =>
          prevToys.map((toy) =>
            toy._id === selectedToy._id ? { ...toy, ...updatedToy } : toy
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

  useEffect(() => {
    fetch("https://assignment-11-server-ashy-ten.vercel.app/MyToys")
      .then((res) => res.json())
      .then((data) => {
        // Filter the toys data based on the logged-in user's email
        const filteredToys = data.filter(
          (toy) => toy.sellerEmail === user?.email
        );
        setToys(filteredToys);
      })
      .catch((error) => {
        console.error("Error fetching toys data:", error);
      });
  }, [user]);

  //sorting

  const [sortOrder, setSortOrder] = useState("");

  const handleSortByPriceDesc = () => {
    setSortOrder("desc");
  };

  const handleSortByPriceAsc = () => {
    setSortOrder("asc");
  };

  useEffect(() => {
    fetch("https://assignment-11-server-ashy-ten.vercel.app/MyToys")
      .then((res) => res.json())
      .then((data) => {
        // Filter the toys data based on the logged-in user's email
        const filteredToys = data.filter(
          (toy) => toy.sellerEmail === user?.email
        );

        // Sort the toys based on the sorting order
        if (sortOrder === "desc") {
          filteredToys.sort((a, b) => b.price - a.price);
        } else if (sortOrder === "asc") {
          filteredToys.sort((a, b) => a.price - b.price);
        }

        setToys(filteredToys);
      })
      .catch((error) => {
        console.error("Error fetching toys data:", error);
      });
  }, [user, sortOrder]);

  return (
    <div className="container">
      <h1 className="text-center fw-bold mt-3 mb-4">My Toys</h1>
      <div className="mb-5">
      <DropdownButton title="Sort" variant="info">
        <Dropdown.Item onClick={handleSortByPriceDesc}>
          Sort by Price (Desc)
        </Dropdown.Item>
        <Dropdown.Item onClick={handleSortByPriceAsc}>
          Sort by Price (Asc)
        </Dropdown.Item>
      </DropdownButton>
    </div>
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

      <Modal show={showUpdateModal} onHide={handleUpdateModalClose} centered>
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