import React from 'react';
import { Box } from '@mui/material';
import DescriptionIcon from '@mui/icons-material/Description';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css'; // Import Quill styles

const ClientDescription = ({ description, handleDescriptionChange }) => {
  const handleChange = (value) => {
    // Ensure value is passed properly before calling handleDescriptionChange
    if (value !== undefined) {
      handleDescriptionChange(value);
    }
  };

  return (
    <Box sx={{ display: 'flex', alignItems: 'center', marginTop: '10px' }}>
     
      <ReactQuill 
      placeholder='Add description '
        value={description} 
        onChange={handleChange} 
        modules={{ toolbar: true }} 
        style={{ height: "150px", width: "600px",  }}
      />
    </Box>
  );
};

export default ClientDescription;
