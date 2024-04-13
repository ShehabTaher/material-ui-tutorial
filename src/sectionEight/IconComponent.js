import AccountCircleIcon from '@mui/icons-material/AccountCircle'
import ArrowCircleDownIcon from '@mui/icons-material/ArrowCircleDown'
import { AppBar, Box, IconButton, Toolbar } from '@mui/material'
const IconComponent = () => {
  return (
    <Box>
      {/*
       => Icons : - used to display SVG icons into webpage
                  - can have IconButton for Button effect inside icons
       ==> properties : - Color , size : to add colors and sizes
       ==> Additional properties : - sx
       ---------------------------------------------------------------------
       => IconButton : - used for Icons to add a Button Effect in Icons
                       - Supports all button properties
       ==> properties : - onClick , Color
       ==> Additional properties : - sx
      */}
      <AppBar color='success'>
        <Toolbar>
          <IconButton onClick={() => alert('clicked')}>
            <AccountCircleIcon />
          </IconButton>
          <IconButton>
            <ArrowCircleDownIcon />
          </IconButton>
        </Toolbar>
      </AppBar>
    </Box>
  )
}
export default IconComponent
