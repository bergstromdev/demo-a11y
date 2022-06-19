import styled from 'styled-components';

const HeroContainer = styled.section`
  height: 60vh;
  background-image: url('https://images.unsplash.com/photo-1552319704-41c50c38c26e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2670&q=80');
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
`;

const HeroContent = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  width: 75rem;
  padding-top: 5rem;
  margin: 0 auto;
  height: 100%;
  color: #fff;
`;

const HeroTitle = styled.h1`
  font-size: 4rem;
  margin-bottom: 0;
  letter-spacing: 0.07em;
`;

const HeroSubtitle = styled.p`
  font-size: 2.5rem;
  margin-top: 1rem;
`;

export const Hero = () => {
  return (
    <HeroContainer aria-label="hero">
      <HeroContent>
        <HeroTitle>Titeln står här</HeroTitle>
        <HeroSubtitle>och här står undertiteln</HeroSubtitle>
      </HeroContent>
    </HeroContainer>
  );
};
