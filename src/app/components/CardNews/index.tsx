import { ContainerCard, Description, Title, Link } from "./styles";

type CardNewsProps = {
  image: string;
  title: string;
  description: string;
  link: string;
};

const limitWords = (text: string, limit: number) => {
  const strippedText = text.replace(/<\/?[^>]+(>|$)/g, ""); // Remove HTML tags
  const words = strippedText.split(" ");

  if (words.length > limit) {
    return words.slice(0, limit).join(" ") + "...";
  }
  return strippedText;
};

const CardNews = ({ image, title, description, link }: CardNewsProps) => {
  return (
    <ContainerCard>
      <img src={image} alt="image" />
      <Title>{title}</Title>
      <Description
        dangerouslySetInnerHTML={{ __html: limitWords(description, 12) }}
      />
      <Link href={link} target="_blank" rel="noopener noreferrer">
        Leia mais
      </Link>
    </ContainerCard>
  );
};

export default CardNews;
