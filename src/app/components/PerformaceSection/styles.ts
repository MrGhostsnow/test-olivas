import styled from 'styled-components';

export const Container = styled.section`
  height: 718px;
  padding: 16px 0px 64px 0px;
  display: flex;
  flex-direction: column;
  gap: 10px;
  background-color: #fff;
  justify-content: space-between;
  align-items: center;

  @media (max-width: 768px) {
    height: 1150px;
  }

  @media (max-width: 425px) {
    height: 1600px;
    justify-content: space-around;
    padding: 0px 0px 0px 0px;
  }
`;

export const ContainerContent = styled.div`
  width: 1043px;
  display: flex;
  align-items: center;
  gap: 80px;

  @media (max-width: 768px) {
    flex-direction: column;
    height: 930px;
    padding: 0px 0px 0px 0px;
    justify-content: center;
  }

  @media (max-width: 425px) {
    height: 1000px;
    width: 350px;
    height: 700px;
  }
`;

export const Title = styled.h2`
  font-size: 45px;
  font-weight: 600;
  text-align: center;
  line-height: 54px;
  color: #6A0F65;

  @media (max-width: 768px) {
    font-size: 38px;
  }
`;

export const TitleSection = styled.div`
  height: 92px;
  width: 588px;
  font-size: 38px;
  font-weight: 500;
  line-height: 45.6px;
  color: #5D5D5D;

  @media (max-width: 768px) {
    text-align: center;
  }

  @media (max-width: 425px) {
    width: 350px;
  }
`;

export const TextContent = styled.div`
  width: 697px;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  padding: 0px 30px 0px 0px;
  gap: 40px;

  @media (max-width: 768px) {
    justify-content: center;
    padding: 0px 0px 0px 0px;
    align-items: center;
  }

  @media (max-width: 425px) {
    width: 350px;
    gap: 60px;
  }
`;

export const Text = styled.p`
  height: 192px;
  width: 588px;
  font-size: 20px;
  line-height: 24px;
  font-weight: 400;
  color: #5D5D5D;

  @media (max-width: 768px) {
    text-align: center;
  }

  @media (max-width: 425px) {
    width: 350px;
  }
`;

export const ImageContent = styled.div`
  width: 357px;
  height: 327px;

  @media (max-width: 425px) {
    display: flex;
    justify-content: center;
    align-items: center;
  }

  img{
    @media (max-width: 425px) {
      width: 300px;
      height: 300px;
      }
`;

export const ImagesSection = styled.div`
  width: 1043px;
  height: 129px;
  gap: 88px;
  display: flex;
  align-items: center;
  justify-content: center;

  @media (max-width: 425px) {
    flex-direction: column;
    gap: 20px;
    height: 600px;
  }
`;

export const SectionLabel = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 10px;

  p {
    max-width: 176px;
    font-size: 18px;
    line-height: 21.6px;
    font-weight: 400;
    color: #5D5D5D;
    text-align: center;
  }
`;




