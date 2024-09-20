import styled from 'styled-components';

export const Container = styled.section`
  height: 898px;
  padding: 64px 0 64px 0;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  gap: 64px;

  @media (max-width: 768px) {
    height: 1300px;
  }

  @media (max-width: 425px) {
    height: 1400px;
  }
`;

export const ContainerContent = styled.div`
  width: 870px;
  height: 898px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;

  @media (max-width: 768px) {
    width: 600px;
    height: 1200px;
  }

  @media (max-width: 425px) {
    width: 350px;
    height: 1400px;
  }
`;

export const TitleForm = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 870px;
  height: 126px;
  gap: 24px;
  color: #5D5D5D;

  h2 {
    font-size: 45px;
    line-height: 54px;
    font-weight: 500;
    height: 54px;

    @media (max-width: 768px) {
      text-align: center;
    }
  }

  p {
    font-size: 20px;
    line-height: 24px;
    font-weight: 400;
    height: 24px;
    width: 860px;
    text-align: center;

    @media (max-width: 768px) {
      width: 600px;
    }

    @media (max-width: 425px) {
      width: 380px;
    }
  }

  @media (max-width: 768px) {
    width: 600px;
    height: 200px;
    justify-content: space-around;
  }

  @media (max-width: 425px) {
    width: 350px;
    height: 350px;
  }

`;

export const Form = styled.form`
  width: 870px;
  height: 620px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 20px;

  @media (max-width: 768px) {
    width: 600px;
    align-items: center;
  }

  @media (max-width: 425px) {
    width: 350px;

  }
`;

export const FormGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr); 
  gap: 20px;

  @media (max-width: 768px) {
    grid-template-columns: repeat(1, 1fr);
  }

  @media (max-width: 425px) {
  }
`;

export const FormBlock = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 8px;
  height: 110px;
  width: 425px;

  @media (max-width: 425px) {
    align-items: center;
  }
  
`;

export const FormBlockMessage = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 8px;
  height: 200px;

  &.formMessage{
    width: 870px;

    @media (max-width: 768px) {
      width: 600px;
    }

    @media (max-width: 425px) {
      width: 350px;
      align-items: center;
  }
  
`;

export const FormInput = styled.div`
  display: flex;
  justify-content: center;
  gap: 14px;
  height: 44px;
  width: 844px;
  align-self: center;
  p{
    font-size: 18px;
    font-weight: 400;
    line-height: 21.6px;
    color: #5D5D5D;
  }

  @media (max-width: 768px) {
    width: 600px;
  }

  @media (max-width: 425px) {
    width: 350px;
  }
`;

export const Label = styled.label`
  font-size: 20px
  font-weight: 700;
  line-height: 24px;
  color: #5D5D5D;
`;

export const Input = styled.input`
  width: 423px;
  height: 56px;
  padding: 10px;
  font-size: 1rem;
  background-color: transparent;
  border: 1px solid #C6B92D;
  border-radius: 5px;
  outline: none;
  color: black;

  @media (max-width: 425px) {
    width: 300px;
  }
`;

export const Option = styled.select`
  width: 423px;
  height: 56px;
  padding: 10px;
  font-size: 1rem;
  background-color: transparent;
  border: 1px solid #C6B92D;
  border-radius: 5px;
  outline: none;
  color: black;

   @media (max-width: 425px) {
    width: 300px;
  }
`;

export const TextArea = styled.textarea`
  width: 100%;
  height: 200px;
  padding: 10px;
  font-size: 1rem;
  background-color: transparent;
  border: 1px solid #C6B92D;
  border-radius: 5px;
  outline: none;
  color: black;

  @media (max-width: 768px) {
    width: 600px;
  }

  @media (max-width: 425px) {
    width: 350px;
  }
`;

export const Button = styled.button`
  width: 360px;
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

export const Checkbox = styled.input`
  width: 22px;
  height: 22px;
  border: 5px solid #C6B92D;
  border-radius: 4px;
  outline: none;
`;

export const SuccessMessage = styled.p`
  margin-top: 20px;
  color: #7dba40;
  font-size: 1.2rem;
`;
