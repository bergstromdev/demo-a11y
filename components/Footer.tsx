import Link from 'next/link';
import styled from 'styled-components';
import { Content } from './Layout';

const FooterContainer = styled.footer`
  background-color: #367262;
  color: white;
  & a {
    display: block;
  }
`;

export const Footer = () => (
  <FooterContainer>
    <Content>
      <Link href="/" passHref>
        <a>Hem</a>
      </Link>
      <Link href="/focus" passHref>
        <a>Focus</a>
      </Link>
      <Link href="/voiceover" passHref>
        <a>VoiceOver</a>
      </Link>
    </Content>
  </FooterContainer>
);
