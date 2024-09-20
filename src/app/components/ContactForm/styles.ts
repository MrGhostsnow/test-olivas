import styled from 'styled-components';

export const Container = styled.section`
  height: 898px;
  padding: 64px 0 64px 0;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  gap: 64px;
`;

export const ContainerContent = styled.div`
  width: 870px;
  height: 898px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
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
  }

  p {
    font-size: 20px;
    line-height: 24px;
    font-weight: 400;
    height: 24px;
    width: 860px;
    text-align: center;
  }

`;

export const Form = styled.form`
  width: 870px;
  height: 620px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 20px;
`;

export const FormGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr); 
  gap: 20px;
`;

export const FormBlock = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 8px;
  height: 110px;
  width: 425px;
`;

export const FormBlockMessage = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 8px;
  height: 200px;
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
