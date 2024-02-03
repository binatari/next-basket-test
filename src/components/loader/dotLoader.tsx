import { Box } from "@mui/material";
import React from "react";
const DotLoader = () => {
  return (
    <Box sx={{display:'flex', justifyContent:'center', py:'30px'}}>
    <div className="lds-roller ">
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
    </div>
    </Box>

  );
};

export default DotLoader;
