import {
  Box,
  Button,
  Drawer,
  List,
  ListItemButton,
  ListItemText,
} from '@mui/material'
import { useState } from 'react'
const arr = ['Home', 'About', 'Contact']
const DrawerComponent = () => {
  const [open, setOpen] = useState(false)
  return (
    <Box>
      {/*
  => Drawer : - are opened for any navigation inside the application.
              - they can be opened from left, right, top or bottom.
  ==> properties : anchor, open, onClose
  ==> Additional properties : sx.
*/}
      <Button onClick={() => setOpen(true)}>Open Drawer</Button>
      <Drawer open={open} anchor='right' onClose={() => setOpen(false)}>
        <List>
          {arr.map((arrElm) => (
            <ListItemButton onClick={() => setOpen(false)}>
              <ListItemText primary={arrElm} />
            </ListItemButton>
          ))}
        </List>
      </Drawer>
    </Box>
  )
}
export default DrawerComponent
