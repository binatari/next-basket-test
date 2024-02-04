import React from "react";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import ListItemText from "@mui/material/ListItemText";
import List from "@mui/material/List";
import Divider from "@mui/material/Divider";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
// import CloseIcon from '@mui/icons-material/Close';
import Slide from "@mui/material/Slide";
import { TransitionProps } from "@mui/material/transitions";
import { useAppDispatch, useAppSelector } from "@/lib/dispatchHooks";
import { decrementCartItemQuantity, incrementCartItemQuantity, removeFromCart, selectCartItems } from "@/lib/features/cartSlice";
import Image from "next/image";
import { Box, Grid, ListItem } from "@mui/material";
import { calculateDiscount, calculateTotal } from "@/lib/helpers";
import ProductListItem from "../list/productListItem";

const Transition = React.forwardRef(function Transition(
  props: TransitionProps & {
    children: React.ReactElement;
  },
  ref: React.Ref<unknown>
) {
  return <Slide direction="up" ref={ref} {...props} />;
});

export default function CartDialog() {
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };
  const cart = useAppSelector(selectCartItems);

  const dispatch = useAppDispatch();

  return (
    <React.Fragment>
      <Button
        variant="text"
        sx={{ fontWeight: 700, padding: 0, minWidth: 0, fontSize: "12px" }}
        onClick={handleClickOpen}
      >
        <Image
          src={"/assets/icons/shopping-basket.png"}
          width={16}
          height={16}
          alt=""
          style={{ marginRight: "5px" }}
        />
        {cart.products.length || ""}
      </Button>
      <Dialog
        fullScreen
        open={open}
        onClose={handleClose}
        TransitionComponent={Transition}
      >
        <AppBar elevation={0} sx={{ bgcolor: "white", position: "relative" }}>
          <Toolbar sx={{ justifyContent: "space-between" }}>
            <Typography variant="h2" component="div" sx={{ mr: "39px" }}>
              CART
              <Typography variant="h6" color={"secondary.main"} component="div">
                Total: ${calculateTotal(cart.products)}
              </Typography>
            </Typography>
            <Button autoFocus color="inherit" onClick={handleClose}>
              Close
            </Button>
          </Toolbar>
        </AppBar>
        {/* <Grid container spacing={'30px'} >
        <Grid xs={6}> */}
        <List>   
          {cart.products.map((product, i, arr) => (
            <ProductListItem
              key={i}
              {...product}
              remove={() => dispatch(removeFromCart(product))}
              incrementItemQuantity={() =>
                incrementCartItemQuantity(product)
              }
              decrementItemQuantity={() =>
                decrementCartItemQuantity(product)
              }
            />
          ))}
        </List>
      </Dialog>
    </React.Fragment>
  );
}
