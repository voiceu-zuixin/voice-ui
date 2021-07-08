import React, { useState } from 'react';
import Input from '../input';
import styles from './input.example.scss';

const InputExample1: React.FunctionComponent = () => {
  const [inputVal1, setInputVal1] = useState<string>();
  return (
    <>
      <div className={ styles.inputExampleDemo } style={{ height: '40px' }}>
        <Input
          placeholder="填点啥呗"
          onChange={ (e) => setInputVal1(e.currentTarget.value) }
          value={ inputVal1 }
        />
      </div>
    </>
  );
};

export default InputExample1;
