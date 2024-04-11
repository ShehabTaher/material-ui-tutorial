import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Box,
  Typography,
} from '@mui/material'
import { useState } from 'react'

const AccordionComponent = () => {
  const [accordion, setAccordion] = useState('')
  return (
    <Box>
      {/*
    Accordion : - is used to create a collapsible section that can be expanded and collapsed.
                - Have child elements like Summary , Description , Icon to add Information.
    ==> properties : - onChange : to open only 1 accordion
    ==> Additional properties : sx , square
    */}
      <Accordion
        expanded={accordion === '1'}
        onChange={() => setAccordion('1')}
      >
        <AccordionSummary expandIcon={'▼'}>
          <Typography>Accordion 1</Typography>
        </AccordionSummary>
        <AccordionDetails>this is my first accordion mui</AccordionDetails>
      </Accordion>
      <Accordion
        expanded={accordion === '2'}
        onChange={() => setAccordion('2')}
      >
        <AccordionSummary expandIcon={'▼'}>
          <Typography>Accordion 2</Typography>
        </AccordionSummary>
        <AccordionDetails>this is my first accordion mui</AccordionDetails>
      </Accordion>
    </Box>
  )
}
export default AccordionComponent
