import React from 'react'
import { withStyles } from 'constructicon/lib/css'
import Container from 'constructicon/container'
import styles from './styles'

import Link from '../Link'
import Logo from '../Logo'
import UserMenu from '../UserMenu'

class Header extends React.Component {
  render () {
    const {
      classNames,
      styles
    } = this.props

    return (
      <header className={classNames.header}>
        <Container styles={styles.container}>
          <Logo />
          <div className={classNames.navigation}>
            <nav className={classNames.menu}>
              <Link
                className={classNames.link}
                to='/about'
                activeStyle={styles.active}
                target={null}
                children='About Us'
              />
              <Link
                className={classNames.link}
                to='/faq'
                activeStyle={styles.active}
                target={null}
                children='FAQ'
              />
            </nav>
            <div className={classNames.user}>
              <UserMenu />
            </div>
          </div>
        </Container>
      </header>
    )
  }
}

export default withStyles(styles)(Header)
