import { Box, Typography, useTheme } from '@mui/material'

const ThemeProviderComponent = () => {
  const theme = useTheme()
  console.log(theme)
  return (
    <Box>
      {/*
    => Theme Provider : - used to modify current theme.
                        - Child components needs to be wrapped inside it.
                        - you can access current theme by using useTheme().
    ==> properties : theme : to refer modified theme
    */}
      <Typography variant='h1' color='primary'>
        Shehab
      </Typography>
    </Box>
  )
}
export default ThemeProviderComponent
