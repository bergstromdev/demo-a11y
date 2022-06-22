import styled from 'styled-components';

import { Navbar } from './Navbar';
import { Footer } from './Footer';
import { ReactNode } from 'react';

export const Content = styled.div`
  max-width: 75rem;
  margin: 0 auto;
  padding: 5rem 2rem 2rem;
`;

const Main = styled.main`
  min-height: 70vh;
  max-width: 75rem;
  width: 100%;
  margin: 10rem auto;
  background-color: #fff;
  border-radius: 0.5rem;
  scroll-padding-top: 5rem;
`;

type Props = {
  children: ReactNode;
};

export default function Layout({ children }: Props) {
  return (
    <>
      <Navbar />
      <Main id="main">
        <Content>{children}</Content>
      </Main>
      <Footer />
    </>
  );
}
