'use client'

import styles from '@/styles/components/toggle.module.css'
import { useContext } from 'react'
import { Context } from '@/context/Context'

const Toggle = () => {
  const { toggle } = useContext(Context)

  return (
    <div className={styles.toggle}>
      <div className={styles.icon} onClick={() => toggle('dark')}>☀</div>
    </div>
  )
}

export default Toggle
