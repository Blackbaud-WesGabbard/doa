import React from 'react'
import { withStyles } from 'constructicon/lib/css'
import styles from './styles'

const Root = ({
  classNames,
  styles,
  children
}) => (
  <div className={classNames.root}>
    {children}
  </div>
)

export default withStyles(styles)(Root)
