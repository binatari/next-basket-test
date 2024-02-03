"use client"
import { product } from "@/lib/api/products/types";
import { calculateDiscount } from "@/lib/helpers";
import { Box, Button, Divider, ListItem, ListItemText, Typography } from "@mui/material";
import Image from "next/image";
import React, { useState } from "react";
interface productListItemProps extends product {
  remove: () => void;
}
const ProductListItem = (props: productListItemProps) => {
    const [amount, setAmount] = useState<number>(1)
    const increment = () =>  {
      if(amount < props.stock) setAmount(amount + 1)
    }
    const decrement = () => {
        if(amount > 1) setAmount(amount - 1)
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
             {amount}
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
