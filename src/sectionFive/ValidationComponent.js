import { useForm } from 'react-hook-form'
import TextField from '@mui/material/TextField'
import { Button, Typography } from '@mui/material'
const ValidationComponent = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm()
  console.log({ errors })
  return (
    <div>
      {/*
      => Validation : - with Regex, custom functions
                      - error, helperText: prop in TextField
                      - React Hook Form
      */}
      <form
        style={{
          display: 'flex',
          flexDirection: 'column',
          width: '500px',
          gap: '10px',
          border: '1px solid black',
          padding: '10px',
          margin: 'auto',
        }}
        onSubmit={handleSubmit((data) => console.log(data))}
      >
        <TextField
          error={Boolean(errors.email)}
          helperText={
            Boolean(errors.email) ? (
              <Typography color='error'>Invalid Email</Typography>
            ) : null
          }
          {...register('email', {
            validate: (val) =>
              /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(val),
            required: true,
          })}
        />
        <TextField
          type='password'
          {...register('password', { minLength: 6, required: true })}
          error={Boolean(errors.password)}
          helperText={
            Boolean(errors.password) ? (
              <Typography color='error'>Minimum Length should be 6</Typography>
            ) : null
          }
        />
        <Button
          disabled={Boolean(errors.email) || Boolean(errors.password)}
          variant='contained'
          type='submit'
        >
          Submit
        </Button>
      </form>
    </div>
  )
}
export default ValidationComponent
