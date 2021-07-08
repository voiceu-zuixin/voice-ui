import React, { useState } from 'react';
import { Input } from 'voice-ui';

const Demo = () => {
  const [inputVal, setInputVal] = useState();
  return (
    <Input
      placeholder="我是最小的输入框"
      size="small"
      onChange={(e) => setInputVal(e.currentTarget.value)}
      value={inputVal}
    />
  );
};

export default Demo;