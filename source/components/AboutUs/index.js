import React from 'react'
import Grid from 'constructicon/grid'
import GridColumn from 'constructicon/grid-column'
import Heading from 'constructicon/heading'
import { PrismicRichText } from 'prismic-utils'
import RichText from 'constructicon/rich-text'

const AboutUs = ({
  /* these are child props on the home obj that is spread into this componenet, but need to set as blank so they are not undefined durng the lifecylce, this preventing error */
  about = [],
  people = []
}) => {
  return (
    <div>
      <Heading tag='h2'>
        {about.title}
      </Heading>
      {about.content && (
        <RichText>
          <PrismicRichText>{about.content}</PrismicRichText>
        </RichText>
      )}
      <Grid>
        {people.map(({ image, title }, index) =>
          <GridColumn sm={4}
            key={index}
          >
            {title[0].text}
            {/* below is other way to do this using prismic utils, this will reduce the array and render html dom with each prop in array. for example it takes the type prop (h3) and redners the text prop as an h3 elem */}
            <RichText>
              <PrismicRichText>{title}</PrismicRichText>
            </RichText>
            <img src={image.url} alt={image.alt} />
          </GridColumn>
        )}
      </Grid>
    </div>
  )
}

export default AboutUs
