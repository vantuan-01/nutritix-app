import { Select, Space } from 'antd'

import styles from './DropDownBtn.module.scss'

interface DropDownProps {
  value?: any
}

function DropDown({ value }: DropDownProps) {
  const renderOptions = () => {
    if (value) {
      const options = []
      for (const i in value) {
        options.unshift({ value: value[i].flavorName, label: value[i].flavorName })
      }
      return options
    } else if (!value) {
      return
    }
  }

  return (
    <Select
      size='large'
      defaultValue={value && value.length !== 0 ? value[0].flavorName : 'No Flavor'}
      disabled={value.length === 0 && true}
      style={{ width: '100%', height: '100%' }}
      options={renderOptions()}
    />
  )
}

export default DropDown
