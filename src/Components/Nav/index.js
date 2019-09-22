import React from "react";
// import logo from '../../images/stan-logo.jpg';
import { Link } from "react-router-dom";
import { Navbar, Nav, NavItem } from "react-bootstrap";
import { LinkContainer } from 'react-router-bootstrap';

const Navigation = () => (
  <nav
    className="navbar navbar-expand-lg navbar-light fixed-top navbar-shrink"
    id="mainNav"
  >
    <div className="container">
      <a className="navbar-brand" href="#page-top">
        Stanley Bulldogs
      </a>
    </div>
  </nav>
);

const newNavigation = () => (
  <Navbar collapseOnSelect expand="sm" bg="light" fixed='top'>
	<LinkContainer to='/' exact={true}>
    	<Navbar.Brand>Stanley Bulldogs</Navbar.Brand>
	</LinkContainer>
    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
    <Navbar.Collapse id="responsive-navbar-nav">
      <Nav className="mr-auto">
        <LinkContainer to='/puppies' exact={true}>
              <Nav.Link>Puppies</Nav.Link>
        </LinkContainer>
        <LinkContainer to='/parents' exact={true}>
              <Nav.Link>Parents</Nav.Link>
        </LinkContainer>
      </Nav>
    </Navbar.Collapse>
  </Navbar>
);

export default newNavigation;
