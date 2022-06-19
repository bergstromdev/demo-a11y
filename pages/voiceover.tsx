import Head from 'next/head';
import { VoiceOverCheatSheet } from '../components/VoiceOverCheatSheet';
import { VoiceOverSettings } from '../components/VoiceOverSettings';

const VoiceOverPage = () => {
  return (
    <>
      <Head>
        <title>VoiceOver</title>
      </Head>
      <h1>VoiceOver</h1>
      <VoiceOverCheatSheet />
      <VoiceOverSettings />
    </>
  );
};

export default VoiceOverPage;
