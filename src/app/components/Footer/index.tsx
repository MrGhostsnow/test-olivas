import Image from "next/image";
import {
  Container,
  ContainerContent,
  Company,
  SAC,
  SectionInfos,
  SectionContact,
  Copyright,
  SocialLinks,
} from "./styles";

import logo from "../../assets/logo.png";
import facebook from "../../assets/facebook.png";
import instagram from "../../assets/instagram.png";
import linkedin from "../../assets/linkedin.png";

const Footer = () => {
  return (
    <Container>
      <ContainerContent>
        <Company>
          <Image src={logo} alt="Logo" width={190} height={55} />
          <p>
            A Olivas Digital é uma martech (marketing technology company), que
            há mais de 10 anos ajuda empresas de todos os portes e segmentos a
            impulsionarem suas vendas no digital.
          </p>
        </Company>
        <SAC>
          <h3>Fale conosco</h3>
          <SectionInfos>
            <SectionContact>
              <p style={{ fontWeight: 700 }}>Atendimento</p>
              <p>+55(11) 2391-6090</p>
            </SectionContact>
            <SectionContact>
              <p style={{ fontWeight: 700 }}>Redes Sociais</p>
              <SocialLinks>
                <Image src={facebook} alt="Facebook" width={32} height={32} />
                <Image src={instagram} alt="Instagram" width={32} height={32} />
                <Image src={linkedin} alt="Linkedin" width={32} height={32} />
              </SocialLinks>
            </SectionContact>
          </SectionInfos>
        </SAC>
      </ContainerContent>
      <Copyright>
        <p>© 2014-2024 - Olivas Digital</p>
      </Copyright>
    </Container>
  );
};

export default Footer;
