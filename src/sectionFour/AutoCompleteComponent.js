import { Autocomplete, Box, TextField } from '@mui/material'
const state = [
  'Alabama',
  'Alaska',
  'Arizona',
  'Arkansas',
  'California',
  'Colorado',
  'Connecticut',
  'Delaware',
  'Florida',
  'Georgia',
  'Hawaii',
  'Idaho',
  'Illinois',
  'Indiana',
  'Iowa',
  'Kansas',
  'Kentucky',
  'Louisiana',
  'Maine',
  'Maryland',
  'Massachusetts',
  'Michigan',
  'Minnesota',
  'Mississippi',
  'Missouri',
  'Montana',
  'Nebraska',
  'Nevada',
  'New Hampshire',
  'New Jersey',
  'New Mexico',
  'New York',
  'North Carolina',
  'North Dakota',
  'Ohio',
  'Oklahoma',
  'Oregon',
  'Pennsylvania',
  'Rhode Island',
  'South Carolina',
  'South Dakota',
  'Tennessee',
  'Texas',
  'Utah',
  'Vermont',
  'Virginia',
  'Washington',
  'West Virginia',
  'Wisconsin',
  'Wyoming',
]
const AutoCompleteComponent = () => {
  return (
    <Box>
      {/*
    => AutoComplete : - Dropdown which works on search feature.
                      - Options and Textfield needs to be provided to handle search operations.
    => Properties : - options to add options to the dropdown
                    - renderInput to handle input search
    => Additional Properties : sx.
    */}
      <Autocomplete
        sx={{ width: 300, padding: 10 }}
        options={state}
        renderInput={(params) => (
          <TextField label='List of States' {...params} />
        )}
      />
    </Box>
  )
}
export default AutoCompleteComponent
