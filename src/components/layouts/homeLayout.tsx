import React from "react";
import HomeNav from "../navbar/homeNav";
import HomeFooter from "../footer/homeFooter";
import { Box, Container } from "@mui/material";
import { withChild } from "@/types";

const HomeLayout = ({ children }: withChild) => {
  return (
    <Box sx={{paddingTop:'126px'}}>
      <HomeNav />
      <Container sx={{margin:'0 auto'}}>{children}</Container>
      <HomeFooter />
    </Box>
  );
};

export default HomeLayout;
