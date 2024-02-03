"use client";
import React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Divider from "@mui/material/Divider";
import Drawer from "@mui/material/Drawer";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import { IconButton, Link } from "@mui/material";
import Image from "next/image";
import CartDialog from "../dialog/cartDialog";
import WishListDialog from "../dialog/wishListDialog";
import NavBanner from "../banner/navBanner";

interface Props {
  /**
   * Injected by the documentation to work in an iframe.
   * You won't need it on your project.
   */
  window?: () => Window;
}

const drawerWidth = 240;
const navItems = ["Home", "Shop", "About", "Blog", "Contact", "Pages"];

export default function HomeNav(props: Props) {
  const { window } = props;
  const [mobileOpen, setMobileOpen] = React.useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen((prevState) => !prevState);
  };

  const drawer = (
    <Box sx={{ textAlign: "center" }}>
      <Typography
        variant="h6"
        component={"div"}
        sx={{
          my: 2,
          display: "flex",
          justifyContent: "space-between",
          px: "35px",
          alignItems: "center",
        }}
      >
        Bandage{" "}
        <IconButton
          color="inherit"
          aria-label="open drawer"
          edge="start"
          onClick={handleDrawerToggle}
          sx={{ display: { sm: "none" } }}
        >
          <Image
            src={"/assets/icons/menu.png"}
            width={9}
            height={16}
            objectFit="cover"
            objectPosition="top center"
            alt="client"
          />
        </IconButton>
      </Typography>
      <List>
        {navItems.map((item) => (
          <ListItem key={item} disablePadding>
            <ListItemButton sx={{ textAlign: "center" }}>
              <ListItemText primary={item} />
            </ListItemButton>
          </ListItem>
        ))}
        <ListItem disablePadding>
          <ListItemButton
            sx={{
              textAlign: "center",
              fontSize: "20px",
              color: "#23A6F0",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Image
              src={"/assets/icons/user.png"}
              width={16}
              height={16}
              style={{ marginRight: "5px" }}
              alt=""
            />
            Login / Register
          </ListItemButton>
        </ListItem>
        <ListItem disablePadding>
          <ListItemButton
            sx={{
              textAlign: "center",
              fontSize: "20px",
              color: "#23A6F0",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              py: "12px s",
            }}
          >
            <Image
              src={"/assets/icons/search.png"}
              width={16}
              height={16}
              alt=""
            />
          </ListItemButton>
        </ListItem>
        <ListItem
          disablePadding
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            py: "12px",
          }}
        >
          <CartDialog />
        </ListItem>
        <ListItem
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            py: "12px",
          }}
          disablePadding
        >
          <WishListDialog />
        </ListItem>
      </List>
    </Box>
  );

  const container =
    window !== undefined ? () => window().document.body : undefined;

  return (
    <Box sx={{ display: "flex", px: "38px" }}>
      <AppBar position="fixed" elevation={0} sx={{ bgcolor: "white" }}>
        <NavBanner />
        <Toolbar sx={{flexWrap:'wrap'}}>
          {/* <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{ mr: 2, display: { sm: 'none' } }}
          >
          </IconButton> */}
          <Box
            sx={{
              flexGrow: 1,
              display: "flex",
              justifyContent: { xs: "space-between", sm: "flex-start" },
            }}
          >
            <Link
              href="/"
              variant="h3"
              color={"text.primary"}
              component="a"
              sx={{ mr: {
                xs:"30px",
                md:'109px'
              }, textDecoration: "none" }}
            
            >
              Bandage
            </Link>
            <IconButton
              color="inherit"
              aria-label="open drawer"
              edge="start"
              onClick={handleDrawerToggle}
              sx={{ display: { sm: "none" } }}
            >
              <Image
                src={"/assets/icons/menu.png"}
                width={9}
                height={16}
                objectFit="cover"
                objectPosition="top center"
                alt="client"
              />
            </IconButton>
            <Box
              sx={{
                display: { xs: "none", sm: "flex" },
                alignItems: "center",
                gap: "16px",
              }}
            >
              {navItems.map((item) => (
                <Link
                  key={item}
                  variant="h6"
                  sx={{ textDecoration: "none", color: "#737373" }}
                >
                  {item}
                </Link>
              ))}
            </Box>
          </Box>

          <Box
            sx={{
              display: { xs: "none", sm: "flex" },
              alignItems: "center",
              gap: {
                md:"30px",
                xs:'10px'
              },
            }}
          >
            <Button
              variant="text"
              sx={{
                fontWeight: 700,
                padding: 0,
                minWidth: 0,
                fontSize: "12px",
              }}
            >
              <Image
                src={"/assets/icons/user.png"}
                width={12}
                height={12}
                style={{ marginRight: "5px" }}
                alt=""
              />
              Login / Register
            </Button>
            <Button
              variant="text"
              sx={{
                fontWeight: 700,
                padding: 0,
                minWidth: 0,
                fontSize: "12px",
              }}
            >
              <Image
                src={"/assets/icons/search.png"}
                width={16}
                height={16}
                alt=""
              />
            </Button>
            <CartDialog />
            <WishListDialog />
          </Box>
        </Toolbar>
      </AppBar>
      <nav>
        <Drawer
          container={container}
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true, // Better open performance on mobile.
          }}
          sx={{
            display: { xs: "block", sm: "none" },
            "& .MuiDrawer-paper": {
              boxSizing: "border-box",
              width: "100%",
            },
          }}
        >
          {drawer}
        </Drawer>
      </nav>
    </Box>
  );
}
