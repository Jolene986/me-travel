import { useState, useEffect } from 'react';

export const useStateCallbackWrapper = (initilValue, callBack) => {
  const [state, setState] = useState(initilValue);
  useEffect(() => callBack(state), [state]);
  return [state, setState];
};

/* whrite where you use const callBack = state => {
  console.log("---------------", state);
};*/
