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
    this.openModal = this.openModal.bind(this)
    this.closeModal = this.closeModal.bind(this)

    this.state = {
      loginModal: false
    }
  }

  componentWillReceiveProps (nextProps) {
    const { user } = nextProps
    if (user && user.token) {
      this.setState({ loginModal: false })
    }
  }

  logout () {
    const router = this.props.router
    this.props.clearSession()
    this.props.onToggleOff()
    router.push('/')
  }

  openModal () {
    this.setState({ loginModal: true })
  }

  closeModal () {
    this.setState({ loginModal: false })
  }

  render () {
    const {
      user,
      classNames,
      styles
    } = this.props

    return (
      <div>
        <div className={classNames.links}>
          {user.token ? (
            <Button
              tag={Link}
              onClick={this.logout}
              target='_self'
              background='primary'
              styles={styles.button}
              children='Logout' />
          ) : (
            <Button
              tag={Link}
              onClick={this.openModal}
              target='_self'
              background='primary'
              styles={styles.button}
              children='Login' />
          )}
          <Button
            target='_blank'
            background='tertiary'
            styles={styles.button}
            children='Donate' />
        </div>
        <Modal
          isOpen={this.state.loginModal}
          onRequestClose={this.closeModal}
          contentLabel='Login'>
          <LoginForm />
        </Modal>
      </div>
    )
  }
}

const mapStateToProps = ({ sessionUser, sessionPage }) => ({
  user: sessionUser,
  page: sessionPage
})

const mapDispatchToProps = { clearSession }

export default compose(
  connect(mapStateToProps, mapDispatchToProps),
  withToggle,
  withRouter,
  withStyles(styles)
)(UserMenu)
