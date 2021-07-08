import React, { ReactNode, FormEvent } from 'react'
import './form.scss'
import { scopedClassMaker } from '../helper/scopedClassMaker'
import Input from '../input/input'

const componentName = 'voice-ui-form'
const sc = scopedClassMaker(componentName)

export interface FormValue {
  [K: string]: any;
}

export interface FormErrors {
  [K: string]: string
}

interface FormFieldDefaultRender {
  type: 'text' | 'textarea' | 'number' | 'password';
}

export interface FormField {
  name: string;
  label: string;
  input: (() => ReactNode) | FormFieldDefaultRender;
}

interface IProps {
  value: FormValue,
  fields: FormField[];
  onChange: (value: FormValue) => void;
  buttons?: ReactNode;
  onSubmit: (value: FormValue) => void;
  errors?: FormErrors;
  layout?: 'vertical' | 'horizontal' | 'inline';
}

const Form: React.FunctionComponent<IProps> = props => {

  const onInputChange = (name: string, e: any) => {
    props.onChange({
      ...props.value,
      [name]: e.target.value
    })
  }

  const renderInput = (field: FormField) =>
    <div className={sc('input-wrapper')} key={field.name}>
      {field.input instanceof Function ?
        field.input() :
        <Input value={props.value[field.name]}
          onChange={onInputChange.bind(null, field.name)} />}
    </div>

  const horizontalLayout = (
    <table className={sc('table')}>
      <tbody>
        {props.fields.map(f =>
          <tr key={f.name} className={sc('tr')}>
            <td className={sc('td')}>
              <div className={sc('label')}>{f.name}</div>
            </td>
            {/* 渲染input */}
            <td className={sc('td')}>
              {renderInput(f)}
            </td>

            {/* 渲染验证错误信息 */}
            <td className={sc('td')}>
              {
                props.errors && props.errors[f.name] &&
                <div
                  className={sc('error')}>{props.errors[f.name]}
                </div>
              }
            </td>
          </tr>
        )}
        <tr>
          <td className={sc('td')} />
          <td className={sc('td')} colSpan={2}>
            <div className={sc('buttons') + ' form-inner-btn'}>
              {props.buttons}
            </div>
          </td>
        </tr>
      </tbody>
    </table>
  )

  const verticalLayout = <div>
    {props.fields.map(f =>
      <div key={f.name} className={sc('row')}>
        <div className={sc('label')}>{f.label}</div>
        {renderInput(f)}
        {props.errors && props.errors[f.name] &&
          <div className={sc('error')}>
            {props.errors[f.name]}
          </div>
        }
      </div>
    )}
    <div className={sc('buttons')}>
      {props.buttons}
    </div>
  </div>

  const onSubmit = (e: FormEvent) => {
    e.preventDefault()
    props.onSubmit(props.value)
  }

  return (
    <div className={sc('wrapper')}>
      <form className={sc('', { extra: props.layout })} onSubmit={onSubmit}>
        {
          props.layout === 'horizontal' ?
            horizontalLayout :
            verticalLayout
        }
      </form>
    </div>
  )
}

Form.displayName = componentName
Form.defaultProps = {
  layout: 'horizontal'
}
Form.propTypes = {}

export default Form

export { ValidateFields } from './validator'