import { useContext } from "react";
import { AuthContext } from "../providers/AuthProvider";
import { Navigate, useLocation } from "react-router";
import { Spinner } from "react-bootstrap";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const PrivateRoute = ({ children }) => {
  const { user, loading } = useContext(AuthContext);

  const notify = () => toast("You have to login first");

  const location = useLocation();
  console.log("user in private route", user);

  if (loading) {
    return <Spinner animation="border" variant="primary" />;
  }

  if (!user) {
    notify(); // Call notify function when there is no user
    return <Navigate state={{ from: location }} to="/login" replace />;
  }

  return children;
};

export default PrivateRoute;
