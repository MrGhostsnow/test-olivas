import { Container, Copyright, SocialLinks } from "./styles";

const Footer = () => {
  return (
    <Container>
      <SocialLinks>
        <a href="https://twitter.com">Twitter</a>
        <a href="https://linkedin.com">LinkedIn</a>
        <a href="https://github.com">GitHub</a>
      </SocialLinks>
      <Copyright>
        &copy; {new Date().getFullYear()} olivas.digital. Todos os direitos
        reservados.
      </Copyright>
    </Container>
  );
};

export default Footer;
