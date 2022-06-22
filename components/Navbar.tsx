import styled from 'styled-components';
import Link from 'next/link';
import { useRouter } from 'next/router';

const Header = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0.5rem 1rem;
  background-color: ${({ theme }) => theme.colors.background.primary};
  color: ${({ theme }) => theme.colors.text.primary};
  height: 5rem;
  position: fixed;
  inset: 0 0 auto;
  z-index: 200;
  box-shadow: 2px 2px 2px rgba(0, 0, 0, 0.2);
`;

const NavbarContent = styled.nav`
  position: relative;
  display: flex;
  & a:not(:last-child) {
    margin-right: 1rem;
  }
`;

const LogoLink = styled.a`
  line-height: 1;
`;

const SkipLink = styled.a`
  background: #39b54a;
  height: 30px;
  display: flex;
  align-items: center;
  color: ${({ theme }) => theme.colors.text.secondary};
  padding: 8px;
  left: -70%;
  position: absolute;
  transform: translateY(-300%);
  transition: transform 0.3s;
  &:focus {
    transform: translateY(0%);
  }
`;

const Navlink = styled.a<{ isActive: boolean }>`
  text-decoration: ${({ isActive }) => (isActive ? 'underline' : 'none')};
  font-size: 1.5rem;
`;

export const Navbar = () => {
  const router = useRouter();
  return (
    <Header>
      <Link href="/" passHref>
        <LogoLink>
          <svg
            height="2rem"
            viewBox="0 0 97 48"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            // aria-hidden="true"
          >
            <path
              d="M3.02,14.5c1.07-2.08,2.53-3.68,4.37-4.8c1.84-1.12,3.9-1.68,6.17-1.68c1.98,0,3.72,0.4,5.21,1.2
		c1.49,0.8,2.68,1.81,3.58,3.02V8.46h6.77v26.59h-6.77v-3.89c-0.86,1.25-2.06,2.28-3.58,3.1c-1.52,0.82-3.27,1.22-5.26,1.22
		c-2.24,0-4.28-0.58-6.12-1.73c-1.84-1.15-3.3-2.78-4.37-4.87c-1.07-2.1-1.61-4.5-1.61-7.22C1.41,18.97,1.95,16.58,3.02,14.5z
		 M21.38,17.55c-0.64-1.17-1.5-2.06-2.59-2.69c-1.09-0.62-2.26-0.94-3.5-0.94s-2.4,0.3-3.46,0.91c-1.06,0.61-1.91,1.5-2.57,2.66
		c-0.66,1.17-0.98,2.55-0.98,4.15c0,1.6,0.33,3,0.98,4.2c0.66,1.2,1.52,2.12,2.59,2.76c1.07,0.64,2.22,0.96,3.43,0.96
		c1.25,0,2.42-0.31,3.5-0.94c1.09-0.62,1.95-1.52,2.59-2.69c0.64-1.17,0.96-2.57,0.96-4.2C22.34,20.12,22.02,18.72,21.38,17.55z"
              fill="currentColor"
            />
            <path
              fill="#367262"
              d="M34.1,6.25V0.06h11.57v34.99h-6.91V6.25H34.1z"
            />
            <path
              fill="#367262"
              d="M51.47,6.25V0.06h11.57v34.99h-6.91V6.25H51.47z"
            />
            <path
              d="M95.88,8.46L79.41,47.62h-7.15l5.76-13.25L67.36,8.46h7.54l6.86,18.58l6.96-18.58H95.88z"
              fill="currentColor"
            />
          </svg>
        </LogoLink>
      </Link>
      <NavbarContent>
        <Link href="#main" passHref>
          <SkipLink>Hoppa till innehåll</SkipLink>
        </Link>
        <Link href="/" passHref>
          <Navlink isActive={router.pathname === '/'}>Hem</Navlink>
        </Link>
        <Link href="/focus" passHref>
          <Navlink isActive={router.pathname === '/focus'}>Focus</Navlink>
        </Link>
        <Link href="/voiceover" passHref>
          <Navlink isActive={router.pathname === '/voiceover'}>
            VoiceOver
          </Navlink>
        </Link>
      </NavbarContent>
    </Header>
  );
};
