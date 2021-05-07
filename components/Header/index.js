import Link from 'next/link'

import styles from './Header.module.css'
import logo from './logo.png'

const Header = () => (
  <header className={styles.header}>
    <div className={styles.headerInner}>
      <Link href="/">
        <a>
          <img className={styles.logo} src={logo} width="10" alt="" />
        </a>
      </Link>
      {/* <nav className={styles.nav}>
        <a href="mailto:siddharthosinha@gmail.com">email</a>
      </nav> */}
    </div>
  </header>
)

export default Header
