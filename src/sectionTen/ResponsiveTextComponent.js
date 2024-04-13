import { Box, Typography } from '@mui/material'

const ResponsiveTextComponent = () => {
  return (
    <Box>
      {/*
    => Responsive Values: - The Responsive Styles comes from theme object to every component of MUI
                          - we can give various responsive styles numbers, like we do in the theme objects.
                          - Note: you need to provide values for all screens (xs, sm, md, lg, xl).
    => Responsive Text - Typography : - we can provide responsive fontSize
                                      - it accepts the theme responsive object to enable responsiveness
    */}
      <Typography
        fontSize={{ xs: '1rem', sm: '1.5rem', md: '2rem' }}
        variant='h1'
      >
        h1. Heading
      </Typography>
    </Box>
  )
}
export default ResponsiveTextComponent
