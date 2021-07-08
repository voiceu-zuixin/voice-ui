import React from 'react'
import { Switch } from 'voice-ui'

export default Demo = () => {
  const [checked, setChecked] = useState(false);
  const handleChange = () => {
    setChecked(!checked)
  }
  return (
    <div>
      <Switch checked={checked} onChange={handleChange} />
      <Switch checked />
      <Switch checked={false} />
      <Switch checked disabled />
      <Switch checked={false} disabled />
    </div>
  );
}
