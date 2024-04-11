import { Box, Rating, Typography } from '@mui/material'
import { useState } from 'react'

const RatingComponent = () => {
  const [value, setValue] = useState()
  return (
    <Box>
      {/*
    => Rating : - used to display ratings on a webpage.
                - can be used on products, blogs, images, etc.
    ==> properties : value, onChange : to set value and handle change
    ==> Additional properties : precision, defaultValue, sx
    */}
      <Rating
        precision={0.1}
        defaultValue={2.5}
        size='large'
        value={value}
        onChange={(e) => setValue(e.target.value)}
      />
      <Typography>
        Rating : {value !== undefined ? value : '0'} stars
      </Typography>
    </Box>
  )
}
export default RatingComponent
