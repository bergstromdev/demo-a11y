import styled from 'styled-components';
import { PageSection } from '../PageSection';

const Container = styled.section`
  display: flex;
  gap: 2rem;
  flex-wrap: wrap;
  align-items: center;
`;

const ButtonBase = styled.button`
  background-color: transparent;
  border: 1px solid #333;
  border-radius: 0.5rem;
  padding: 0.5rem 1rem;
  font-weight: 600;
  color: #333;
  transition: background-color 250ms ease-in-out;
  &:hover {
    background-color: #ededed;
  }
`;

const ButtonWithoutFocus = styled(ButtonBase)`
  &:focus {
    outline: none;
  }
`;

const ButtonFocus = styled(ButtonBase)`
  &:focus {
    outline: 2px solid #39b54a;
    outline-offset: 2px;
  }
`;

export const ButtonFocusVisible = styled(ButtonBase)`
  &:focus-visible {
    outline: 2px solid #39b54a;
    outline-offset: 2px;
  }
`;

export const FocusButtons = () => {
  const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    // @ts-ignore
    alert(`Du klickade på ${e.target.innerText}`);
  };

  return (
    <PageSection>
      <h3>Exempel: Knappar</h3>
      <p>
        Eftersom defaultknapparna ser bedrövliga ut vill man ofta styla dem, men
        samtidigt behålla funktionaliteten.
      </p>
      <Container>
        <button type="button" onClick={handleClick}>
          Defaultknapp
        </button>
        <ButtonWithoutFocus type="button" onClick={handleClick}>
          Button utan focus styling
        </ButtonWithoutFocus>
        <ButtonFocus type="button" onClick={handleClick}>
          Button med focus
        </ButtonFocus>
        <ButtonFocusVisible type="button" onClick={handleClick}>
          Button med focus visible
        </ButtonFocusVisible>
      </Container>
    </PageSection>
  );
};
