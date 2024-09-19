import styled from 'styled-components';

export const Container = styled.header`
  display: flex;
  justify-content: center;
  padding: 20px;
  background-color: #fff;
  border-bottom: 1px solid #ccc;
`;

export const SectionContent = styled.div`
  width: 1256px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  border: 1px solid red;
`;

export const Logo = styled.img`
  font-size: 1.5rem;
  font-weight: bold;
  color: #7dba40;
`;

export const NavBar = styled.nav`
  width: 935px;
  display: flex;
  padding: 24px 0px 24px 0px;
  align-items: center;
  justify-content: flex-end;
  gap: 10px;
`;

export const NavItem = styled.a`
  width: 120px;
  height: 24px;
  font-size: 20px;
  font-weight: 400;
  line-height: 24px;
  text-align: center;
  color: #7F7F7F;
`;

export const Button = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 193px;
  height: 51px;
  border-radius: 50px;
  padding: 20px 30px 20px 30px;
  gap: 10px;
  background-color: #C6B92D;
  color: #fff;
  font-size: 20px;
  font-weight: 700;
  line-height: 24px;
  text-align: center;
  border: none;
  margin-left: 10px;
`;
