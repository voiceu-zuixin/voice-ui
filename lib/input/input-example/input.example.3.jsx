import React, { useState } from 'react';
import { Input } from 'voice-ui';

const Demo = () => {
  const [inputVal, setInputVal] = useState();
  return (
    <Input
    placeholder="我只是placeholder"
      onChange={(e) => setInputVal(e.currentTarget.value)}
      value={inputVal}
    />
  );
};

export default Demo;
