import React, { useState } from 'react';
import { Box } from '@mui/material'; 

import HeroBanner from '../components/HeroBanner';
import Excercises from '../components/Excercises';
import SearchExcercises from '../components/SearchExcercises';

const Home = () => {
  const [ bodyPart, setBodyPart ] = useState('all');
  const [ excercises, setExcercises ] = useState([]);

  return (
    <Box >
      <HeroBanner />
      <SearchExcercises setExcercises={setExcercises} bodyPart={bodyPart} setBodyPart={setBodyPart} />
      <Excercises excercises={excercises} bodyPart={bodyPart} setExcercises={setExcercises} />
    </Box>
  )
}

export default Home