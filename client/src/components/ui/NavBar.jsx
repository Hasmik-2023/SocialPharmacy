import React from 'react';
import {
  Container, Nav, Navbar, NavDropdown,Button
} from 'react-bootstrap';
import { NavLink } from 'react-router-dom';

import logo from '../../../public/logo.png';

export default function NavBar({ user, handleLogout }) {

  return (
    <Navbar expand="lg" className="navbar-dark bg-primary" style={{ height: '100px' }}>
      <Container>
        <Navbar.Brand href="/" className="d-flex align-items-center">
          <img src={logo} alt="Аптека" style={{ height: '100px', marginRight: '1rem' }} />
          Social-Pharmacy
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <NavDropdown title="Категории" id="basic-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">Гигиена</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">
                Витамины
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Тесты</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">
                Гомеопатия
              </NavDropdown.Item>
            </NavDropdown>
          </Nav>
          <Nav>
            {user ? (
              <>
                <span className="nav-link">Привет, {user.name}</span>
                <Button className="nav-link" onClick={handleLogout}>
                  Выход
                </Button>
              </>
            ) : (
              <>
                <NavLink to="/signin" className="nav-link">
                  Вход
                </NavLink>
                <NavLink to="/signup" className="nav-link">
                  Регистрация
                </NavLink>
              </>
            )}
            <span className="nav-link">|</span>
            <NavLink to="/shopcart" className="nav-link">
              Корзина
            </NavLink>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}
