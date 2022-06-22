import FocusTrap from 'focus-trap-react';
import { useCallback, useEffect } from 'react';
import styled from 'styled-components';
import { CloseButton } from './CloseButton';
import Portal from './Portal';

const Backdrop = styled.div`
  position: fixed;
  inset: 0;
  background-color: rgba(0, 0, 0, 0.5);
  z-index: 1000;
`;

const Modal = styled.div`
  position: absolute;
  background-color: #ffffff;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  border-radius: 0.5rem;
  z-index: 1001;
`;

const ModalContent = styled.div`
  position: relative;
  width: 100%;
  max-width: 500px;
  padding: 3rem;
`;

type Props = {
  focusTrap?: boolean;
  open?: boolean;
  onClose?: () => void;
};
export const ModalBase = ({ focusTrap, open, onClose }: Props) => {
  const handleUserKeyPress = useCallback(
    (event: KeyboardEvent) => {
      const { key } = event;
      if (key === 'Escape') {
        onClose?.();
      }
    },
    [onClose]
  );

  useEffect(() => {
    window.addEventListener('keydown', handleUserKeyPress);
    return () => {
      window.removeEventListener('keydown', handleUserKeyPress);
    };
  }, [handleUserKeyPress]);

  if (!open) return null;
  return (
    <Portal>
      <Backdrop />
      <FocusTrap active={focusTrap}>
        <Modal
          id="modal"
          role="dialog"
          aria-modal="true"
          aria-describedby="modal-title"
        >
          <ModalContent>
            <CloseButton onClose={onClose} />
            <h3 id="modal-title">Modaltitle</h3>
            <p>
              We understand that it is better to engineer easily. We understand
              that if you. The portals factor can be summed up in one word:
              open-source.
            </p>
            <button onClick={onClose}>Stäng</button>
            <button onClick={onClose}>Stäng2</button>
            <button onClick={onClose}>Stäng3</button>
          </ModalContent>
        </Modal>
      </FocusTrap>
    </Portal>
  );
};
