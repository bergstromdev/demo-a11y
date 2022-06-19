import styled from 'styled-components';

const Button = styled.button`
  background: transparent;
  border: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 2.75rem;
  height: 2.75rem;
  position: absolute;
  top: 0;
  right: 0;
`;

type Props = {
  onClose?: () => void;
};

export const CloseButton = ({ onClose }: Props) => {
  return (
    <Button aria-label="Stäng modal" tabIndex={0} onClick={onClose}>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        aria-hidden="true"
      >
        <line x1="18" y1="6" x2="6" y2="18"></line>
        <line x1="6" y1="6" x2="18" y2="18"></line>
      </svg>
    </Button>
  );
};
