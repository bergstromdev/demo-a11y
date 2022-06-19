import styled from 'styled-components';
import { PageSection } from '../PageSection';
import { useRef, useState } from 'react';
import { ModalBase } from './ModalBase';
import { ButtonFocusVisible } from '../FocusButtons';
// import { ModalBaseDialog } from './ModalBaseDialog';

const ButtonContainer = styled.div`
  display: flex;
  gap: 2rem;
  flex-wrap: wrap;
`;

export const Modal = () => {
  const dialogRef = useRef<HTMLDialogElement>(null);
  const [focusTrap, setFocusTrap] = useState(false);
  const [open, setOpen] = useState(false);

  const handleClose = () => {
    setFocusTrap(false);
    dialogRef?.current?.close();
    setOpen(false);
  };

  const handleOpen1 = () => {
    setOpen(true);
  };

  const handleOpen2 = () => {
    setFocusTrap(true);
    setOpen(true);
  };

  return (
    <PageSection>
      <h3>Exempel: Modal</h3>
      <p>Some text here</p>
      <ButtonContainer>
        <ButtonFocusVisible onClick={handleOpen1}>
          Öppna modal utan focus trap
        </ButtonFocusVisible>
        <ButtonFocusVisible onClick={handleOpen2}>
          Öppna modal med focus trap
        </ButtonFocusVisible>
        <ModalBase focusTrap={focusTrap} open={open} onClose={handleClose} />
        {/* <ModalBaseDialog
          focusTrap={focusTrap}
          ref={dialogRef}
          onClose={handleClose}
        /> */}
      </ButtonContainer>
    </PageSection>
  );
};
