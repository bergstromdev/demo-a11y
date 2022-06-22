import Link from 'next/link';
import styled from 'styled-components';

const CardContainer = styled.li`
  border: 1px solid #ddd;
  border-radius: 0.5rem;
  background-color: white;
  transition: box-shadow 250ms ease-in-out;
  /* &:focus-within {
    box-shadow: rgba(0, 0, 0, 0.16) 0px 10px 36px 0px,
      rgba(0, 0, 0, 0.06) 0px 0px 0px 1px;
  } */
`;

const CardContent = styled.div`
  padding: 1rem;
`;

const CardImage = styled.div<{ url: string }>`
  aspect-ratio: 16 / 9;
  background-image: ${({ url }) => `url(${url})`};
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  border-radius: 0.5rem 0.5rem 0 0;
`;

const CardTitle = styled.h4`
  margin-block: 0.5rem;
`;

const Excerpt = styled.p`
  height: 4.5em;
  display: -webkit-box;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;
  overflow: hidden;
  margin-block: 0.5rem;
`;

const LinkContainer = styled.div`
  display: flex;
  justify-content: flex-end;
  padding-top: 2rem;
`;

const CardLink = styled.a`
  background-color: #367262;
  color: white;
  padding: 0.5rem 1rem;
  border-radius: 0.5rem;
  /* &:focus-visible {
    outline-offset: 2px;
  } */
`;

export type CardType = {
  id: number;
  title: string;
  excerpt: string;
  imageUrl: string;
  productUrl: string;
};

type Props = {
  cocktail: CardType;
};

export const Card = ({
  cocktail: { title, excerpt, imageUrl, productUrl },
}: Props) => {
  return (
    <CardContainer aria-labelledby="card-title">
      <CardImage url={imageUrl} />
      <CardContent>
        <CardTitle id="card-title">{title}</CardTitle>
        <Excerpt>{excerpt}</Excerpt>
        <LinkContainer>
          <Link href={productUrl} passHref>
            <CardLink>Läs mer</CardLink>
            {/* <CardLink aria-label={`Läs mer om ${title}`}>Läs mer</CardLink> */}
          </Link>
        </LinkContainer>
      </CardContent>
    </CardContainer>
  );
};
