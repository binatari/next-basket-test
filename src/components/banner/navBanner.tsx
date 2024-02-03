import { Box, Container, Typography } from "@mui/material";
import Image from "next/image";
import React from "react";

const NavBanner = () => {
  return (
    <Box
      sx={{
        display: { xs: "none", md: "flex" },
       
        bgcolor: "secondary.main",
        py: "14px",
      }}
    >
      <Container sx={{ margin: "0 auto", display:"flex",  gap: "40px", }}>
        <Typography variant="body2" sx={{display:'flex', alignItems:'center', gap:'5px'}} color={'white'}>
          <Image
            src={"/assets/icons/call.png"}
            width={16}
            height={16}
            alt=""
          />
          (225) 555-0118
        </Typography>
        <Typography variant="body2" sx={{display:'flex', alignItems:'center', gap:'5px'}} color={'white'}>
          <Image
            src={"/assets/icons/mail.png"}
            width={16}
            height={16}
            alt=""
          />
          michelle.rivera@example.com
        </Typography>
        <Typography variant="h6" sx={{display:'flex', alignItems:'center', gap:'5px'}} color={'white'}>
        Follow Us  and get a chance to win 80% off
        </Typography>
        <Typography variant="h6" sx={{display:'flex', alignItems:'center', gap:'5px'}} color={'white'}>
        Follow Us : 
        <Image
            src={"/assets/icons/social-icons/white-instagram.png"}
            width={16}
            height={16}
            alt=""
          />
          <Image
            src={"/assets/icons/social-icons/white-youtube.png"}
            width={16}
            height={16}
            alt=""
          />
          <Image
            src={"/assets/icons/social-icons/white-facebook.png"}
            width={16}
            height={16}
            alt=""
          />
          <Image
            src={"/assets/icons/social-icons/white-twitter.png"}
            width={16}
            height={16}
            alt=""
          />
        </Typography>
      </Container>
    </Box>
  );
};

export default NavBanner;
