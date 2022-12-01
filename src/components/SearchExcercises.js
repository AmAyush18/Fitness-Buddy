import React, { useState, useEffect } from 'react';
import { Box, Button, Stack, TextField, Typography } from '@mui/material';
import { excerciseOptions, fetchData } from '../utils/fetchData';

import HorizontalScrollBar from './HorizontalScrollBar';

const SearchExcercises = ({ setExcercises, bodyPart, setBodyPart}) => {

  const [ search, setSearch ] = useState('');
  const [ bodyParts, setBodyParts ] = useState([]);

  useEffect(() => {
    const fetchExcercisesData = async () => {
      const bodyParts = await fetchData('https://exercisedb.p.rapidapi.com/exercises/bodyPartList',excerciseOptions);

      setBodyParts(['all', ...bodyParts]);
    }

    fetchExcercisesData();

  }, []) // we just wanna make sure it's called only once app loads

  // async simply means it's going to take some time
  const handleSearch = async () => {
    if(search) {
      const excercisesData = await fetchData('https://exercisedb.p.rapidapi.com/exercises', excerciseOptions);

      const searchedExcercises = excercisesData.filter(
        (excercise) => excercise.name.toLowerCase().includes(search)
        || excercise.target.toLowerCase().includes(search)
        || excercise.equipment.toLowerCase().includes(search)
        || excercise.bodyPart.toLowerCase().includes(search)
      )

      setSearch('');
      setExcercises(searchedExcercises);

    }
  }

  return (
    <Stack flexWrap='wrap' alignItems='center' mt='37px' justifyContent='center' p='20px'>
      <Typography fontWeight={700} sx={{
        fontSize: { lg: '44px', xs: '30px' }
      }} 
      mb='50px'
      textAlign='center'
      >
        Awesome Excercises You <br /> 
        Should Know
      </Typography>
      <Box position='relative' mb='72px'>
          <TextField
            type='text' 
            sx={{
              input: { fontWeight: '700', 
              border: 'none',
              borderRadius: '4px'
              },
              width: { lg: '800px', xs: '350px' },
              backgroundColor: '#fff',
              borderRadius: '40px'
            }}
            height='76px'
            value={search}
            onChange={(e) => setSearch(e.target.value.toLowerCase())}
            placeholder='Search Excercises'
          />
          <Button className='search-btn'
            sx={{
              bgcolor: '#58ad87',
              color: '#fff',
              textTransform: 'none',
              width: { lg: '175px', xs: '80px' },
              fontSize: { lg: '20px', xs: '14px' },
              height: '56px',
              position: 'absolute',
              right: '0'
            }}
            onClick={ handleSearch }
            >
            Search
          </Button>
      </Box>
      <Box sx={{ position: 'relative', width: '100%', p: '20px' }}>
            <HorizontalScrollBar data={bodyParts} bodyPart={bodyPart} setBodyPart={setBodyPart} />
      </Box>
    </Stack>
  )
}

export default SearchExcercises