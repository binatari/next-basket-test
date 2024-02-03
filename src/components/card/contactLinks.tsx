import { Box, Typography } from "@mui/material";
import React from "react";

type contactLinksProps = {
  header: string;
  links: string[];
};
const ContactLinks = ({ header, links }: contactLinksProps) => {
  return (
    <Box>
      <Typography sx={{ mb: "20px" }} variant="h5">
        {header}
      </Typography>
      {links.map((link) => (
        <Typography
          variant="body1"
          color={'text.secondary'}
          sx={{ mb: "10px", fontWeight: "700" }}
          key={link}
        >
          {link}
        </Typography>
      ))}
    </Box>
  );
};

export default ContactLinks;
