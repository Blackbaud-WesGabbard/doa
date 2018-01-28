import React from 'react'
import { withStyles } from 'constructicon/lib/css'
import styles from './styles'

import Container from 'constructicon/container'
import Footer from '../Footer'
import Header from '../Header'
import Heading from 'constructicon/heading'
import Helmet from 'react-helmet'
import RichText from 'constructicon/rich-text'

const Page = ({
  width,
  title,
  heading,
  copy,
  classNames,
  styles,
  children
}) => (
  <div>
    <Helmet title={title} />
    <Header />
    <main className={classNames.main}>
      <Container width={width} spacing={{ y: 2, x: 1.5 }}>
        {heading && <Heading tag='h1' styles={styles.heading}>{heading}</Heading>}
        {copy && <RichText styles={styles.copy}>{copy}</RichText>}
        {children}
      </Container>
    </main>
    <Footer showHero={false} />
  </div>
)

Page.defaultProps = {
  width: 28
}

export default withStyles(styles)(Page)
