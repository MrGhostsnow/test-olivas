import {
  Container,
  ContainerContent,
  ImageContent,
  Text,
  TextContent,
  Button,
  TitleSection,
} from "./styles";
import Image from "next/image";
import toppage from "../../assets/toppage.png";

const TopPage = () => {
  return (
    <Container>
      <ContainerContent>
        <TextContent>
          <TitleSection>
            Teste de desenvolvimento
            <span style={{ color: "#DCD154" }}>Front-end Next.JS</span>
          </TitleSection>
          <Text>
            Bem-vindo ao nosso desafio de codificação React! Este teste avalia
            suas habilidades em desenvolver aplicações web interativas com
            React. Sua tarefa é construir uma aplicação que interaja com APIs
            externas e exiba dados de forma clara e eficiente. Estamos ansiosos
            para ver sua criatividade e qualidade de código em prática.
          </Text>
          <Button>Entrar em contato</Button>
        </TextContent>
        <ImageContent>
          <Image src={toppage} alt="toppage" width={530} height={528} />
        </ImageContent>
      </ContainerContent>
    </Container>
  );
};

export default TopPage;
