import { NextPage } from 'next';
import Head from 'next/head';
import { FocusButtons } from '../components/FocusButtons';
import { Modal } from '../components/Modal';

const FocusPage: NextPage = () => {
  return (
    <>
      <Head>
        <title>Focushantering</title>
      </Head>
      <h1>Focus</h1>
      <h2>Focushantering spelar roll</h2>
      <p>
        Syftet är att hjälpa en person att veta vilket element som har
        tangentbordsfokus.
      </p>

      <FocusButtons />
      <Modal />
    </>
  );
};

export default FocusPage;
