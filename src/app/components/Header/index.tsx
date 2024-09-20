"use client";
import { useState } from "react";
import {
  Container,
  SectionContent,
  NavBar,
  NavItem,
  Button,
  MobileMenuIcon,
  MobileNavBar,
} from "./styles";
import logo from "../../assets/logo.png";
import search from "../../assets/search.svg";
import Image from "next/image";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <Container>
      <SectionContent>
        <Image src={logo} alt="Logo" />
        <NavBar>
          <NavItem href="#">Sobre o Site</NavItem>
          <NavItem href="#">SEO</NavItem>
          <NavItem href="#">Performance</NavItem>
          <NavItem href="#">Blog</NavItem>
          <Image src={search} alt="search" style={{ cursor: "pointer" }} />
          <Button>Contato</Button>
        </NavBar>
        {/* Ícone de menu para mobile */}
        <MobileMenuIcon onClick={toggleMenu}>
          {isMenuOpen ? "×" : "☰"}
        </MobileMenuIcon>
        {/* Menu mobile */}
        <MobileNavBar isMenuOpen={isMenuOpen}>
          <NavItem href="#">Sobre o Site</NavItem>
          <NavItem href="#">SEO</NavItem>
          <NavItem href="#">Performance</NavItem>
          <NavItem href="#">Blog</NavItem>
          <Button>Contato</Button>
        </MobileNavBar>
      </SectionContent>
    </Container>
  );
};

export default Header;
