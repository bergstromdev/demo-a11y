import Image from 'next/image';
import styled from 'styled-components';
import { PageSection } from '../PageSection';

const Figure = styled.figure`
  margin-inline: 0;
  color: #333;
  margin-bottom: 3rem;
`;

const Caption = styled.figcaption`
  margin-top: 1rem;
`;

const ImageContainer = styled.div`
  width: 500px;
  aspect-ratio: 16/9;
  position: relative;
`;

export const VoiceOverSettings = () => {
  return (
    <PageSection aria-describedby="settings-heading">
      <h2 id="settings-heading">VoiceOver inställningar</h2>

      <Figure>
        <ImageContainer>
          <Image
            src="/settings-2.png"
            alt="VoiceOver inställningar"
            layout="fill"
            objectFit="cover"
          />
        </ImageContainer>
        <Caption>
          Inställningarna för VoiceOver hittar man i
          <strong>
            {' '}
            System Preferences/Accessibility/VoiceOver/VoiceOver Utility
          </strong>
        </Caption>
      </Figure>
    </PageSection>
  );
};
