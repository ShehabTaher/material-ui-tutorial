import {
  Button,
  Card,
  CardActionArea,
  CardActions,
  CardContent,
  CardMedia,
  Typography,
} from '@mui/material'

const CardComponent = () => {
  return (
    <div>
      {/*
  => Card : - A surface that displays content and actions on single topic.
            - Can be Images , Text , Heading , Actions , etc
  ==> properties : - maxWidth to define max width of card.
                   - sx , classes
*/}

      <Card sx={{ maxWidth: 500 }}>
        <CardActionArea>
          <CardMedia
            component='img'
            height='140'
            image='https://encrypted-tbn3.gstatic.com/licensed-image?q=tbn:ANd9GcQFBUFDb_UoVG6XTpwqe7hzf7cvC_wXZkGhB4_ox11CJnyHR54BlT5qkz0NfoXVzVgVLAjW3BHRuU4Lbnw'
            alt='green iguana'
          />
          <CardContent>
            <Typography gutterBottom variant='h5' component='div'>
              Lizard
            </Typography>
            <Typography variant='body2' color='text.secondary'>
              Lizards are a widespread group of squamate reptiles, with over
              6,000 species, ranging across all continents except Antarctica
            </Typography>
          </CardContent>
        </CardActionArea>
        <CardActions>
          <Button size='small' color='primary'>
            Share
          </Button>
          <Button size='small' color='primary'>
            save
          </Button>
        </CardActions>
      </Card>
    </div>
  )
}
export default CardComponent
