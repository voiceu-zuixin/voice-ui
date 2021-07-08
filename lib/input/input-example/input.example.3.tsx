import React, { useState } from 'react';
import Input from '../input';
import styles from './input.example.scss';

const InputExample3: React.FunctionComponent = () => {
  const [inputVal3, setInputVal3] = useState<string>();
  return (
    <>
      <div className={ styles.inputExampleDemo } style={{ height: '40px' }}>
        <span />
        <Input
          placeholder="我只是placeholder"
          onChange={ (e) => setInputVal3(e.currentTarget.value) }
          value={ inputVal3 }
        />
      </div>
    </>
  );
};

export default InputExample3;
