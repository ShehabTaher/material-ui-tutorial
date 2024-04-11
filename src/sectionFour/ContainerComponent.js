import { Container } from '@mui/material'

const ContainerComponent = () => {
  return (
    <div>
      {/*
    => Container : - center the content horizontally and
                     vertically into the webpage.
                   - Automatically adapts to screen size
    ==> properties : maxWidth, fixed for auto and manual align
    ==> Additional properties : sx, component
    */}
      <Container sx={{ background: 'red' }} maxWidth='xs'>
        This is XS
      </Container>
      <br />
      <Container sx={{ background: 'green' }} maxWidth='sm'>
        This is SM
      </Container>
      <br />
      <Container sx={{ background: 'blue' }} maxWidth='md'>
        This is md
      </Container>
      <br />
      <Container sx={{ background: 'yellow' }} maxWidth='lg'>
        This is lg
      </Container>
      <br />
      <Container sx={{ background: 'orange' }} maxWidth='xl'>
        This is xl
      </Container>
    </div>
  )
}
export default ContainerComponent
