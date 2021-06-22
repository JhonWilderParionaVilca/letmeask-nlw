import { useState } from 'react';

export function Button() {
  const [counter, setCounter] = useState(0);

  const handleClick = () => {
    setCounter(counter + 1);
  };

  return (
    <button type="button" onClick={handleClick}>
      {counter}
    </button>
  );
}
