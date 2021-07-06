import React, {Fragment} from 'react';
import Demo from '../../helper/demo';
import ButtonExample1 from "./button.example.1"

const ButtonDemo = () => {
  return (
    <Fragment>
      <Demo code={require('!!raw-loader!./button.example.1.tsx').default}>
        <ButtonExample1/>
      </Demo>
    </Fragment>
  );
};

export default ButtonDemo;