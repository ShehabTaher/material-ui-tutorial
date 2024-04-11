import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
} from '@mui/material'
import { useState } from 'react'

const DialogComponent = () => {
  const [open, setOpen] = useState(false)
  return (
    <div>
      {/*
    => Dialog : - A dialog is a modal window that appears in front of app content
                  to provide critical information or prompt for a user action.
                - Has backdrop feature which blur t
                  he background  when it's open
                = To get a confirmation message or a permission which can be skipped
    ==> properties : open , onClose , children.
    ==> Additional properties : hideBackdrop , transition
    */}
      <Button onClick={() => setOpen(true)}>Open Dialog</Button>
      <Dialog open={open} onClose={() => setOpen(false)}>
        <DialogTitle>Dialog</DialogTitle>
        <DialogContent>
          <DialogContentText>lorem</DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={() => setOpen(false)}>Cancel</Button>
          <Button onClick={() => setOpen(false)}>Agree</Button>
        </DialogActions>
      </Dialog>
    </div>
  )
}
export default DialogComponent
