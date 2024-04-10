import { Menu, MenuItem } from '@mui/material'
import { Button } from '@mui/material'
import { useState } from 'react'

const MenuAndMenuItem = () => {
  const [anchorElm, setAnchorElm] = useState(null)
  const [open, setOpen] = useState(false)
  const handleClose = () => {
    setOpen(false)
    setAnchorElm(null)
  }
  const handleClick = (e) => {
    setAnchorElm(e.currentTarget)
    setOpen(true)
  }
  return (
    <div>
      {/*
  => Menu : -  Used to display a list of options to select.
            -  is container of child <MenuItem/> components.
  ==> properties : - anchorEl is set anchor position of menu
                   - Additional properties: MenuListProps, open, onClose, sx
*/}
      <Button
        onClick={handleClick}
        sx={{ margin: 3 }}
        size='large'
        variant='contained'
      >
        Menu
      </Button>
      <Button
        color='error'
        sx={{ margin: 3 }}
        size='medium'
        variant='outlined'
        onClick={handleClick}
      >
        Open Menu Again
      </Button>
      <Menu anchorEl={anchorElm} open={open} onClose={handleClose}>
        <MenuItem onClick={handleClose}>Item 1</MenuItem>
        <MenuItem onClick={handleClose}>Item 2</MenuItem>
        <MenuItem onClick={handleClose}>Item 3</MenuItem>
      </Menu>
    </div>
  )
}
export default MenuAndMenuItem
