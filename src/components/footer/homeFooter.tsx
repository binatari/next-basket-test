import {
  Box,
  Button,
  Container,
  Divider,
  InputBase,
  Typography,
} from "@mui/material";
import Grid2 from "@mui/material/Unstable_Grid2/Grid2";
import Image from "next/image";
import React from "react";
import ContactLinks from "../card/contactLinks";

const contactLinks = [
  {
    header: "Company Info",
    links: ["About us", "Carrier", "We are hiring", "Blog"],
  },
  {
    header: "Legal",
    links: ["About us", "Carrier", "We are hiring", "Blog"],
  },
  {
    header: "Features",
    links: [
      "Business Marketing",
      "User Analytic",
      "Live Chat",
      "Unlimited Support",
    ],
  },
  {
    header: "Resources",
    links: ["IOS & Android", "Watch a Demo", "Customers", "API"],
  },
];
const HomeFooter = () => {
  return (
    <Box>
      <Container sx={{ margin: "0 auto", pb: "52px" }}>
        <Box
          sx={{
            py: "53px",
            alignItems: "center",
            display:'flex',
            justifyContent:'space-between'
          }}
        >

            <Typography variant="h3">Bandage</Typography>
            <Box sx={{ display: "flex", gap: "20px" }}>
              <Image
                src={"/assets/icons/social-icons/facebook.png"}
                width={23}
                height={23}
                objectFit="cover"
                objectPosition="top center"
                alt="social-icons"
              />
              <Image
                src={"/assets/icons/social-icons/instagram.png"}
                width={23}
                height={23}
                objectFit="cover"
                objectPosition="top center"
                alt="social-icons"
              />
              <Image
                src={"/assets/icons/social-icons/twitter.png"}
                width={23}
                height={23}
                objectFit="cover"
                objectPosition="top center"
                alt="social-icons"
              />
            </Box>

        </Box>
        <Divider sx={{ mb: "54px" }} />
        <Grid2 container spacing={"63px"}>
          {contactLinks.map((contact, i) => (
            <Grid2 xs={12} md={2.25} key={i}>
              <Box>
                <ContactLinks {...contact} />
              </Box>
            </Grid2>
          ))}
          <Grid2 md={3} xs={12}>
            <Box>
              <Typography sx={{ mb: "20px" }} variant="h5">
                Get in Touch
              </Typography>
              <Box
                component="form"
                sx={{
                  display: "flex",
                  alignItems: "center",
                  width: "100%",
                  border: "1px solid #E6E6E6",
                  bgcolor: "#F9F9F9",
                  borderRadius: "5px",
                }}
              >
                <InputBase
                  sx={{ ml: 1, flex: 1 }}
                  placeholder="Your email"
                  inputProps={{ "aria-label": "input your email" }}
                />
                <Button
                  variant="contained"
                  disableElevation
                  sx={{ color: "white" }}
                >
                  Subscribe
                </Button>
              </Box>
              <Typography color={'text.secondary'} sx={{ mt: "5px" }} variant="body2">
                Lore imp sum dolor Amit
              </Typography>
            </Box>
          </Grid2>
        </Grid2>
      </Container>
      <Box sx={{ bgcolor: "#FAFAFA", py: "25px" }}>
        <Container sx={{ margin: "0 auto" }}>
          <Typography variant="h6" color={"text.secondary"}>
            Made With Love By Finland All Right Reserved{" "}
          </Typography>
        </Container>
      </Box>
    </Box>
  );
};

export default HomeFooter;
