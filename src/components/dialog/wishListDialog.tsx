import React from "react";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import List from "@mui/material/List";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
// import CloseIcon from '@mui/icons-material/Close';
import Slide from "@mui/material/Slide";
import { TransitionProps } from "@mui/material/transitions";
import { useAppDispatch, useAppSelector } from "@/lib/dispatchHooks";
import Image from "next/image";
import {  calculateTotal } from "@/lib/helpers";
import { removeFromWishList, selectWishListItems } from "@/lib/features/wishListSlice";
import ProductListItem from "../list/productListItem";

const Transition = React.forwardRef(function Transition(
  props: TransitionProps & {
    children: React.ReactElement;
  },
  ref: React.Ref<unknown>
) {
  return <Slide direction="up" ref={ref} {...props} />;
});

export default function WishListDialog() {
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };
  const wishlist = useAppSelector(selectWishListItems);

  const dispatch = useAppDispatch();

  return (
    <React.Fragment>
      <Button
        variant="text"
        sx={{ fontWeight: 700, padding: 0, minWidth: 0, fontSize: "12px" }}
        onClick={handleClickOpen}
      >
        <Image
          src={"/assets/icons/heart.png"}
          width={16}
          height={16}
          alt=""
          style={{ marginRight: "5px" }}
        />
        {wishlist.products.length || ""}
      </Button>
      <Dialog
        fullScreen
        open={open}
        onClose={handleClose}
        TransitionComponent={Transition}
      >
        <AppBar elevation={0} sx={{ bgcolor: "white", position: "relative" }}>
          <Toolbar sx={{ justifyContent: "space-between" }}>
            <Typography variant="h2" component="div" sx={{ mr: "10px" }}>
              WISHLIST
              <Typography variant="h6" color={"secondary.main"} component="div">
                Total: ${calculateTotal(wishlist.products)}
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
          {wishlist.products.map((product, i, arr) => (
            <ProductListItem key={i} {...product} remove={()=>dispatch(removeFromWishList(product))}/>
          ))}
        </List>
      </Dialog>
    </React.Fragment>
  );
}
