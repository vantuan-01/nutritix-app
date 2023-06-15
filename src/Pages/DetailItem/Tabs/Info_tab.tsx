import styles from '../DetailItem.module.scss'

function Info_tab() {
  return (
    <div className={styles.info_tab}>
      <table>
        <tr>
          <th>weight</th>
          <td>168 kg</td>
        </tr>
        <tr>
          <th>Dimensions</th>
          <td>98 × 22 × 145 cm</td>
        </tr>
      </table>
    </div>
  )
}

export default Info_tab
