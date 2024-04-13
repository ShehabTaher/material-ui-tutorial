import {
  Drawer,
  IconButton,
  List,
  ListItemButton,
  ListItemText,
} from '@mui/material'
import { useState } from 'react'
import MenuRoundedIcon from '@mui/icons-material/MenuRounded'

const DrawerComponent = ({ links }) => {
  const [open, setOpen] = useState(false)
  return (
    <>
      <Drawer
        PaperProps={{
          sx: {
            background: 'rgba(9, 9, 121, 1)',
          },
        }}
        open={open}
        onClose={() => setOpen(false)}
      >
        <List>
          {links.map((link) => (
            <ListItemButton onClick={() => setOpen(false)} key={link} divider>
              <ListItemText sx={{ color: 'white' }}>{link}</ListItemText>
            </ListItemButton>
          ))}
        </List>
      </Drawer>
      <IconButton
        sx={{ marginLeft: 'auto', color: 'white' }}
        onClick={() => setOpen(!open)}
      >
        <MenuRoundedIcon />
      </IconButton>
    </>
  )
}
export default DrawerComponent
