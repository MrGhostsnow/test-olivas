import styled from 'styled-components';

export const Container = styled.section`
  height: 718px;
  padding: 16px 0px 64px 0px;
  display: flex;
  flex-direction: column;
  gap: 10px;
  background-color: #fff;
  align-items: center;
  justify-content: center;


  @media (max-width: 1024px) {
    height: 1000px;
  }

  @media (max-width: 425px) {
    height: 1100px;
  }

`;

export const ContainerContent = styled.div`
  width: 1254px;
  display: flex;
  align-items: center;
  gap: 8px;

  @media (max-width: 1024px) {
    flex-direction: column;
    justify-content: center;
  }

  @media (max-width: 425px) {
    width: 300px;
    height: 1000px;
    justify-content: space-between;
  }
`;

export const TitleSection = styled.div`
  height: 92px;
  width: 598px;
  font-size: 38px;
  font-weight: 500;
  line-height: 45.6px;
  color: #5D5D5D;

  @media (max-width: 1024px) {
    text-align: center;
  }

  @media (max-width: 425px) {
    width: 300px;
  }
`;

export const TextContent = styled.div`
  width: 665px;
  height: 384px;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  padding: 0px 30px 0px 0px;
  gap: 40px;

  @media (max-width: 1024px) {
    justify-content: center;
    align-items: center;
  }

  @media (max-width: 425px) {
    width: 300px;
    height: 620px;
    padding: 0px 0px 0px 0px;
    justify-content: space-between;

  }
`;

export const Text = styled.p`
  height: 120px;
  width: 671px;
  font-size: 20px;
  line-height: 24px;
  font-weight: 400;
  color: #7F7F7F;

  @media (max-width: 1024px) {
    text-align: center;
  }

  @media (max-width: 425px) {
    width: 300px;
  }
`;

export const ImageContent = styled.div`

  img{
    @media (max-width: 425px) {
      width: 300px;
      height: 300px;
    }
  }
`;


export const Button = styled.button`
  width: 283px;
  height: 64px;
  border-radius: 50px;
  padding: 20px 30px 20px 30px;
  background-color: #C6B92D; 
  border: none;
  color: white;
  font-size: 20px;
  font-weight: 700;
  text-align: center;
`;




