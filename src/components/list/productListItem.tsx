"use client"
import { product, productWithQuantity } from "@/lib/api/products/types";
import { useAppDispatch } from "@/lib/dispatchHooks";
import { calculateDiscount } from "@/lib/helpers";
import { Box, Button, Divider, ListItem, ListItemText, Typography } from "@mui/material";
import { PayloadAction } from "@reduxjs/toolkit";
import Image from "next/image";
import React from "react";
interface productListItemProps extends productWithQuantity {
  remove: () => void;
  decrementItemQuantity: () => PayloadAction<product>;
  incrementItemQuantity: () => PayloadAction<product>;
}
const ProductListItem = (props: productListItemProps) => {
    const dispatch = useAppDispatch()
    const increment = () =>  {
      if(props.quantity < props.stock) dispatch(props.incrementItemQuantity())
    }
    const decrement = () => {
        if(props.quantity > 1) dispatch(props.decrementItemQuantity())
    }
  return (
    <Box>
      <ListItem sx={{ justifyContent: "space-between" }}>
        <Box>
          <ListItemText
            sx={{ mb: "0.5rem" }}
            primary={props.title}
            secondary={`$${calculateDiscount(
              props.price,
              props.discountPercentage
            ).toFixed(2)}`}
          />
          <Image
            src={props.thumbnail}
            width={100}
            height={50}
            objectFit="cover"
            objectPosition="top center"
            alt="thumbnail"
          />
        </Box>
        <Box sx={{display:'flex', justifyContent:'center', flexDirection:'column', alignItems:'center'}}>
          <Button onClick={props.remove}>
            <Image
              src={"/assets/icons/close.png"}
              width={20}
              height={20}
              // style={{marginRight:'5px'}}
              alt=""
            />
          </Button>
          <Box sx={{display:'flex', gap:'10px', alignItems:'center'}}>
          <Button
            disableElevation
            variant="outlined"
            onClick={decrement}
            sx={{
              fontWeight:700,
              borderRadius: "100%",
              padding: 0,
              minWidth: "40px",
              minHeight: "40px",
              bgcolor: "white",
              border: "1px solid #E8E8E8",
              fontSize:'18px'
            }}
          >
           -
          </Button>
          <Typography variant="h6" >
             {props.quantity}
        </Typography>
        <Button
            disableElevation
            variant="outlined"
            onClick={increment}
            sx={{
                fontWeight:700,
              borderRadius: "100%",
              padding: 0,
              minWidth: "40px",
              minHeight: "40px",
              bgcolor: "white",
              border: "1px solid #E8E8E8",
              fontSize:'18px'
            }}
          >
           +
          </Button>
          </Box>
        </Box>
      </ListItem>
      <Divider />
    </Box>
  );
};  

export default ProductListItem;
