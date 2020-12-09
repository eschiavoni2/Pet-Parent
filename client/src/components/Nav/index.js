import React, { useEffect, useState, useContext } from "react";
import { Link } from "react-router-dom";
import "./style.css";
// import Login from "../LoginForm";
import AuthButton from "../AuthButton";
import {
  UncontrolledDropdown,
  DropdownToggle,
  DropdownItem,
  DropdownMenu,
  NavLink,
} from 'reactstrap';
import { UserContext } from "../../utils/UserContext";
//I want to add some basic inline styling here, even though we are bringing in styles
const buttonStyle = {
  marginRight: 10
};

function Nav() {

  const [user, dispatch] = useContext(UserContext);

  const [open, setOpen] = useState(false);
  const [width, setWidth] = useState(window.innerWidth);


  useEffect(() => {

    const updateWidth = () => {
      if (open && width > 991) {
        setOpen(false);
      }
      setWidth(window.innerWidth)
    };

    window.addEventListener("resize", updateWidth);

    return () => {
      window.removeEventListener("resize", updateWidth);
    }
  }, [])


  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      <Link className="navbar-brand" to="/">
        Pet Pals
        </Link>
        <UncontrolledDropdown nav inNavbar>
              <DropdownToggle nav caret>
        <i className="fas fa-bars"></i>
        </DropdownToggle>

        <DropdownMenu right>
                <DropdownItem>
                <NavLink href="/createprofile">Profile Form</NavLink>
                </DropdownItem>
                </DropdownMenu>

            </UncontrolledDropdown>
      <div className={`${open ? "" : "collapse "}navbar-collapse`} id="navbarNav">
        {user.username ? <span className="userText text-white ml-3 pt-1" to="#">Hi {user.username} !</span> : ""}
        <ul className="navbar-nav ml-auto">
          <li className="nav-item ">
            <Link classname="home" to="/">Home</Link>
            <Link className="profile" to="/profilepage">Profile</Link>
            {user.username ? "" :
              <Link className="signup" to="/register">Sign Up</Link>
            }
            <AuthButton />
          </li>

        </ul>
      </div>
    </nav>
  );
}

export default Nav;
