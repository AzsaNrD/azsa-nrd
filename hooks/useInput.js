import { useState } from 'react';

function useInput(initialValue = '') {
  const [value, setValue] = useState(initialValue);

  const onValueChangeHandler = (event) => {
    setValue(event.target.value);
  };

  return [value, setValue, onValueChangeHandler];
}

export default useInput;
