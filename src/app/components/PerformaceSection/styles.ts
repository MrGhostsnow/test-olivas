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
  border: 1px solid red;
`;

export const ContainerContent = styled.div`
  width: 1043px;
  display: flex;
  align-items: center;
  gap: 80px;
  border: 1px solid red;
`;

export const Title = styled.h2`
  font-size: 45px;
  font-weight: 600;
  text-align: center;
  line-height: 54px;
  color: #6A0F65;
`;

export const TitleSection = styled.div`
  height: 92px;
  width: 588px;
  font-size: 38px;
  font-weight: 500;
  line-height: 45.6px;
  color: #5D5D5D;
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
  height: 192px;
  width: 588px;
  font-size: 20px;
  line-height: 24px;
  font-weight: 400;
  color: #5D5D5D;
`;

export const ImageContent = styled.div`
  width: 357px;
  height: 327px;
`;

export const ImagesSection = styled.div`
  width: 1043px;
  height: 129px;
  gap: 88px;
  display: flex;
  align-items: center;
  justify-content: center;
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




