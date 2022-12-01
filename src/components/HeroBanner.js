import React from "react";
import { Box, Stack, Typography, Button } from "@mui/material";

import HeroBannerImage from "../assets/images/banner.jpg";

const primary = "#58ad87";

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
        Sweat is new Smile <br /> No Cheat Days
      </Typography>
      <Typography fontSize="22px" lineHeight="35px" mb={4}>
        Follow along the most effective exercises
      </Typography>
      <Stack>
        <a
          href="#exercises"
          style={{
            marginTop: "45px",
            textDecoration: "none",
            width: "200px",
            textAlign: "center",
            background: `${primary}`,
            padding: "14px",
            fontSize: "22px",
            textTransform: "none",
            color: "white",
            borderRadius: "4px",
          }}
        >
          Explore Fitness
        </a>
      </Stack>
      <Typography
        fontWeight={600}
        color={primary}
        sx={{
          opacity: 0.1,
          display: { lg: "block", xs: "none" },
        }}
        fontSize="200px"
      >
        Exercise
      </Typography>
      <img src={HeroBannerImage} alt="hero-banner" className="hero-banner-img" />
    </Box>
  );
};

export default HeroBanner;
