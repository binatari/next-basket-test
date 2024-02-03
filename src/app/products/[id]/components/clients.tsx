import { Box } from "@mui/material";
import Grid2 from "@mui/material/Unstable_Grid2/Grid2";
import Image from "next/image";
import React from "react";

const clients = [
  "/assets/images/clients/hooli.png",
  "/assets/images/clients/lift.png",
  "/assets/images/clients/pied-piper.png",
  "/assets/images/clients/stripe.png",
  "/assets/images/clients/aws.png",
  "/assets/images/clients/quora.png",
];

const Clients = () => {
  return (
    <Box>
      <Grid2 container spacing={'30px'} sx={{ mt: "106px", mb:'50px' }}>
        {clients.map((client) => (
          <Grid2 xs={12} sm={4} md={2} key={client}>
            <Image
              src={client}
              width={130}
              layout="responsive"
              height={72}
              objectFit="cover"
              objectPosition="top center"
              alt="client"
            />
          </Grid2>
        ))}
      </Grid2>
    </Box>
  );
};

export default Clients;
