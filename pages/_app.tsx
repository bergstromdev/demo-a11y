import '../styles/globals.css';
import type { AppProps } from 'next/app';
import Layout from '../components/Layout';
import { createGlobalStyle, ThemeProvider } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
`;

const theme = {
  colors: {
    text: {
      primary: '#222',
      secondary: '#fff',
    },
    background: {
      primary: '#fff',
      secondary: '#222',
    },
  },
};

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <GlobalStyle />
      <ThemeProvider theme={theme}>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </ThemeProvider>
    </>
  );
}

export default MyApp;
