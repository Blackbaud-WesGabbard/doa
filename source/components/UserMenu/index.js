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
import LoginForm from '../LoginForm'
import Modal from 'constructicon/modal'

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
      onToggle,
      toggled,
      classNames,
      styles
    } = this.props

    return (
      <div className={classNames.links}>
        <Button
          tag={Link}
          onClick={onToggle}
          target='_self'
          background='primary'
          styles={styles.button}
          children='Login' />
        <Button
          target='_blank'
          background='tertiary'
          styles={styles.button}
          children='Donate' />
        <Modal
          isOpen={toggled}
          onRequestClose={onToggle}
          contentLabel='Login'>
          <LoginForm />
        </Modal>
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
