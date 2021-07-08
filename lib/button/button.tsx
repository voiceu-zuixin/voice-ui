import React from 'react';
import { scopedClassMaker } from '../helper/scopedClassMaker';
import './button.scss';
import Icon from '../icon/icon';

const sc = scopedClassMaker('voice-ui-button');

interface Props extends React.HTMLAttributes<HTMLElement> {
  icon?: string,
  htmlType?: string,
  type?: string,
}

const Button: React.FunctionComponent<Props> = (props) => {
  const { className, type, icon, htmlType, ...rest } = props;
  const classname = sc({
    '': true,
    [type || '']: true
  }, { extra: className });

  if (icon) {
    return (
      <button className={classname + ' voice-ui-btn-icon'} {...rest} style={{ display: icon  }}>
        {icon && <Icon name={icon} />}
        &nbsp;&nbsp;
        <span >{props.children}</span>
        &nbsp;
      </button>
    )
  }
  return (
    <button className={classname + ' voice-ui-btn'} {...rest} style={{ display: icon && 'flex' }}>
      <span >{props.children}</span>
    </button>
  );
};
export default Button;
