import styled from 'styled-components';

export const Container = styled.section`
  height: 812px;
  padding: 4px 0px 4px 0px;
  display: flex;
  gap: 10px;
  background-color: #fff;
  justify-content: center;
  align-items: center;
  border: 1px solid red;
`;

export const ContainerContent = styled.div`
  width: 1254px;
  height: 632px;
  border-radius: 32px;
  padding: 37px 0px 37px 0px;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 10px;
  border: 1px solid red;
  box-shadow: 
  0px 4px 8px 0px #8585851A, 
  0px 14px 14px 0px #85858517, 
  0px 32px 19px 0px #8585850D, 
  0px 56px 23px 0px #85858503, 
  0px 88px 25px 0px #85858500;
`;

export const Title = styled.h2`
  font-size: 45px;
  font-weight: 500;
  text-align: center;
  line-height: 54px;
  color: #5D5D5D;
`;

export const Content = styled.div`
  display: flex;
  height: 464px;
  justify-content: space-between;
  padding: 0px 30px 0px 30px;
`;

export const TextContent = styled.div`
  width: 697px;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  padding: 0px 30px 0px 0px;
  gap: 40px;
  border: 1px solid red;
`;

export const Text = styled.p`
  font-size: 20px;
  line-height: 32px;
  font-weight: 400;
  color: #5D5D5D;
`;

export const ImageContent = styled.div`
  width: 400px;
`;

export const Image = styled.img`  
  width: 100%;  
`;

export const List = styled.div`
  display: flex;
  flex-direction: column;
  gap: 18px;
`;

export const Itens = styled.div`
  display: flex;
  gap: 16px;
  align-items: center;
  font-size: 20px;
  line-height: 24px;
  font-weight: 400;
  color: #5D5D5D;

`;
