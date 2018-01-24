import React from 'react'
import { withStyles } from 'constructicon/lib/css'
import styles from './styles'
import Link from '../Link'
import logo from '../../assets/logo.svg'

const Logo = ({
  classNames
}) => (
  <div className={classNames.wrapper}>
    <Link className={classNames.logo} to='/' target='_self' itemProp='url'>
      <img itemProp='logo' src={logo} alt='Heart Foundation MyMarathon' />
    </Link>
  </div>
)

export default withStyles(styles)(Logo)
