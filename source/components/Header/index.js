import React from 'react'
import { withStyles } from 'constructicon/lib/css'
import styles from './styles'

import Container from 'constructicon/container'
import Link from '../Link'

class Header extends React.Component {
  render () {
    const {
      container = {},
      classNames,
      styles
    } = this.props

    console.log(this.props)

    const { nav = [] } = container

    return (
      <header className={classNames.header}>
        <Container styles={styles.container}>
          Masthead starts here
          <div className={classNames.navigation}>
            <nav className={classNames.menu}>
              {nav.map(({ link, label }, index) => (
                <Link
                  key={index}
                  className={classNames.link}
                  to={link}
                  activeStyle={styles.active}
                  target={null}
                  children={label}
                />
              ))}
            </nav>
          </div>
        </Container>
      </header>
    )
  }
}

export default withStyles(styles)(Header)
