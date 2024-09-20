import styled from 'styled-components';

export const Container = styled.footer`
  background-color: #E6E6E6;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  height: 227px;

  @media (max-width: 425px) {
    height: 400px;
  }
`;

export const ContainerContent = styled.div`
  height: 155px;
  background-color: #E6E6E6;
  display: flex;
  width: 800px;
  padding: 30px 0;
  gap: 56px;

  @media (max-width: 768px) {
    width: 700px;
    }

  @media (max-width: 425px) {
    width: 350px;
    height: 300px;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }
`;

export const Company = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 10px;
  width: 417px;
  height: 125px;

  p {
    font-size: 14px;
    color: #7F7F7F;
    font-weight: 400;
    line-height: 16.8px;

    @media (max-width: 425px) {
      text-align: center;
    }
  }

  @media (max-width: 425px) {
    width: 350px;
  }
`;

export const SAC = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  gap: 10px;

   h3{
    font-size: 20px;
    font-weight: 700;
    line-height: 24px;
    color: #5D5D5D;
  }
`;

export const SectionInfos = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: flex-start;
  gap: 35px;
  width: 326.06px;
  height: 59px;
`;

export const SectionContact = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  gap: 10px;
  width: 147px;

  p {
    font-size: 16px;
    color: #7F7F7F;
    font-weight: 400;
    line-height: 19.2px;
  }
 
`;


export const SocialLinks = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 24px;

  a {
    color: #7dba40;
    margin: 0 10px;
    font-size: 1rem;
    text-decoration: none;

    &:hover {
      text-decoration: underline;
    }
  }
`;

export const Copyright = styled.div`
  background-color: #B1B1B1;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 46px;

  p {
    font-size: 16px;
    color: #FFFFFF;
    font-weight: 700;
    line-height: 19.2px;
    text-align: center;
  }
`;
