import { Avatar, Box, Rating, Typography } from "@mui/material";
import Grid2 from "@mui/material/Unstable_Grid2/Grid2";
import Image from "next/image";
import React from "react";
const galleryImages = [
  "/assets/images/gallery-1.png",
  "/assets/images/gallery-2.png",
  "/assets/images/gallery-3.png",
  "/assets/images/gallery-4.png",
  "/assets/images/gallery-5.png",
  "/assets/images/gallery-6.png",
  "/assets/images/gallery-7.png",
  "/assets/images/gallery-8.png",
  "/assets/images/gallery-9.png",
];
const About = () => {
  return (
    <Box sx={{ pt: "192px", pr: {
      md:"48px",
    } }}>
      <Grid2 container justifyContent={'space-between'}>
        <Grid2 xs={12} md={6} sx={{justifyContent:{
          md:'center',
          xs:'flex-start'
        }, maxWidth:{
          md:'441px'
        }, 
        mb:"37px"
        }}>
            <Box sx={{width:'100%'}}>
            <Typography variant="h3" sx={{ textAlign: "center", mb: "58px" }}>
            What they say about us
          </Typography>
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
            }}
          >
            <Avatar
              src="/assets/images/avatar.png"
              sx={{ my: "20px", width: 90, height: 90 }}
            />
            <Rating value={4} readOnly />
          </Box>

          <Typography
            variant="h6"
            color={"text.secondary"}
            sx={{ textAlign: "center", mb: "20px" }}
          >
            Slate helps you see how many more days you need to work to reach
            your financial goal.
          </Typography>
          <Typography
            variant="h6"
            color={"primary.main"}
            sx={{ textAlign: "center", fontWeight: 700 }}
          >
            Regina Miles
          </Typography>
          <Typography
            variant="body1"
            color={"text.primary"}
            sx={{ textAlign: "center", fontWeight: 700 }}
          >
            Designer
          </Typography>
            </Box>
  
        </Grid2>
        <Grid2 container spacing={'18px'} xs={12} md={6} sx={{ maxWidth:{
          md:'446px'
        }}}>
          {galleryImages.map((galleryImage) => (
            <Grid2 key={galleryImage}  xs={4}>
              <Box sx={{display:'flex', justifyContent:'center',}}>
                <Image
                  src={galleryImage}
                  width={142}
                  height={142}
                  layout="responsive"
                  objectFit="cover"
                  objectPosition="top center"
                  alt="galleryimage"
                />
              </Box>
            </Grid2>
          ))}
        </Grid2>
      </Grid2>
    </Box>
  );
};

export default About;
