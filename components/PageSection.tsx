import { ReactNode } from 'react';
import styled from 'styled-components';
import { PageDivider } from './Divider';

const Section = styled.section`
  margin-block: 2rem;
`;

type Props = {
  children: ReactNode;
};

export const PageSection = ({ children }: Props) => (
  <>
    <Section>{children}</Section>
    <PageDivider />
  </>
);
