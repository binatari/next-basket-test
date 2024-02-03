import { Box, Grid, Typography } from "@mui/material";
import Image from "next/image";
import React from "react";

const ProductDescriptionTab = () => {
  return (
    <Box sx={{pt:"41px"}}>
      <Grid container spacing={"30px"} sx={{ margin: "0 auto", width: "100%" }}>
        <Grid xs={12} md={6}>
          <Typography variant="h3" color="text.primary" sx={{ mb: "30px" }}>
            the quick fox jumps over
          </Typography>
          <Typography
            variant="body1"
            color="text.secondary"
            sx={{ mb: "30px" }}
          >
            Met minim Mollie non desert Alamo est sit cliquey dolor do met sent.
            RELIT official consequent door ENIM RELIT Mollie. Excitation venial
            consequent sent nostrum met.
          </Typography>
          <Box sx={{ borderLeft: "3px solid #23856D", pl: "24px" }}>
            <Typography
              variant="body1"
              color="text.secondary"
              sx={{ mb: "30px" }}
            >
              Met minim Mollie non desert Alamo est sit cliquey dolor do met
              sent. RELIT official consequent door ENIM RELIT Mollie. Excitation
              venial consequent sent nostrum met.
            </Typography>
          </Box>

          <Typography
            variant="body1"
            color="text.secondary"
            sx={{ mb: "30px" }}
          >
            Met minim Mollie non desert Alamo est sit cliquey dolor do met sent.
            RELIT official consequent door ENIM RELIT Mollie. Excitation venial
            consequent sent nostrum met.
          </Typography>
        </Grid>
        <Grid xs={12} md={6} sx={{justifyContent:{
            xs:"center",
            md:'flex-end'
        }, display:'flex'}}>
            <Box sx={{maxWidth:'427px'}}>
            <Image
              src={"/assets/images/product-info-card.png"}
              width={427}
              height={392}
              layout="responsive"
              objectFit="cover"
              objectPosition="top center"
              alt="galleryimage"
            />
            </Box>
        </Grid>
      </Grid>
    </Box>
  );
};

export default ProductDescriptionTab;
