import { Nav } from "react-bootstrap";
import Navbar from "react-bootstrap/Navbar";
import { Link } from "react-router-dom";
import "./NavBar.css";

const NavBar = () => {
  return (
    <>
      <div className="my-nav">
        <Navbar bg="dark" variant="dark" fixed="top" expand="lg">
          <Navbar.Brand>
            <p> Travel Guru </p>
          </Navbar.Brand>

          <Navbar.Toggle />

          <Navbar.Collapse className="nav-item">
            <div>
              <Nav className="nav-title">
                <Nav.Link href="#"> </Nav.Link>
                <Link to="/">
                  <p id="btn"> Destination </p>
                </Link>
                <Link to="/">
                  <p id="btn"> Blog </p>
                </Link>
                <Link to="/">
                  <p id="btn"> Contact </p>
                </Link>
                <Link to="/login">
                  <p id="btn"> log in </p>
                </Link>
              </Nav>
            </div>
          </Navbar.Collapse>
        </Navbar>
      </div>
    </>
  );
};

export default NavBar;
