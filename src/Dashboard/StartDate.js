import * as React from 'react';
import { DemoContainer } from '@mui/x-date-pickers/internals/demo';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';

export default function BasicDatePicker() {
  return (
    <>
     <Box display={{display:"flex",marginTop:"20px"}}>
        <Box>
        <Typography></Typography>
        <LocalizationProvider dateAdapter={AdapterDayjs}>
      <DemoContainer components={['DatePicker']}>
        <DatePicker label="Start Date" />
      </DemoContainer>
    </LocalizationProvider>
        </Box>
        <Box sx={{marginLeft:"10px"}}>
        <Typography></Typography>
        <LocalizationProvider dateAdapter={AdapterDayjs}>
      <DemoContainer components={['DatePicker']}>
        <DatePicker label="End Date" />
      </DemoContainer>
    </LocalizationProvider>
        </Box>

    </Box>
   
    </>
   
  );
}