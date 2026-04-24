import React from 'react'
import styles from './Header.module.css'

const Header = () => {
  return (
    <div className={styles.hdr}>
      this is header
      <div className={styles.btn}>
        login
      </div>
    </div>
  )
}

export default Header
