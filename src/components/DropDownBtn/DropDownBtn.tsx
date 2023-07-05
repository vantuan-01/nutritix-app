import styles from './DropDownBtn.module.scss'

interface DropDownProps {
  value?: any
}

function DropDown({ value }: DropDownProps) {
  return (
    <div className={styles.dropDown_form}>
      <select name='' id=''>
        <option value='gsdf'>asdas</option>
        <option value='gsdf'>asdasadas</option>
        <option value='gsdf'>asdfgas</option>
      </select>
    </div>
  )
}

export default DropDown
