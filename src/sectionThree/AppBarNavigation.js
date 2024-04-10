import { AppBar, Button, Toolbar, Typography } from '@mui/material'
import React from 'react'

const AppBarNavigation = () => {
  return (
    <div>
      {/*
    => AppBar : -Displays content and actions in the app bar at the top of the screen.
                - it is used to build navigation bar with material ui
    ==> properties : position, color, sx
    => Toolbar : -  Used to display multiple components in an app bar.
    ==> properties : sx, color
    */}
      <AppBar>
        <Toolbar>
          <Typography variant='h6'>AppBar</Typography>
          <Button
            variant='contained'
            sx={{ marginLeft: 'auto' }}
            color='warning'
          >
            Login
          </Button>
        </Toolbar>
      </AppBar>
    </div>
  )
}

export default AppBarNavigation
