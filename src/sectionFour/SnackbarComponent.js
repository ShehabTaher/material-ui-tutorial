import { Alert, Box, Snackbar } from '@mui/material'
import { useState } from 'react'

const SnackbarComponent = () => {
  const [open, setOpen] = useState(true)
  return (
    <Box>
      {/*
    => Snackbar : - Displays short notification messages
                  - Can wrap Alert inside it for more styles
    => properties : open, message : to open and add message
    => Additional properties : onClose , autoHide
    */}
      <Snackbar
        message='This is a snackbar'
        open={open}
        onClose={() => setOpen(false)}
        autoHideDuration={3000}
      >
        <Alert severity='success'>This is a Success Alert</Alert>
      </Snackbar>
    </Box>
  )
}
export default SnackbarComponent
