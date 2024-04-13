import { Box, Grid } from '@mui/material'

const GridComponent = () => {
  return (
    <Box>
      {/*
    => Grid : - Based on 12-Column Grid Layout
              - Used for responsive layout across different screen sizes
              - have container and items
    ==> properties : spacing and breakpoints to add spacing and columns
    ==> Additional properties : sx, columns
    */}
      <Grid container spacing={3}>
        <Grid
          sx={{ background: 'red' }}
          item
          xs={10}
          sm={6}
          md={4}
          lg={3}
          xl={2}
        >
          Item 1
        </Grid>
        <Grid
          sx={{ background: 'green' }}
          item
          xs={2}
          sm={6}
          md={4}
          lg={3}
          xl={2}
        >
          Item 2
        </Grid>
        <Grid
          sx={{ background: 'blue' }}
          item
          xs={6}
          sm={6}
          md={4}
          lg={3}
          xl={2}
        >
          Item 3
        </Grid>
        <Grid
          sx={{ background: 'yellow' }}
          item
          xs={6}
          sm={6}
          md={4}
          lg={3}
          xl={2}
        >
          Item 4
        </Grid>
        <Grid
          sx={{ background: 'orange' }}
          item
          xs={6}
          sm={6}
          md={4}
          lg={3}
          xl={2}
        >
          Item 4
        </Grid>
        <Grid
          sx={{ background: 'pink' }}
          item
          xs={6}
          sm={6}
          md={4}
          lg={3}
          xl={2}
        >
          Item 4
        </Grid>
      </Grid>
    </Box>
  )
}
export default GridComponent
