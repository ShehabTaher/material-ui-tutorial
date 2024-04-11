import { Box, Button, Modal, Typography } from '@mui/material'
import { useState } from 'react'

const ModalComponent = () => {
  const [open, setOpen] = useState(false)
  return (
    <div>
      {/*
        => Modal : - Is a pop-up window that can be shown to
                     the user
                   - Has backdrop feature which blur the background when it's open
                   = requires an action to be completed and it can't be skipped
      ==> properties : open , onClose , children.
      ==> Additional properties : hideBackdrop , transition
      */}

      <Button onClick={() => setOpen(true)}>Open Modal</Button>
      <Modal open={open} onClose={() => setOpen(false)}>
        <Box
          position={'absolute'}
          top='50%'
          left='50%'
          sx={{
            background: 'white',
            width: 400,
            p: 4,
            transform: 'translate(-50%,-50%)',
            textAlign: 'center',
          }}
        >
          <Typography>It is a Modal</Typography>
          <Button variant='contained' onClick={() => setOpen(false)}>
            Close
          </Button>
        </Box>
      </Modal>
    </div>
  )
}
export default ModalComponent
