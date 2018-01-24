import React from 'react'
import { connect } from 'react-redux'
import { compose } from 'redux'
import { withStyles } from 'constructicon/lib/css'
import styles from './styles'

import Container from 'constructicon/container'
import Logo from '../Logo'

const Footer = ({
  classNames,
  styles
}) => (
  <div className={classNames.root}>
    <footer id='footer' className={classNames.footer}>
      <Container styles={styles.container}>
        <Logo styles={styles.logo} />
      </Container>
    </footer>
  </div>
)

const mapStateToProps = () => ({ })

export default compose(
  connect(mapStateToProps),
  withStyles(styles)
)(Footer)
