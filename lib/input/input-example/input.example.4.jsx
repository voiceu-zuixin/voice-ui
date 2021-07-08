import React, { useState } from 'react';
import { Input } from 'voice-ui';

const Demo = () => {
  const [inputVal, setInputVal] = useState();
  return (
    <Input
      size="large"
      placeholder="我是最大的输入框"
      onChange={(e) => setInputVal(e.currentTarget.value)}
      value={inputVal}
    />
  );
};

export default Demo;