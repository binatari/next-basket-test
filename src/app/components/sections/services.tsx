import { Box, Typography } from "@mui/material";
import React from "react";
import SectionHeader from "../sectionHeader";
import Grid2 from "@mui/material/Unstable_Grid2/Grid2";
import Image from "next/image";
const services = [
  {
    image: "/assets/icons/book.png",
    title: "Easy Wins",
    description: "Get your best looking smile now!",
  },
  {
    image: "/assets/icons/tablet.png",
    title: "Concrete",
    description: "Defalcate is most focused in helping you discover your most beautiful smile",
  },
  {
    image: "/assets/icons/arrow.png",
    title: "Hack Growth",
    description: "Overcame any hurdle or any other problem.",
  },
];
const Services = () => {
  return (
    <Box>
      <SectionHeader
        title="THE BEST SERVICES"
        subTitle="Featured Products"
        description="Problems trying to resolve the conflict between "
      />
      <Grid2 container sx={{mt:'80px'}}>
        {services.map((service) => (
          <Grid2 key={service.title} sm={4} sx={{display:'flex', justifyContent:'center', width:'100%'}}>
            <Box sx={{display:'flex', justifyContent:'center', flexDirection:'column', alignItems:'center', width:'100%s'}}>
              <Image
                src={service.image}
                width={72}
                height={72}
                objectFit="cover"
                objectPosition="top center"
                alt="product"
              />
              <Typography
                variant="h3"
                color={"text.primary"}
                sx={{ textAlign: "center", mt: "25px", mb:'20px' }}
              >
                {service.title}
              </Typography>
              <Typography
                variant="body1"
                color={"text.secondary"}
                sx={{ textAlign: "center", my: "10px" }}
              >
                {service.description}
              </Typography>
            </Box>
          </Grid2>
        ))}
      </Grid2>
    </Box>
  );
};

export default Services;
