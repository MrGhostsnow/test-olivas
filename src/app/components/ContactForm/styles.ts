import styled from 'styled-components';

export const Container = styled.section`
  padding: 40px;
  background-color: #f7f7f7;
  text-align: center;
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 15px;
  width: 100%;
  max-width: 600px;
  margin: 0 auto;
`;

export const Input = styled.input`
  width: 100%;
  padding: 10px;
  font-size: 1rem;
  border: 1px solid #ccc;
  border-radius: 5px;
`;

export const TextArea = styled.textarea`
  width: 100%;
  padding: 10px;
  font-size: 1rem;
  border: 1px solid #ccc;
  border-radius: 5px;
  height: 150px;
`;

export const Button = styled.button`
  padding: 10px 20px;
  font-size: 1rem;
  color: #fff;
  background-color: #7dba40;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  &:hover {
    background-color: #6ba933;
  }
`;

export const SuccessMessage = styled.p`
  margin-top: 20px;
  color: #7dba40;
  font-size: 1.2rem;
`;
