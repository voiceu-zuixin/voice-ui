import React, { useState } from 'react'
import { Button, Form, ValidateFields } from 'voice-ui'

export default Demo = () => {
  const [formData, setFormData] = useState({
    username: '',
    password: ''
  });

  const [fields] = useState([
    { name: 'username', label: '用户名', input: { type: 'text' } },
    { name: 'password', label: '密码', input: { type: 'password' } },
  ]);

  const [errors, setErrors] = useState({});

  const rules = [
    { name: 'username', isRequired: true, message: '请填写username' },
    { name: 'username', minLen: 2, maxLen: 4, message: '请输入2-4位' },
    { name: 'password', minLen: 1, maxLen: 4, message: '请输入1-4位' },
    { name: 'password', pattern: /\d+/, message: '不符合xx规则' },
  ];

  const onSubmit = (formData) => {
    const errors = ValidateFields(formData, rules);
    setErrors(errors);
  };

  const onChange = (setFormData, value) => {
    setFormData(value);
    const errors = ValidateFields(value, rules);
    setErrors(errors);
  };

  return (
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
  )
}