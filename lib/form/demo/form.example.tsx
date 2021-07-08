import React, { Dispatch, SetStateAction, useState } from 'react'
import styles from './form.example.scss';
import Form, { ValidateFields as validate, FormValue, FormField } from '../form'
import Button from '../../button/button'

export default () => {
  const [formData, setFormData] = useState<FormValue>({
    username: '',
    password: ''
  });

  const [fields] = useState<FormField[]>([
    { name: 'username', label: '用户名', input: { type: 'text' } },
    { name: 'password', label: '密码', input: { type: 'password' } },
  ]);

  const [errors, setErrors] = useState({});

  const rules = [
    { name: 'username', isRequired: true, message: '必填项' },
    { name: 'username', minLen: 2, maxLen: 4, message: '未在2-4之间' },
    { name: 'password', minLen: 1, maxLen: 4, message: '未在1-4之间' },
    { name: 'password', pattern: /\d+/, message: '不符合正则条件' },
  ];

  const onSubmit = (formData: FormValue) => {
    const errors = validate(formData, rules);
    setErrors(errors);
  };

  const onChange = (setFormData: Dispatch<SetStateAction<FormValue>>, value: FormValue) => {
    setFormData(value);
    const errors = validate(value, rules);
    setErrors(errors);
  };

  return <div>
    <div className={styles.fFormDemo}>
      <Form
        onChange={(value) => onChange(setFormData, value)}
        fields={fields}
        value={formData}
        errors={errors}
        onSubmit={() => { onSubmit(formData) }}
        buttons={
          <>
            <Button type="primary" htmlType="submit">提交</Button>
            <Button>取消</Button>
          </>
        }
      />
    </div>
  </div>
}