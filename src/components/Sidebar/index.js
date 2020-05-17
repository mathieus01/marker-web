import React from "react";
import { Link } from "react-router-dom";
import { Container, Nav, NavItem } from "./styles";
import { FiHome, FiUsers, FiUser, FiCalendar } from "react-icons/fi";

export default function Sidebar() {
  return (
    <Container>
      <div className="top">
        <div className="logo">
          <span>Markeer</span>
        </div>
        <Nav>
          <NavItem>
            <Link to="/app">
              <FiHome size={20} />
              <span>Inicio</span>
            </Link>
          </NavItem>
          <NavItem>
            <Link to="/groups">
              <FiUsers size={20} />
              <span>Equipes</span>
            </Link>
          </NavItem>
          <NavItem>
            <Link to="/patient">
              <FiUser size={20} />
              <span>Pacientes</span>
            </Link>
          </NavItem>
          <NavItem>
            <Link to="/schedule">
              <FiCalendar size={20} />
              <span>Agenda</span>
            </Link>
          </NavItem>
        </Nav>
      </div>
    </Container>
  );
}
