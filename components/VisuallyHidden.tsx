import { ReactNode } from 'react';
import styled from 'styled-components';

const Hidden = styled.span`
  clip: rect(0 0 0 0);
  clip-path: inset(100%);
  height: 1px;
  overflow: hidden;
  position: absolute;
  white-space: nowrap;
  width: 1px;
`;

type Props = {
  children: ReactNode;
};

export const VisuallyHidden = ({ children }: Props) => (
  <Hidden>{children}</Hidden>
);
