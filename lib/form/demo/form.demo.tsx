import React, {Fragment} from 'react';
import Demo from '../../helper/demo';
import FormExample1 from "./form.example.1"

const FormDemo = () => {
  return (
    <Fragment>
      <Demo code={require('!!raw-loader!./form.example.1.tsx').default}>
        <FormExample1/>
      </Demo>
    </Fragment>
  );
};

export default FormDemo;