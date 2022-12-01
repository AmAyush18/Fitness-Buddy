import React, { useState, useEffect } from 'react';
import Pagination from '@mui/material/Pagination';
import { Box, Stack, Typography } from '@mui/material';

import { excerciseOptions, fetchData } from '../utils/fetchData';

import ExcerciseCard from './ExerciseCard';
 
const Excercises = ({ excercises, excerciseOptions, bodyPart }) => {
  return (
    <Box id='excercises'
      sx={{ mt: { lg: '110px' }}}
      mt='50px'
      p='20px'
    >
      <Typography variant='h3' mb='46px'>
        Showing Results
      </Typography>
      <Stack direction='row' sx={{ gap: { lg: '110px', xs: '50px' }}} flexWrap='wrap' justifyContent='center'>
        {excercises && excercises.map((excercise, index)=>(
            <p>{excercise.name}</p>
          ))}
      </Stack>
    </Box>
  )
}

export default Excercises