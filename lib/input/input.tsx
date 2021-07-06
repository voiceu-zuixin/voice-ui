import React, { useState } from 'react'
import './input.scss';
import classes from '../helper/classes'
import { scopedClassMaker } from '../helper/scopedClassMaker'

type Omit<T, K extends keyof T> = Pick<T, Exclude<keyof T, K>>;
const tuple = <T extends string[]>(...args: T) => args;
const InputSizes = tuple('small', 'default', 'large')

interface IProps extends Omit<React.InputHTMLAttributes<HTMLInputElement>, 'size'> {
  size?: (typeof InputSizes)[number]
}

const scopedClass = scopedClassMaker('voice-ui-input')
const sc = scopedClass

const Input: React.FunctionComponent<IProps> =
  ({
    className,
    value,
    onChange,
    size,
    autoComplete,
    ...restProps
  }) => {
    const [inputVal, setInputVal] = useState(value)
    const isEmpty = (v: any) => {
      return v === (null || undefined) ? '' : v
    }
    return (
      <input
        className={classes(sc(''), size && sc(size || '', { extra: className }))}
        value={onChange ? isEmpty(value) : inputVal}
        autoComplete={autoComplete}
        onChange={(e) => {
          onChange ?
            onChange(e) :
            setInputVal(e.currentTarget.value)
        }}
        {...restProps}
      />
    );
  };

export default Input;