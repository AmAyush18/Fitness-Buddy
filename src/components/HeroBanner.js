import React from "react";
import { Box, Stack, Typography, Button } from "@mui/material";

import HeroBannerImage from "../assets/images/banner.jpg";

const primary = '#58ad87'

const HeroBanner = () => {
  return (
    <Box
      sx={{
        mt: { lg: "212px", xs: "70px" },
        ml: { sm: "50px" },
      }}
      position="relative"
      p="20px"
    >
      <Typography color={primary} fontWeight="600" fontSize="26px">
        Fitness Buddy
      </Typography>
      <Typography
        fontWeight={700}
        sx={{ fontSize: { lg: "44px", xs: "40px" } }}
        mb="23px"
        mt="30px"
      >
        Sweat is new Smile <br /> Stay Fit
      </Typography>
      <Typography fontSize="22px" lineHeight="35px" mb={4}>
        Follow along the most effective excercises
      </Typography>
      <Button variant="contained" color="error" href="#excercises" sx={{ backgroundColor: `${primary}`, padding: '10px'}}>
        Explore Fitness
      </Button>
      <Typography
        fontWeight={600}
        color={primary}
        sx={{
          opacity: 0.1,
          display: { lg: "block", xs: "none" },
        }}
        fontSize="200px"
      >
        Excercise
      </Typography>
      <img src={HeroBannerImage} alt="banner" className="hero-banner-img" />
    </Box>
  );
};

export default HeroBanner;