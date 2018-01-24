import React from 'react'
import { withStyles } from 'constructicon/lib/css'
import styles from './styles'

import Container from 'constructicon/container'
import Heading from 'constructicon/heading'
import { PrismicRichText } from 'prismic-utils'

const Hero = ({
  banner = [],
  heading = [],
  bgColor,
  classNames,
  styles,
  children
}) => (
  <div className={classNames.hero}>
    <div className={classNames.wrapper}>
      <Container styles={styles.container}>
        <Heading tag='h2' styles={styles.title}>
          <PrismicRichText>{heading}</PrismicRichText>
        </Heading>
        {children}
      </Container>
    </div>
  </div>
)

Hero.defaultProps = {
  bgColor: 'transparent'
}

export default withStyles(styles)(Hero)
