import { Box, Typography } from "@mui/material";
import Grid from "@mui/material/Unstable_Grid2";
import React from "react";

const boxSettings = {
    backgroundRepeat: "no-repeat",
    backgroundPosition: "center",
    backgroundSize: "cover",
    padding:'24px'
}
const Hero = () => {
   
  return (
    <Box>
      <Grid container spacing={2}>
        <Grid xs={12} md={5}>
          <Box
            sx={{
              backgroundImage: "url(/assets/images/hero-grid-1.png)",
              height: {
                md:"616px",
                xs:"332px"
              },
              ...boxSettings
            }}
          >
             <Typography variant="h6" color={'success.main'}>
                5 items
            </Typography>
            <Typography variant="h2" color={'text.primary'} marginBlock={'5px'}>
                FURNITURE
            </Typography>
            <Typography variant="h6" color={'text.primary'}>
                Read More
            </Typography>
          </Box>
        </Grid>
        <Grid container xs={12} md={7} spacing={2}>
          <Grid xs={12}>
            <Box
              sx={{
                backgroundImage: "url(/assets/images/hero-grid-2.png)",
                ...boxSettings,
                height: {
                  md:"100%",
                  xs:"332px"
                },
              }}
            >
            <Typography variant="h6" color={'success.main'}>
                5 items
            </Typography>
            <Typography variant="h3" color={'text.primary'} marginBlock={'5px'}>
                FURNITURE
            </Typography>
            <Typography variant="h6" color={'text.primary'}>
                Read More
            </Typography>
            </Box>
          </Grid>
          <Grid xs={12} md={6}>
            <Box
              sx={{
                backgroundImage: "url(/assets/images/hero-grid-3.png)",
                ...boxSettings,
                height: {
                  md:"100%",
                  xs:"332px"
                },
              }}
            >
                 <Typography variant="h6" color={'success.main'}>
                5 items
            </Typography>
            <Typography variant="h3" color={'text.primary'} marginBlock={'5px'}>
                FURNITURE
            </Typography>
            <Typography variant="h6" color={'text.primary'}>
                Read More
            </Typography>
            </Box>
          </Grid>
          <Grid xs={12} md={6}>
            <Box
              sx={{
                backgroundImage: "url(/assets/images/hero-grid-4.png)",
                ...boxSettings,
                height: {
                  md:"100%",
                  xs:"332px"
                },
              }}
            >
                 <Typography variant="h6" color={'success.main'}>
                5 items
            </Typography>
            <Typography variant="h3" color={'text.primary'} marginBlock={'5px'}>
                FURNITURE
            </Typography>
            <Typography variant="h6" color={'text.primary'}>
                Read More
            </Typography>
            </Box>
          </Grid>
        </Grid>
      </Grid>
    </Box>
  );
};

export default Hero;
