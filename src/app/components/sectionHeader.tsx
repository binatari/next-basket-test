import { Box, Typography } from "@mui/material";
import React from "react";

type SectionHeaderProps = {
  subTitle: string;
  title: string;
  description: string;
};

const SectionHeader = ({
  subTitle,
  title,
  description,
}: SectionHeaderProps) => {
  return (
    <Box sx={{ marginTop: "160px" , mb:'24px'}}>
      <Typography
        variant="h4"
        color={"text.secondary"}
        sx={{ textAlign: "center", mt: "25px" }}
      >
        {subTitle}
      </Typography>
      <Typography
        variant="h3"
        color={"text.primary"}
        sx={{ textAlign: "center", my: "10px" }}
      >
        {title}
      </Typography>
      <Typography variant="body1" color={"text.secondary"}  sx={{ textAlign: "center" }}>
        {description}
      </Typography>
    </Box>
  );
};

export default SectionHeader;
