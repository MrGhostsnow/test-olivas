import styled from 'styled-components';

interface MobileNavBarProps {
  isMenuOpen: boolean;
}

export const Container = styled.header`
  display: flex;
  justify-content: center;
  padding: 20px;
  background-color: #fff;
`;

export const SectionContent = styled.div`
  width: 1256px;
  display: flex;
  justify-content: space-between;
  align-items: center;

  @media (max-width: 1024px) {
    width: 1000px;
  }

  @media (max-width: 768px) {
    width: 100%;
    justify-content: space-between;
  }
`;

export const Logo = styled.img`
  font-size: 1.5rem;
  font-weight: bold;
  color: #7dba40;
`;

export const NavBar = styled.nav`
  width: 935px;
  display: flex;
  padding: 24px 0;
  align-items: center;
  justify-content: flex-end;
  gap: 10px;

  @media (max-width: 1024px) {
    width: 700px;
  }

  @media (max-width: 768px) {
    display: none; /* Esconder o menu em telas menores */
  }
`;

export const NavItem = styled.a`
  width: 120px;
  height: 24px;
  font-size: 20px;
  font-weight: 400;
  line-height: 24px;
  text-align: center;
  color: #7f7f7f;

  @media (max-width: 1024px) {
    width: 100px;
  }
`;

export const Button = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 193px;
  height: 51px;
  border-radius: 50px;
  padding: 20px 30px;
  gap: 10px;
  background-color: #c6b92d;
  color: #fff;
  font-size: 20px;
  font-weight: 700;
  line-height: 24px;
  text-align: center;
  border: none;
  margin-left: 10px;
`;

/* Ícone de menu para mobile */
export const MobileMenuIcon = styled.div`
  display: none;
  font-size: 30px;
  cursor: pointer;
  color: #000;
  z-index: 11;

  @media (max-width: 768px) {
    display: block; /* Exibir o ícone do menu em telas menores */
  }
`;

/* Menu mobile */
export const MobileNavBar = styled.nav<MobileNavBarProps>`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;
  position: absolute;
  top: 0px; /* Ajuste para evitar sobreposição */
  right: 0;
  width: 100%;
  background-color: #fff;
  padding: 2rem;
  z-index: 10;
  transition: transform 0.3s ease-in-out;
  transform: ${({ isMenuOpen }) => (isMenuOpen ? "translateY(0)" : "translateY(-100%)")};
  border: 1px solid #ccc;

  @media (max-width: 425px) {
    flex-direction: column;
    gap: 1rem;
    }

  ${NavItem} {
    width: 120px;
  }

  ${Button} {
    
  }

  @media (min-width: 769px) {
    display: none; /* Esconder o menu mobile em telas maiores */
  }
`;
