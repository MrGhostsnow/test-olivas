"use client";
import { Container, SectionContent, NavBar, NavItem, Button } from "./styles";
import logo from "../../assets/logo.png";
import search from "../../assets/search.svg";
import Image from "next/image";

const Header = () => {
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
      </SectionContent>
    </Container>
  );
};

export default Header;
