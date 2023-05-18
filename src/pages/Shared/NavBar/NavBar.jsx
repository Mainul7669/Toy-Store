import  { useContext } from "react";
import {
  Button,
  Container,
  Nav,
  Navbar,
  OverlayTrigger,
} from "react-bootstrap";
import { Link, NavLink } from "react-router-dom";
import { AuthContext } from "../../../providers/AuthProvider";
import { Tooltip } from "react-bootstrap";

const NavBar = () => {
  const { user, logOut } = useContext(AuthContext);

  console.log(user);

  const handleLogOut = () => {
    logOut()
      .then()
      .catch((error) => console.log(error));
  };

  const navLinkStyles = ({ isActive }) => {
    return {
      fontWeight: isActive ? 'bold' : 'normal',
      textDecoration: 'none' ,
      color: isActive ? 'red' : 'white',
    }
  }
  

  return (
    <Navbar
      className="bg-dark sticky-top mb-3"
      collapseOnSelect
      expand="lg"
      bg="light"
      variant="light"
    >
      <Container>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav>
            <div className="text-center">
            <img src="/src/assets/logo.png" alt="Website Logo" width="50" height="50" className="mb-1" />
            <p className="fw-bold text-light">ToyTroop Universe</p>
            </div>
          </Nav>

          <Nav className="mx-auto d-flex align-items-center gap-5">
            <NavLink style={navLinkStyles} 
              to="/"
            >
              Home
            </NavLink>
            <NavLink style={navLinkStyles}
              to="/blogs"
            >
              Blogs
            </NavLink>
            
            <NavLink style={navLinkStyles} 
              to="/allToys"
            >
              All Toys
            </NavLink>

            {user && (
              <>
              <NavLink style={navLinkStyles} 
              to="/myToys"
            >
              My Toys
            </NavLink>
            
            <NavLink style={navLinkStyles} 
              to="/addAToy"
            >
              Add A Toy
            </NavLink>
            </>
            )}


          </Nav>

          <Nav>
           
            {user && (
              <OverlayTrigger
                placement="bottom"
                overlay={<Tooltip id="tooltip">{user.displayName}</Tooltip>}
              >
                <img
                  className="rounded-circle mr-5 mx-3"
                  src={user.photoURL}
                  alt="Profile Picture"
                  style={{ width: "40px", height: "40px" }}
                />
              </OverlayTrigger>
            )}

            {user ? (
              <Button
                onClick={handleLogOut}
                variant="outline-danger"
                  className="text-white fw-bold  border  rounded-3 "
              >
                Logout
              </Button>
            ) : (
              <Link to="/login">
                <Button variant="outline-danger"
                  className="text-white fw-bold  border  rounded-3 "
                >
                  Login
                </Button>
              </Link>
            )}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default NavBar;
