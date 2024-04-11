import { Alert, Box } from '@mui/material'
import { useState } from 'react'

const AlertComponent = () => {
  const [show, setShow] = useState(true)
  return (
    <Box>
      {/*
    => Alert : - Displays an alert popup window with short messages
               - Built on javascript Alert window with pre defined styles
    => properties : severity, variant : to style the alert
    => Additional properties : sx, onClose, icon
    */}
      {show && (
        <Alert onClose={() => setShow(false)} severity='error'>
          This is an Error Alert
        </Alert>
      )}
      <Alert onClose={() => {}} severity='info'>
        This is an info Alert
      </Alert>
    </Box>
  )
}
export default AlertComponent
