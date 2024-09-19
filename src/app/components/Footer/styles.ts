import styled from 'styled-components';

export const Container = styled.footer`
  padding: 20px;
  background-color: #333;
  color: #fff;
  text-align: center;
`;

export const SocialLinks = styled.div`
  margin-bottom: 10px;

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

export const Copyright = styled.p`
  font-size: 0.9rem;
  color: #aaa;
`;
