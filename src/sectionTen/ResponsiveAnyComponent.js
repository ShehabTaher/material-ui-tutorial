import { Box } from '@mui/material'

const ResponsiveAnyComponent = () => {
  return (
    <Box
      // width={{ xs: '200px', sm: '300px', md: '500px', lg: '1000px' }}
      // height={{ xs: '200px', sm: '300px', md: '500px', lg: '1000px' }}
      width={'100%'}
      height={'100vh'}
      bgcolor={'yellow'}
    >
      {/*
    => Responsive Values - themeObject : - we can provide responsive styles
                                         - it accepts the theme responsive object to enable responsiveness
    */}
    </Box>
  )
}
export default ResponsiveAnyComponent
