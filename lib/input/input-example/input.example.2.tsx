import React, { useState } from 'react';
import Input from '../input';
import styles from './input.example.scss';

const InputExample2: React.FunctionComponent = () => {
  const [inputVal2, setInputVal2] = useState<string>();
  return (
    <>
      <div className={styles.inputExampleDemo} style={{ height: '40px' }}>
        <Input
          placeholder="我是最小的输入框"
          size="small"
          onChange={(e) => setInputVal2(e.currentTarget.value)}
          value={inputVal2}
        />
      </div>
    </>
  );
};

export default InputExample2;
