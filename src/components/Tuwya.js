import React, { useEffect, useState } from 'react';
import SelectRace from './SelectRace';

export const Tuwya = () => {
  const [showSelf, setShowSelf] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setShowSelf(true);
    }, 5000);
  }, []);
  if (showSelf) {
    return <SelectRace onclick={() => setShowSelf(false)} />;
  } else {
    return null;
  }
};
