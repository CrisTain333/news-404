import React, { useContext } from "react";
import "./Navbar.css";
import ArticleIcon from "@mui/icons-material/Article";
import { Link } from "react-router-dom";
import Avatar from "@mui/material/Avatar";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Leftside from "../LeftSide/Leftside";
import AuthContext from "../../Contexts/Context";
import Button from "react-bootstrap/Button";

const Header = () => {
  const { userData, logOut } = useContext(AuthContext);

  const handleLogOut =()=>{
    logOut()
    .then(()=>{

    }).catch()
  }
  return (
    <>
      <Navbar bg="white" expand="lg">
        <Container>
       <Link to='/'>
       <Navbar.Brand>
            <ArticleIcon /> News-404
          </Navbar.Brand>
       </Link>
          <Navbar.Toggle aria-controls="navbarScroll" />
          <Navbar.Collapse id="navbarScroll">
            <Nav
              className="me-auto my-2 my-lg-0"
              style={{ maxHeight: "100px" }}
            >
         
            </Nav>
            <div className="d-lg-none mt-2">
              <Leftside></Leftside>
            </div>
            <div className="d-flex sm-d-none">
              {userData ? (<>
              <Navbar.Brand>{userData?.displayName}</Navbar.Brand>
              <Avatar alt="Remy Sharp" src={userData?.photoURL} />{" "}
                <Button
                  variant="outline-dark"
                  className="btns ms-2"
                  onClick={handleLogOut}
                >
                  {" "}
                  Sing Out{" "}
                </Button>
                </>
              ) : (
                ""
              )}
            </div>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
};

export default Header;
