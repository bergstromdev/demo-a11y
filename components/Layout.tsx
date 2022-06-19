import styled from 'styled-components';

import { Navbar } from './Navbar';
import { Footer } from './Footer';
import { ReactNode } from 'react';

const MainContent = styled.main`
  min-height: 70vh;
  max-width: 75rem;
  width: 100%;
  margin: 10rem auto 0;
  padding: 5rem 2rem 2rem;
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
      <MainContent id="main">{children}</MainContent>
      <Footer />
    </>
  );
}
