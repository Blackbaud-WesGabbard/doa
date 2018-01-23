import React from 'react'
import { Link } from 'react-router'
import { url } from 'constructicon/lib/validators'

const CustomLink = (props) => {
  const isExternalUrl = !url()(props.to)

  return isExternalUrl
    ? <a {...props} href={props.to} target='_blank' />
    : <Link {...props} />
}

export default CustomLink
