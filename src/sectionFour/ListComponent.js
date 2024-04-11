import {
  Box,
  Collapse,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
} from '@mui/material'
import { useState } from 'react'
const arr = ['Home', 'About', 'Contact']
const ListComponent = () => {
  const [open, setOpen] = useState(false)
  return (
    <Box>
      {/*
       => List : - Group of elements
                 - Have Child elements like <ListItem /> to add items to the list
       ==> properties : - divider : to add a horizontal line
                        - sx , component
      */}
      <ListItem divider>
        <ListItemButton onClick={() => setOpen(!open)}>
          <ListItemIcon>{'>'}</ListItemIcon>
          <ListItemText primary={'Expand List'} />
        </ListItemButton>
      </ListItem>
      <Collapse in={open}>
        <List sx={{ marginLeft: 25 }}>
          {arr.map((arrElm) => (
            <ListItem divider>
              <ListItemButton onClick={() => setOpen(!open)}>
                <ListItemText primary={arrElm} />
              </ListItemButton>
            </ListItem>
          ))}
        </List>
      </Collapse>
    </Box>
  )
}
export default ListComponent
