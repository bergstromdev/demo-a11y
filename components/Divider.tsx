import styled from 'styled-components';

const Divider = styled.hr`
  border-color: rgba(0, 0, 0, 0.12);
`;

export const PageDivider = () => <Divider aria-hidden="true" />;
