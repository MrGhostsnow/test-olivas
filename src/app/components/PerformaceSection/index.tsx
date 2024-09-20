import {
  Container,
  ContainerContent,
  ImageContent,
  ImagesSection,
  SectionLabel,
  Text,
  TextContent,
  Title,
  TitleSection,
} from "./styles";
import Image from "next/image";
import seoicon from "../../assets/seoicon.png";
import speed from "../../assets/speed.png";
import mobile from "../../assets/mobile.png";
import marketing from "../../assets/marketing.png";

const PerformaceSection = () => {
  return (
    <Container>
      <Title>Acelere o seu site e melhore sua Performance!</Title>
      <ContainerContent>
        <ImageContent>
          <Image src={marketing} alt="marketing" />
        </ImageContent>
        <TextContent>
          <TitleSection>
            Para{" "}
            <span style={{ color: "#DCD154" }}>aumentar o faturamento</span> da
            sua empresa
          </TitleSection>
          <Text>
            Você está pronto para transformar a velocidade do seu site e
            oferecer a melhor experiência possível aos seus usuários? Nossa
            equipe de especialistas em otimização de sites está aqui para
            ajudar. Utilizamos as mais avançadas técnicas de SEO técnico e as
            melhores práticas de desenvolvimento web para garantir que seu site
            não só carregue rapidamente, mas também se mantenha seguro,
            acessível e otimizado para todos os dispositivos.
          </Text>
        </TextContent>
      </ContainerContent>
      <ImagesSection>
        <SectionLabel>
          <Image src={speed} alt="speed" />
          <p>Melhore a Velocidade do Carregamento</p>
        </SectionLabel>
        <SectionLabel>
          <Image src={mobile} alt="mobile" />
          <p>Otimização para Mobile</p>
        </SectionLabel>
        <SectionLabel>
          <Image src={seoicon} alt="seoicon" />
          <p>SEO Técnico</p>
        </SectionLabel>
      </ImagesSection>
    </Container>
  );
};

export default PerformaceSection;
