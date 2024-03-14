import React, { useRef, useState } from 'react';
import Box from '@mui/material/Box';
import AddAPhotoOutlinedIcon from '@mui/icons-material/AddAPhotoOutlined';

function YourComponent() {
  const fileInputRef = useRef(null);
  const [imageUrl, setImageUrl] = useState(null);

  const handleFileChange = (event) => {
    const file = event.target.files[0];
    const reader = new FileReader();

    reader.onload = (e) => {
      setImageUrl(e.target.result);
    };

    reader.readAsDataURL(file);
  };

  const handlePhoneIconClick = () => {
    fileInputRef.current.click();
  };

  return (
    <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
    {/* Hidden file input */}
    <input
      type="file"
      ref={fileInputRef}
      style={{ display: 'none' }}
      onChange={handleFileChange}
    />
    
    {/* Clickable icon */}
  
    
    {/* Display the uploaded image */}
    {imageUrl && <img src={imageUrl} alt="Uploaded" style={{ width:"70px",height:"70px", borderRadius: '50%' }} />}
    <AddAPhotoOutlinedIcon onClick={handlePhoneIconClick} sx={{ cursor: 'pointer', width: "25px", height: "40px"}} />
  </Box>
  
  );
}

export default YourComponent;
