import React from 'react'
import './App.css'
import Header from './header.component'
// import MaydayCard from './components/atoms/cardComponents/maydayCard.component'
import Typography from '@mui/joy/Typography';
import Grid from '@mui/material/Grid2';
import ReusableCard from './components/atoms/cardComponent/reusableCard.component';

// import pcwImagery from './components/atoms/cardComponents/assets/PCWScreenshot.png';
// import fleetImagery from './components/atoms/cardComponents/assets/FleetScreenshot.png';
// import maydayImagery from './components/atoms/cardComponents/assets/MaydayScreenshot.png';
// import euroImagery from './components/atoms/cardComponents/assets/EuroScreenshot.png';
// import pcseImagery from './components/atoms/cardComponents/assets/PCSEScreenshot.png';
// import barnetImagery from './components/atoms/cardComponents/assets/BarnetScreenshot.png';

import { StyledEngineProvider } from '@mui/material/styles'

function App() {

  return (
    <>
      <StyledEngineProvider injectFirst>
        <Header />
        {/* ToDo: Welcome section here */}
        <div style={{ backgroundColor: '#1B7A61', padding: '1rem'}}>
          <Grid container>
            <Grid size={{ xs: 1 }}></Grid>
            <Grid size={{ xs: 10}}>
              <Typography sx={{ paddingBottom: '2rem' }}>
                What I've been working on recently
              </Typography>
            </Grid>
          </Grid>
          <Grid container spacing={2} sx={{ paddingTop: '2rem'}}>
            <Grid size={{ xs: 12, md: 4 }}>
              <ReusableCard 
                // imagery={euroImagery}
                companyTitle={'Direct Line Group'}
                siteName={'Euro'}
                imageAltText='Euro.Greenflag.com website'
                hasLinks={true}
                siteLink='https://euro.greenflag.com/'
                technologyUsed={'React | MUI | Worldpay | Pulse | AWS'}
              />
            </Grid>
            <Grid size={{ xs: 12, md: 4 }}>
              <ReusableCard 
                // imagery={maydayImagery}
                companyTitle='Direct Line Group'
                siteName='Mayday'
                imageAltText='Mayday.Greenflag.com website'
                hasLinks={true}
                siteLink='https://mayday.greenflag.com/'
                technologyUsed='React | MUI | Worldpay | Pulse | AWS'
              />
            </Grid>
            <Grid size={{ xs: 12, md: 4}}>
              <ReusableCard 
                // imagery={fleetImagery}
                companyTitle='Direct Line Group'
                siteName='Fleet (Coming soon)'
                imageAltText='Fleet.Greenflag.com website'
                technologyUsed='React | MUI | Worldpay | Pulse | AWS'
              />
            </Grid>
          </Grid>
          <Grid container spacing={2} sx={{ paddingTop: '2rem'}}>
            <Grid size={{ xs: 12, md: 4 }}>
              <ReusableCard 
                // imagery={pcwImagery}
                companyTitle='Direct Line Group'
                siteName='PCW (Only reachable through comparison creators)'
                imageAltText='Quote.Greenflag.com website'
                technologyUsed='React | MUI | Worldpay | Pulse | AWS'
              />
            </Grid>
            <Grid size={{ xs: 12, md: 4 }}>
              <ReusableCard 
                // imagery={barnetImagery}
                companyTitle='Barnet Council'
                siteName='Barnet'
                imageAltText='Barnet.gov.uk website'
                hasLinks={true}
                siteLink='https://barnet.gov.uk'
                technologyUsed='Drupal | AWS'
              />
            </Grid>
            <Grid size={{ xs: 12, md: 4 }}>
              <ReusableCard 
                // imagery={pcseImagery}
                companyTitle='Primary Care Support England'
                siteName='PCSE'
                imageAltText='pcse.england.nhs.uk website'
                hasLinks={true}
                siteLink='https://pcse.england.nhs.uk/'
                technologyUsed='Drupal | AWS'
              />
            </Grid>
          </Grid>
        </div>
      </StyledEngineProvider>
      
      
      {/* want to render header component and footer here, then 'children' between */}
      
      {/* About me section, linkedin link, github link also */}
      {/* Want a section for assets displaying personal accomplishments, current hobbies etc including hyrox training to challenge myself */}
      {/* Section dispalying client work & links off to sites */}

      {/* Footer Here */}
    </>
  )
}

export default App
