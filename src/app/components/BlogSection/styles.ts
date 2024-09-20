import styled from 'styled-components';

export const Container = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 759px;
  gap: 24px;
`;

export const ContainerContent = styled.div`
  width: 1253px;
  height: 550px;
  display: flex;
  flex-wrap: wrap;
  gap: 24px;

  @media (max-width: 1024px) {
    width: 900px;
  }

  @media (max-width: 768px) {
    width: 700px;
  }

  @media (max-width: 625px) {
    width: 340px;
  }
`;

export const Button = styled.button`
  width: 176px;
  height: 64px;
  border-radius: 50px;
  padding: 20px 30px 20px 30px;
  background-color: #C6B92D; 
  border: none;
  color: white;
  font-size: 20px;
  font-weight: 700;
  line-height: 24px;
  cursor: pointer;

`;
