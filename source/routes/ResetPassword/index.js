import React from 'react'

import Page from '../../components/Page'
import ResetPasswordForm from '../../components/ResetPasswordForm'

const ResetPassword = () => (
  <Page
    heading='Reset your password'
    copy={(
      <div>
        <p>Having trouble accessing your account? Reset your <a href='https://www.everydayhero.com/au/' target='_blank'>Everydayhero</a> password.</p>
        <p>Not yet signed up? <a href='/signup'>Sign up here</a>.</p>
      </div>
    )}>
    <ResetPasswordForm />
  </Page>
)

export default ResetPassword
