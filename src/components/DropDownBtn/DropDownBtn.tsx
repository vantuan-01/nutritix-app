import { Select, Space } from 'antd'

import styles from './DropDownBtn.module.scss'

interface DropDownProps {
  value?: any
}

function DropDown({ value }: DropDownProps) {
  const handleChange = (value: string) => {
    console.log(`selected ${value}`)
  }
  return (
    <Select
      size='large'
      defaultValue='lucy'
      style={{ width: '100%', height: '100%' }}
      onChange={handleChange}
      options={[
        { value: 'jack', label: 'Jack' },
        { value: 'lucy', label: 'Lucy' },
        { value: 'Yiminghe', label: 'yiminghe' },
        { value: 'disabled', label: 'Disabled', disabled: true }
      ]}
    />
  )
}

export default DropDown
