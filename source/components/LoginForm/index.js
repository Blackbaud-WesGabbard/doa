import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { compose } from 'redux'
import { connect } from 'react-redux'
import { withRouter } from 'react-router'
import { withStyles } from 'constructicon/lib/css'
import styles from './styles'
import withForm from 'constructicon/with-form'
import * as validators from 'constructicon/lib/validators'

import { fetchUserPage } from '../../store/sessionPage'
import { loginUser } from '../../store/sessionUser'

import Container from 'constructicon/container'
import Form from 'constructicon/form'
import Grid from 'constructicon/grid'
import GridColumn from 'constructicon/grid-column'
import Heading from 'constructicon/heading'
import Icon from 'constructicon/icon'
import InputField from 'constructicon/input-field'
import Link from '../Link'
import Modal from 'constructicon/modal'
import RichText from 'constructicon/rich-text'

class LoginForm extends Component {
  constructor (props) {
    super(props)
    console.log('const')
    console.log(props)
    this.handleSubmit = this.handleSubmit.bind(this)
    this.state = {
      errors: [],
      serverError: '',
      errorModal: false,
      authenticated: false
    }
  }

  handleSubmit (e) {
    e.preventDefault()

    this.props.form.submit().then((data) => {
      this.props.loginUser(data).then((res) => {
        console.log(res)
      }).catch(() => {
        console.log('error')
        return this.setState({ errorModal: true })
      })
    }).catch((fields) => {
      this.setState({
        errors: [{ message: 'Please fix the errors above' }]
      })
    })
  }

  componentWillMount () {
    this.redirectIfSignedIn(this.props)
  }

  componentWillReceiveProps (nextProps) {
    this.redirectIfSignedIn(nextProps)
  }

  redirectIfSignedIn (props) {
    const { user, page, router } = props
    console.log('enter redirect')
    console.log(props)

    /* if (user.status === 'fetched') {
      if (page.status === 'fetched') {
        this.setState({ authenticated: true })
      } else if (page.status === 'failed') {
        router.push('/create-page')
      }
    } */
  }

  render () {
    const {
      user,
      page,
      styles,
      form
    } = this.props

    const {
      errors,
      serverError,
      errorModal,
      authenticated
    } = this.state

    // const isLoading = [user.status, page.status].indexOf('fetching') > -1

    const isLoading = false

    return (
      <Container>
        <Grid spacing={1}>
          <GridColumn styles={styles.column} md={6}>
            <Heading tag='h3' styles={styles.heading}>or login with email</Heading>
            <Form
              onSubmit={this.handleSubmit}
              errors={(form.invalid || serverError) ? errors : []}
              isDisabled={form.invalid}
              isLoading={isLoading}
              submit='Log in'
              styles={styles.form}
              noValidate
              footer={(
                <RichText styles={styles.footer}>
                  <p>
                    <Link to='/reset-password'>Forgot your password?</Link>
                  </p>
                </RichText>
              )}>
              <InputField {...form.fields.email} />
              <InputField {...form.fields.password} />
            </Form>
          </GridColumn>
        </Grid>
        <Modal
          width={18}
          isOpen={errorModal}
          centred
          contentLabel='An error has occured'
          onRequestClose={(e) => this.setState({ errorModal: false })}>
          <Icon name='warning' size={3} color='primary' />
          <RichText styles={styles.errorModal}>
            <p><strong>Invalid Email or Password.</strong></p>
            <p><Link to='/reset-password'>Reset your password?</Link></p>
          </RichText>
        </Modal>
      </Container>
    )
  }
}

LoginForm.propTypes = {
  router: PropTypes.shape({
    push: PropTypes.func.isRequired
  }).isRequired
}

const form = {
  fields: {
    email: {
      label: 'Email',
      type: 'email',
      validators: [
        validators.required('Email is a required field'),
        validators.email('Must be a valid email')
      ]
    },
    password: {
      label: 'Password',
      type: 'password',
      validators: [
        validators.required('Password is a required field'),
        validators.greaterThan(2, 'Please enter a valid password')
      ]
    }
  }
}

const mapStateToProps = ({ sessionUser, sessionPage }) => ({
  user: sessionUser,
  page: sessionPage
})

const mapDispatchToProps = { loginUser, fetchUserPage }

export default compose(
  connect(mapStateToProps, mapDispatchToProps),
  withRouter,
  withStyles(styles),
  withForm(form)
)(LoginForm)
