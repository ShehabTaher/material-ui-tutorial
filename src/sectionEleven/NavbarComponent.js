import {
  AppBar,
  Box,
  Button,
  Grid,
  Tab,
  Tabs,
  Toolbar,
  Typography,
  useTheme,
  useMediaQuery,
} from '@mui/material'
import ShoppingCartCheckoutIcon from '@mui/icons-material/ShoppingCartCheckout'
import { useState } from 'react'
import DrawerComponent from './DrawerComponent'

const linksArray = ['Products', 'Overview', 'Pricing', 'Contact us']
const NavbarComponent = () => {
  const theme = useTheme()
  const isMobile = useMediaQuery(theme.breakpoints.down('md'))
  const [value, setValue] = useState()
  return (
    <AppBar
      sx={{
        backgroundImage:
          'linear-gradient(90deg, rgba(2,0,36,1) 0%, rgba(9,9,121,1) 14%, rgba(0,212,255,1) 100%);',
      }}
    >
      <Toolbar>
        {isMobile ? (
          <DrawerComponent links={linksArray} />
        ) : (
          <Grid container spacing={1} sx={{ alignItems: 'center' }}>
            <Grid item xs={2}>
              <ShoppingCartCheckoutIcon />
            </Grid>
            <Grid item xs={6}>
              <Tabs
                indicatorColor='secondary'
                textColor='inherit'
                value={value}
                onChange={(e, value) => setValue(value)}
              >
                {linksArray.map((link) => (
                  <Tab key={link} label={link} />
                ))}
              </Tabs>
            </Grid>
            <Grid item xs={1} />
            <Grid item xs={3}>
              <Box display={'flex'}>
                <Button
                  sx={{ marginLeft: 'auto', background: 'rgba(180,58,58,1)' }}
                  variant='contained'
                >
                  Login
                </Button>
                <Button
                  sx={{ marginLeft: 1, background: 'rgba(180,58,58,1)' }}
                  variant='contained'
                >
                  signup
                </Button>
              </Box>
            </Grid>
          </Grid>
        )}
      </Toolbar>
    </AppBar>
  )
}
export default NavbarComponent
