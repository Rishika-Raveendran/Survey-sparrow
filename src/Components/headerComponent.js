import React, { Component } from "react";
import MoreVertIcon from "@material-ui/icons/MoreVert";
import {
  Navbar,
  NavbarBrand,
  Nav,
  NavbarToggler,
  NavItem,
  Collapse,
  NavLink,
  Button,
} from "reactstrap";

class Header extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isNavOpen: false,
    };
    this.toggleNav = this.toggleNav.bind(this);
  }
  toggleNav() {
    this.setState({
      isNavOpen: !this.state.isNavOpen,
    });
  }

  render() {
    return (
      <React.Fragment>
        <Navbar expand="md">
          <div className="container">
            <NavbarBrand className="navig" href="/">
              Maxeon
            </NavbarBrand>
            <NavbarToggler onClick={this.toggleNav}>
              <MoreVertIcon />
            </NavbarToggler>
            <div className="col-md-7 offset-md-3 ">
              <Collapse isOpen={this.state.isNavOpen} navbar>
                <Nav className=" navitem ml-auto" navbar>
                  <NavItem>
                    <NavLink className="nav-link" to="/">
                      Products
                    </NavLink>
                  </NavItem>
                </Nav>
                <Nav className="ml-auto navitem" navbar>
                  <NavItem>
                    <NavLink className="nav-link" to="/">
                      Features
                    </NavLink>
                  </NavItem>
                </Nav>
                <Nav className="ml-auto navitem" navbar>
                  <NavItem>
                    <NavLink className="nav-link" to="/">
                      Use cases
                    </NavLink>
                  </NavItem>
                </Nav>
                <Nav className="ml-auto navitem" navbar>
                  <NavItem>
                    <NavLink className="nav-link" to="/">
                      Pricing
                    </NavLink>
                  </NavItem>
                </Nav>
                <Nav className="ml-auto navitem" navbar>
                  <NavItem>
                    <Button color="" className="login">
                      Login
                    </Button>
                  </NavItem>
                </Nav>
              </Collapse>
            </div>
          </div>
        </Navbar>
      </React.Fragment>
    );
  }
}

export default Header;
