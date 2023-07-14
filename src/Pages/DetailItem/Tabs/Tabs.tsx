import Description_tab from './Description_tab'
import Info_tab from './Info_tab'
import Review_tab from './Review_tab'
import styles from '../DetailItem.module.scss'
import { useState } from 'react'

function Tabs({ itemInfo }: any) {
  const [tabname, setTabname] = useState('des')
  const chosenTab = () => {
    switch (tabname) {
      case 'des':
        return <Description_tab des={itemInfo.description} />
        break
      case 'info':
        return <Info_tab info={itemInfo.ingredients} />
        break
      case 'rev':
        return <Review_tab />
        break
      default:
        return <Description_tab des={itemInfo.description} />
        break
    }
  }

  const tabs = [
    {
      code: 'des',
      name: 'description',
      comp: <Description_tab />
    },
    {
      code: 'info',
      name: 'addtional information',
      comp: <Info_tab />
    },
    {
      code: 'rev',
      name: 'reviews',
      comp: <Review_tab />
    }
  ]

  return (
    <div className={styles.tabs}>
      <div className={styles.tabs_header}>
        {tabs.map((tab, key) => (
          <button
            className={`${tabname === tab.code && styles.active_btn}`}
            key={key}
            onClick={() => setTabname(tab.code)}
          >
            {tab.name}
          </button>
        ))}
      </div>
      <div className={styles.tabs_body}>{chosenTab()}</div>
    </div>
  )
}

export default Tabs
