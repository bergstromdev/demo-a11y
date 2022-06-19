import { ReactNode, useEffect } from 'react';
import { createPortal } from 'react-dom';

type Props = {
  children: ReactNode;
};

const Portal = ({ children }: Props) => {
  const mount = document.getElementById('portal-root');
  const el = document.createElement('div');

  useEffect(() => {
    mount?.appendChild(el);
    return () => {
      if (mount) {
        mount.removeChild(el);
      }
    };
  }, [el, mount]);

  return createPortal(children, el);
};

export default Portal;
