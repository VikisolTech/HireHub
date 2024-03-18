import React from 'react';
import { Box, InputLabel } from '@mui/material';
import DescriptionIcon from '@mui/icons-material/Description';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css'; // Import Quill styles

const Description = ({ description, handleDescriptionChange }) => {
  const handleChange = (value) => {
    // Ensure value is passed properly before calling handleDescriptionChange
    if (value !== undefined) {
      handleDescriptionChange(value);
    }
  };

  return (
    <Box sx={{ display: 'flex', alignItems: 'center', marginTop: '10px' }}>
      <DescriptionIcon color="primary" sx={{ marginRight: 1 }} />
      <InputLabel
        id="demo-simple-select-standard-label"
        sx={{
          marginRight: '55px',
          fontWeight: 'bold',
          overflow: 'unset',
          color: 'black',
          
        }}
      >
        Description:
      </InputLabel>
      <ReactQuill 
      
        value={description} 
        onChange={handleChange} 
        modules={{ toolbar: true }} 
        style={{height:"150px",width:"400px",marginLeft:"-42px"}}
      />
    </Box>
  );
};

export default Description;
