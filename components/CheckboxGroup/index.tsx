import styled from 'styled-components';
import { PageSection } from '../PageSection';
import { Group1 } from './Group1';
import { Group2 } from './Group2';

const Container = styled.section`
  display: grid;
  grid-template-columns: 1fr;
  align-items: center;
  gap: 1rem;
  @media only screen and (min-width: 600px) {
    grid-template-columns: 1fr 1fr;
  }
`;

export const CheckboxGroup = () => {
  return (
    <PageSection>
      <h3>Exempel: Checkbox grupp</h3>
      <p>
        En checkbox group är flera checkboxar som hör till samma del av
        formuläret
      </p>
      <Container>
        <Group1 />
        <Group2 />
      </Container>
    </PageSection>
  );
};
