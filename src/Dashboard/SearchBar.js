import React, { useState, useEffect } from 'react';
import { styled, alpha } from '@mui/material/styles';
import Box from '@mui/material/Box';
import InputBase from '@mui/material/InputBase';
import SearchIcon from '@mui/icons-material/Search';
import ClearIcon from '@mui/icons-material/Clear';
import axios from 'axios'; // Import Axios for making HTTP requests

const StyledSearch = styled('div')(({ theme }) => ({
  position: 'relative',
  borderRadius: theme.shape.borderRadius,
  backgroundColor: alpha(theme.palette.common.white, 0.15),
  '&:hover': {
    backgroundColor: alpha(theme.palette.common.white, 0.25),
  },
  marginRight: theme.spacing(2),
  marginLeft: 0,
  width: '50%', // Adjusted width to 50%
  [theme.breakpoints.up('sm')]: {
    marginLeft: theme.spacing(3),
    width: '50%',
  },
}));

const SearchIconWrapper = styled('div')(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: '100%',
  position: 'absolute',
  pointerEvents: 'none',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: 'inherit',
  '& .MuiInputBase-input': {
    padding: theme.spacing(1, 1, 1, 0),
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create('width'),
    width: '100%',
    [theme.breakpoints.up('md')]: {
      width: '20ch',
    },
  },
}));

const ClearButton = styled('div')(({ theme }) => ({
  position: 'absolute',
  right: theme.spacing(1),
  top: '50%',
  transform: 'translateY(-50%)',
  cursor: 'pointer',
}));

const Search = () => {
  const [query, setQuery] = useState('');
  const [results, setResults] = useState([]);
  const [showNoResultsMessage, setShowNoResultsMessage] = useState(false);

  useEffect(() => {
    const fetchResults = async () => {
      try {
        const response = await axios.get(`/search?q=${query}`);
        setResults(response.data);
        setShowNoResultsMessage(response.data.length === 0); // Show no results message if there are no results
      } catch (error) {
        console.error('Error fetching search results:', error);
      }
    };

    if (query.trim() !== '') {
      fetchResults();
    } else {
      setResults([]);
      setShowNoResultsMessage(false); // Hide no results message when query is empty
    }
  }, [query]);

  const handleInputChange = (event) => {
    setQuery(event.target.value);
  };

  const clearSearch = () => {
    setQuery('');
  };

  return (
    <Box sx={{ flexGrow: 1.5, position: 'relative' }}>
      <StyledSearch>
        <SearchIconWrapper>
          <SearchIcon />
        </SearchIconWrapper>
        <StyledInputBase
          placeholder="Search…"
          inputProps={{ 'aria-label': 'search' }}
          value={query}
          onChange={handleInputChange}
        />
        {query && (
          <ClearButton onClick={clearSearch}>
            <ClearIcon />
          </ClearButton>
        )}
      </StyledSearch>
      {/* Display search results or no results message */}
      {showNoResultsMessage && <div>No results found</div>}
      {results.length > 0 && (
        <ul>
          {results.map((result, index) => (
            <li key={index}>{result}</li>
          ))}
        </ul>
      )}
    </Box>
  );
};

export default Search;
