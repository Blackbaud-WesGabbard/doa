import React, { Component } from 'react'
import { connect } from 'react-redux'
import { compose } from 'redux'
import { withRouter } from 'react-router'
import withToggle from 'constructicon/with-toggle'
import { withStyles } from 'constructicon/lib/css'
import styles from './styles'
import { clearSession } from '../../store/sessionUser'

import Button from 'constructicon/button'
import Link from '../Link'

class UserMenu extends Component {
  constructor (props) {
    super(props)
    this.logout = this.logout.bind(this)
  }

  logout () {
    const router = this.props.router
    this.props.clearSession()
    this.props.onToggleOff()
    router.push('/')
  }

  render () {
    const {
      classNames,
      styles
    } = this.props

    return (
      <div className={classNames.links}>
        <Button
          tag={Link}
          to='/login'
          target='_self'
          background='primary'
          styles={styles.button}
          children='Login' />
        <Button
          target='_blank'
          background='tertiary'
          styles={styles.button}
          children='Donate' />
      </div>
    )
  }
}

const mapStateToProps = () => ({})

const mapDispatchToProps = { clearSession }

export default compose(
  connect(mapStateToProps, mapDispatchToProps),
  withToggle,
  withRouter,
  withStyles(styles)
)(UserMenu)
