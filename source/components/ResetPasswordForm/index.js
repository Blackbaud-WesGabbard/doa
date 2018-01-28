import React, { Component } from 'react'
import { compose } from 'redux'
import { connect } from 'react-redux'
import withForm from 'constructicon/with-form'
import * as validators from 'constructicon/lib/validators'
import { withStyles } from 'constructicon/lib/css'
import styles from './styles'

import { resetUserPassword } from '../../store/sessionUser'

import Container from 'constructicon/container'
import Form from 'constructicon/form'
import InputField from 'constructicon/input-field'

class ResetPasswordForm extends Component {
  constructor (props) {
    super(props)
    this.handleSubmit = this.handleSubmit.bind(this)
    this.state = {
      errors: [],
      serverError: '',
      sent: false
    }
  }

  handleSubmit (e) {
    e.preventDefault()

    this.props.form.submit().then((data) => {
      this.props.resetUserPassword(data).then((res) => {
        this.setState({ sent: true })
      }).catch((error) => {
        if (error.response && error.response.status) {
          this.setState({
            serverError: true,
            errors: [{ message: 'Invalid Email' }]
          })
        } else {
          throw error
        }
      })
    }).catch((fields) => {
      this.setState({
        errors: [{ message: 'Please fix the errors above' }]
      })
    })
  }

  render () {
    const {
      user,
      form,
      styles
    } = this.props

    const {
      errors,
      serverError,
      sent
    } = this.state

    const isLoading = user.status === 'fetching'

    return (
      <Container width={16} spacing={0}>
        <Form
          onSubmit={this.handleSubmit}
          errors={(form.invalid || serverError) ? errors : []}
          isDisabled={form.invalid}
          isLoading={isLoading}
          submit={sent ? 'Email sent!' : 'Send instructions'}
          styles={styles.form}
          noValidate
        >
          <InputField {...form.fields.email} />
        </Form>
      </Container>
    )
  }
}

const mapStateToProps = ({ sessionUser }) => ({ user: sessionUser })
const mapDispatchToProps = { resetUserPassword }

const form = {
  fields: {
    email: {
      label: 'Email',
      type: 'email',
      validators: [
        validators.required('Email is a required field'),
        validators.email('Must be a valid email')
      ]
    }
  }
}

export default compose(
  connect(mapStateToProps, mapDispatchToProps),
  withStyles(styles),
  withForm(form)
)(ResetPasswordForm)
