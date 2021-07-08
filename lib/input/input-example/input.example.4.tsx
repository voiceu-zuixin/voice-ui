import React, { useState } from 'react';
import Input from '../input';
import styles from './input.example.scss';

const InputExample4: React.FunctionComponent = () => {
  const [inputVal4, setInputVal4] = useState<string>();
  return (
    <>
      <div className={ styles.inputExampleDemo } style={{ height: '40px' }}>
        <span />
        <Input
          size="large"
          placeholder="我是最大的输入框"
          onChange={ (e) => setInputVal4(e.currentTarget.value) }
          value={ inputVal4 }
        />
      </div>
    </>
  );
};

export default InputExample4;
