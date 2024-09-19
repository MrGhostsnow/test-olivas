import {
  Container,
  ContainerContent,
  Title,
  Content,
  Text,
  List,
  Itens,
  TextContent,
  ImageContent,
} from "./styles";
import Image from "next/image";
import chart from "../../assets/chart.png";
import people from "../../assets/people.png";
import leads from "../../assets/leads.png";
import time from "../../assets/time.png";
import sales from "../../assets/sales.png";
import seo from "../../assets/seo.png";

const SEOSection = () => (
  <Container>
    <ContainerContent>
      <Title>
        SEO, ou <span style={{ color: "#C6B92D" }}>otimização</span>
      </Title>
      <Content>
        <TextContent>
          <Text>
            É uma estratégia crucial para melhorar a visibilidade e o ranking de
            um site nos resultados de pesquisa orgânica de motores de busca como
            Google, Bing e Yahoo. A prática de SEO envolve uma série de técnicas
            e metodologias que visam otimizar aspectos internos e externos de um
            website para torná-lo mais atrativo.
          </Text>
          <Text>O que pode ajudar com os seguintes resultados:</Text>
          <List>
            <Itens>
              <Image src={people} alt="people" />
              <p>Visitas do seu site</p>
            </Itens>
            <Itens>
              <Image src={leads} alt="leads" />
              <p>Mais leads gerados por mês</p>
            </Itens>
            <Itens>
              <Image src={chart} alt="chart" />
              <p>Oportunidades geradas por mês</p>
            </Itens>
            <Itens>
              <Image src={sales} alt="sales" />
              <p>Vendas realizadas por mês</p>
            </Itens>
            <Itens>
              <Image src={time} alt="time" />
              <p>Tempo de carregamento do site</p>
            </Itens>
          </List>
        </TextContent>
        <ImageContent>
          <Image src={seo} alt="seo" />
        </ImageContent>
      </Content>
    </ContainerContent>
  </Container>
);

export default SEOSection;
