import { Box, CircularProgress, LinearProgress } from '@mui/material'

const ProgressComponent = () => {
  return (
    <Box>
      {/*
    => Progress : - Displays a progress bar
                  - multiple Progress Bars => linear , Circular, Button
    => properties : variant : determinate, indeterminate
    => Additional properties : sx, value, color
    */}
      <CircularProgress variant='determinate' value={50} color='secondary' />
      <LinearProgress variant='determinate' color='success' value={50} />
    </Box>
  )
}
export default ProgressComponent
