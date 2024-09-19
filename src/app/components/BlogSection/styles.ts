import styled from 'styled-components';

export const Container = styled.section`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 20px;
  padding: 40px 0;
`;

export const Post = styled.article`
  background-color: #fff;
  padding: 20px;
  border: 1px solid #ddd;
  h3 {
    font-size: 1.2rem;
    color: #333;
  }
  a {
    color: #7dba40;
    text-decoration: underline;
  }
`;
