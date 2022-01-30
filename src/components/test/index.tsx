import { FC, useState } from 'react';

export const Test: FC = ({ children }) => {
  const [value, setValue] = useState(0);
  return (
    <>
      {value}
      <button {...{ onClick: () => setValue(prev => prev + 1) }}>+</button>
      {children}
    </>
  );
};
