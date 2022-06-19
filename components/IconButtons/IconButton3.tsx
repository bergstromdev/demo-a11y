import { IconButton } from '.';
import { VisuallyHidden } from '../VisuallyHidden';

export const IconButton3 = () => {
  const handleClick = () => alert('button clicked');
  return (
    <IconButton onClick={handleClick} aria-label="Menu">
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
        <line x1="3" y1="12" x2="21" y2="12"></line>
        <line x1="3" y1="6" x2="21" y2="6"></line>
        <line x1="3" y1="18" x2="21" y2="18"></line>
      </svg>
    </IconButton>
  );
};
