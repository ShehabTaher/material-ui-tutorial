import { Link } from '@mui/material'

const LinkComponent = () => {
  return (
    <div>
      {/*
    => Link : - are used to navigate to other pages
              - almost same like the HTML anchor tag
    ==> properties : href , underline
    ==> Additional properties : component, color, sx
    */}
      <Link
        variant='h4'
        color='secondary'
        href='https://mui.com/material-ui/react-link/'
        underline='none'
      >
        Visit Google
      </Link>
    </div>
  )
}
export default LinkComponent
