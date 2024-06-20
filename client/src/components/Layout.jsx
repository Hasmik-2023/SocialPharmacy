import React from 'react';
import { Outlet } from 'react-router-dom';
import Container from 'react-bootstrap/Container';

import NavBar from './ui/NavBar';

export default function Layout() {
  return (
    <Container>
      <NavBar />
      <Outlet />
    </Container>
  );
}
