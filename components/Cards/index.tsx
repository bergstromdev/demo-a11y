import styled from 'styled-components';
import { PageSection } from '../PageSection';
import type { CardType } from './Card';
import { Card } from './Card';

const Container = styled.ul`
  display: grid;
  grid-template-columns: 1fr;
  align-items: center;
  gap: 1rem;
  list-style: none;
  padding-inline: 0;
  @media only screen and (min-width: 600px) {
    grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  }
`;

const cocktails: CardType[] = [
  {
    id: 0,
    title: 'Mai Tai',
    excerpt:
      'The Mai Tai started as a rum cocktail so popular it supposedly depleted world rum supplies in the 1940s and 50s. In 1944, when the cocktail was invented by Victor J. Bergeron — better known as Trader Vic — it wasn’t a sugar bomb. It was a simple drink created to showcase the pungent flavor of a 17-year-old J. Wray and Nephew Jamaican rum:',
    imageUrl:
      'http://postprohibition.com/wp-content/uploads/2010/09/mai_tai.jpg',
    productUrl: '/cocktails/1',
  },
  {
    id: 1,
    title: 'The Hemingway Daquiri',
    excerpt:
      'According to legend (and the book And a Bottle of Rum by Wayne Curtis), the Hemingway Daiquiri was invented when, one fateful day, Hemingway stepped into El Floridita in Havana, Cuba, to use the restroom. Upon emerging, Hemingway caught sight of a lineup of frosty Daiquiris on the bar.',
    imageUrl:
      'https://noseychef.com/wp-content/uploads/2018/04/hemingwaydaiquiri.jpg',
    productUrl: '/cocktails/2',
  },
  {
    id: 2,
    title: 'Corpse Reviver No. 2',
    excerpt:
      'Though many versions exist, the one I had ordered, the Corpse Reviver #2, was the most famous. The drink was created by Harry Craddock, who ran the American Bar at the Savoy Hotel in London in the 1920s and 30s. Craddock also compiled the Savoy Cocktail Book, still found on backbars all over the world today.',
    imageUrl:
      'http://postprohibition.com/wp-content/uploads/2010/09/CorpseRevivor2_Web.jpg',
    productUrl: '/cocktails/3',
  },
];

export const Cards = () => {
  return (
    <PageSection>
      <h3>Exempel: Cards</h3>
      <p>Cards är ett populärt sätt att visa en lista av produkter.</p>
      <Container>
        {cocktails.map((cocktail) => (
          <Card key={cocktail.id} cocktail={cocktail} />
        ))}
      </Container>
    </PageSection>
  );
};
