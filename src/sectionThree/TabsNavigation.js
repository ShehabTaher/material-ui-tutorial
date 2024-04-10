import { AppBar, Tab, Tabs, Toolbar } from '@mui/material'
import React, { useState } from 'react'

const TabsNavigation = () => {
  const [value, setValue] = useState(0)
  return (
    <div>
      {/*
  => Tabs : -  Helps users switch between different views and navigate between them.
            -  is container of child <Tab/> components
  ==> properties : value, onChange, sx
*/}
      <AppBar>
        <Toolbar>
          <Tabs
            indicatorColor='secondary'
            textColor='inherit'
            value={value}
            onChange={(e, value) => setValue(value)}
          >
            <Tab label='Tab 1'></Tab>
            <Tab label='Tab 2'></Tab>
            <Tab label='Tab 3'></Tab>
          </Tabs>
        </Toolbar>
      </AppBar>
    </div>
  )
}

export default TabsNavigation
