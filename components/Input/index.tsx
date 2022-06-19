import { useState } from 'react';

export const Input = () => {
  const [value, setValue] = useState('');
  const [error, setError] = useState('');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) =>
    setValue(e.target.value);

  return (
    <>
      <label htmlFor="input">Inputlabel</label>
      <input type="text" id="input" value={value} onChange={handleChange} />
    </>
  );
};
