import React, { useState } from 'react';
import { Input } from 'voice-ui';

const Demo = () => {
  const [inputVal, setInputVal] = useState();
  return (
    <Input
      placeholder="填点啥呗"
      onChange={(e) => setInputVal(e.currentTarget.value)}
      value={inputVal}
    />
  );
};

export default Demo;
