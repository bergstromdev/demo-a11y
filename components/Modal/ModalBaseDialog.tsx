/* eslint-disable react/display-name */
import FocusTrap from 'focus-trap-react';
import { forwardRef } from 'react';
import styled from 'styled-components';
import { CloseButton } from './CloseButton';

const Dialog = styled.dialog`
  border: 0;
  border-radius: 0.5rem;
  max-width: 50ch;
  &::backdrop {
    background: rgba(0, 0, 0, 0.5);
  }
`;

type Props = {
  onClose?: () => void;
  focusTrap: boolean;
};

export const ModalBaseDialog = forwardRef<HTMLDialogElement, Props>(
  ({ onClose, focusTrap }, ref) => {
    return (
      <FocusTrap active={focusTrap}>
        <Dialog ref={ref}>
          <div>
            <CloseButton onClose={onClose} />
            <h3>Modaltitle</h3>
            <p>
              We understand that it is better to engineer easily. We understand
              that if you. The portals factor can be summed up in one word:
              open-source.
            </p>
            <button onClick={onClose}>Stäng</button>
            <button onClick={onClose}>Stäng2</button>
            <button onClick={onClose}>Stäng3</button>
          </div>
        </Dialog>
      </FocusTrap>
    );
  }
);
