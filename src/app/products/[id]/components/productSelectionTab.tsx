import { product } from "@/lib/api/products/types";
import { useAppDispatch } from "@/lib/dispatchHooks";
import { Box, Button, Divider, Rating, Typography } from "@mui/material";
import {
  addToCart,
  productIsInCart,
} from "@/lib/features/cartSlice";
import { useAppSelector } from "@/lib/dispatchHooks";
import {
  addToWishlist,
  productIsInWishList,
} from "@/lib/features/wishListSlice";
import Image from "next/image";
import React from "react";
import { calculateDiscount } from "@/lib/helpers";

const ProductSelectionTab = (props: product) => {
  const colors = ["#23A6F0", "#2DC071", "#E77C40", "#252B42"];
  const dispatch = useAppDispatch();

  const isProductInCart = useAppSelector((state) =>
    productIsInCart(state, props.id)
  );
  const isProductInWishlist = useAppSelector((state) =>
    productIsInWishList(state, props.id)
  );

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        height: "80%",
      }}
    >
      <Box>
        <Typography variant="h4">{props.title}</Typography>
        <Box sx={{ display: "flex", gap: "10px", mt: "12px", mb: "20px" }}>
          <Rating value={props.rating} readOnly />
          <Typography variant="h6" sx={{ color: "#737373" }}>
            10 Reviews
          </Typography>
        </Box>
        <Typography variant="h3" sx={{ mb: "5px" }}>
          ${calculateDiscount(props.price, props.discountPercentage).toFixed(2)}
        </Typography>
        <Typography variant="h6">
          Availability :{" "}
          <Typography variant="h6" color={"primary.main"} component={"span"}>
            {props.stock ? "In Stock" : "Out of stock"}
          </Typography>
        </Typography>
      </Box>

      <Box>
        <Divider />
        <Box sx={{ display: "flex", gap: "10px", mt: "29px" }}>
          {colors.map((color) => (
            <Box
              key={color}
              sx={{
                width: "30px",
                height: "30px",
                bgcolor: color,
                borderRadius: "100%",
              }}
            ></Box>
          ))}
        </Box>

        <Box sx={{ display: "flex", gap: "10px", mt: "67px" }}>
          <Button
            disableElevation
            variant="contained"
            sx={{ color: "white", fontSize: "14px", fontWeight: 700 }}
          >
            Select Options
          </Button>
          <Button
            disableElevation
            variant="outlined"
            disabled={isProductInWishlist}
            onClick={() => {
              if (!isProductInWishlist) {
                dispatch(addToWishlist(props));
                return;
              }
            }}
            sx={{
              color: "white",
              borderRadius: "100%",
              padding: 0,
              minWidth: "40px",
              minHeight: "40px",
              bgcolor: isProductInWishlist
                ? "rgba(35, 166, 240, 0.04)"
                : "white",
              border: isProductInWishlist
                ? "1px solid #23A6F0"
                : "1px solid #E8E8E8",
            }}
          >
            <Image
              src={"/assets/icons/black-heart.png"}
              width={20}
              height={20}
              objectFit="cover"
              objectPosition="top center"
              alt="galleryimage"
            />
          </Button>
          <Button
            disableElevation
            disabled={isProductInCart}
            variant="outlined"
            onClick={() => {
              if (!isProductInCart) {
                dispatch(addToCart(props));
                return;
              }
            }}
            sx={{
              color: "white",
              borderRadius: "100%",
              padding: 0,
              minWidth: "40px",
              minHeight: "40px",
              bgcolor: isProductInCart ? "rgba(35, 166, 240, 0.04)" : "white",
              border: isProductInCart
                ? "1px solid #23A6F0"
                : "1px solid #E8E8E8",
            }}
          >
            <Image
              src={"/assets/icons/black-basket.png"}
              width={20}
              height={20}
              objectFit="cover"
              objectPosition="top center"
              alt="galleryimage"
            />
          </Button>
          <Button
            disableElevation
            variant="outlined"
            sx={{
              color: "white",
              borderRadius: "100%",
              padding: 0,
              minWidth: "40px",
              minHeight: "40px",
              bgcolor: "white",
              border: "1px solid #E8E8E8",
            }}
          >
            <Image
              src={"/assets/icons/eye.png"}
              width={20}
              height={20}
              objectFit="cover"
              objectPosition="top center"
              alt="galleryimage"
            />
          </Button>
        </Box>
      </Box>
    </Box>
  );
};

export default ProductSelectionTab;
