import React from 'react'
import { withStyles } from 'constructicon/lib/css'
import styles from './styles'

import Heading from 'constructicon/heading'
import Grid from 'constructicon/grid'
import GridColumn from 'constructicon/grid-column'

import TotalDonations from 'supporticon/components/total-donations'
import TotalDistance from 'supporticon/components/total-distance'
import TotalFundsRaised from 'supporticon/components/total-funds-raised'
import TotalSupporters from 'supporticon/components/total-supporters'

const CampaignData = ({
  styles,
  classNames
}) => (
  <div className={classNames.container}>
    <Heading
      children='Our Impact'
      styles={styles.title}
    />
    <Grid spacing={{ y: 1 }} justify='center'>
      <GridColumn md={3} sm={12}>
        <TotalDonations
          campaign={process.env.CAMPAIGN_UID}
          label='# of Donations'
        />
      </GridColumn>
      <GridColumn md={3} sm={12}>
        <TotalFundsRaised
          campaign={process.env.CAMPAIGN_UID}
          label='$ Donations'
        />
      </GridColumn>
      <GridColumn md={3} sm={12}>
        <TotalSupporters
          campaign={process.env.CAMPAIGN_UID}
          label='# Supporters'
        />
      </GridColumn>
      <GridColumn md={3} sm={12}>
        <TotalDistance
          campaign={process.env.CAMPAIGN_UID}
          label='Total Distance'
        />
      </GridColumn>
    </Grid>
  </div>
)

export default withStyles(styles)(CampaignData)
