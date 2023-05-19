import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Spinner } from "react-bootstrap";

const SingleData = () => {
  const { toyId } = useParams();
  const [toyData, setToyData] = useState(null);

  useEffect(() => {
    // Fetch toy data from API
    fetch(`http://localhost:5000/toys/${toyId}`)
      .then((response) => response.json())
      .then((data) => setToyData(data));
  }, [toyId]);

  if (!toyData) {
    return (
      <div className="d-flex justify-content-center mt-5">
        <Spinner animation="border" role="status">
          <span className="visually-hidden">Loading...</span>
        </Spinner>
      </div>
    );
  }

  const { picture, name, sellerName, sellerEmail, price, rating, quantity, description } = toyData;

  return (
    <div className="container mt-5">
      <h1 className="text-center">Toy Details</h1>
      <div className="row justify-content-center">
        <div className="col-md-6">
          <img src={picture} alt={name} className="img-fluid mb-3" />
          <h2>{name}</h2>
          <p>Seller: {sellerName}</p>
          <p>Email: {sellerEmail}</p>
          <p>Price: ${price}</p>
          <p>Rating: {rating}</p>
          <p>Quantity: {quantity}</p>
          <p>Description: {description}</p>
        </div>
      </div>
    </div>
  );
};

export default SingleData;
