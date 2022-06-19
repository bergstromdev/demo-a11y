import styled from 'styled-components';
import { PageSection } from '../PageSection';
import { IconButton1 } from './IconButton1';
import { IconButton2 } from './IconButton2';
import { IconButton3 } from './IconButton3';

const Container = styled.section`
  padding-block: 2rem;
  grid-template-columns: 1fr;
  display: grid;
  align-items: center;
  gap: 1rem;
  @media only screen and (min-width: 600px) {
    grid-template-columns: 1fr 1fr 1fr;
  }
`;

export const IconButton = styled.button`
  border: none;
  padding: 1rem;
  user-select: none;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 3rem;
  height: 3rem;
  &:hover {
    background-color: rgba(0, 0, 0, 0.2);
  }
`;

export const IconButtons = () => {
  return (
    <PageSection>
      <h3>Exempel: Icon Buttons</h3>
      <p>
        Icon buttons är knappar som innehåller en ikon men inte någon text som
        förklarar vad knappen gör.
      </p>
      <Container>
        <IconButton1 />
        <IconButton2 />
        <IconButton3 />
      </Container>
    </PageSection>
  );
};
