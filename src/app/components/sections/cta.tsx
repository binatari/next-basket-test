import { Box, Button, Typography } from "@mui/material";
import React from "react";

const CTA = () => {
  return (
    <Box
      sx={{
        pt: "160px",
        pb: "112px",
        backgroundImage: "url(/assets/images/spoon-bg.png)",
        backgroundPosition: "center",
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        marginTop: "93px",
      }}
      className="wide-div"
    >
    <Box sx={{maxWidth:'571px', margin:'0 auto'}}>
    <Typography variant="h6" color={"primary"} sx={{ textAlign: "center" }}>
        Designing Better Experience
      </Typography>
      <Typography
        variant="h2"
        color={"text.primary"}
        sx={{ textAlign: "center", my: "30px" }}
      >
        Problems trying to resolve the conflict between
      </Typography>
      <Typography
        variant="body1"
        color={"text.secondary"}
        sx={{ textAlign: "center", mb: "30px" }}
      >
        Problems trying to resolve the conflict between the two major realms of
        Classical physics:
      </Typography>
      <Typography
        variant="h3"
        color={"secondary.main"}
        sx={{ textAlign: "center", mb: "30px" }}
      >
        $16.48
      </Typography>
      <Box sx={{ display: "flex", justifyContent: "center" }}>
        <Button disableElevation variant="contained" sx={{color:'white', fontSize:'14px', fontWeight:700}}>ADD YOUR CALL TO ACTION</Button>
      </Box>
    </Box>
   
    </Box>
  );
};

export default CTA;
