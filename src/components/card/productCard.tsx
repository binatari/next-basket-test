import { product } from "@/lib/api/products/types";
import { calculateDiscount } from "@/lib/helpers";
import { Box, Typography } from "@mui/material";
import Image from "next/image";
import React from "react";

const ProductCard = ({
  title,
  description,
  discountPercentage,
  price,
  thumbnail,
}: product) => {
  return (
    <Box
      sx={{ display: "flex", flexDirection: "column", alignItems: "center" }}
    >
      <Image
        src={thumbnail}
        width={183}
        height={238}
        objectFit="cover"
        objectPosition="top center"
        alt="product"
      />
      <Typography
        variant="h5"
        color={"text.primary"}
        sx={{ textAlign: "center", mt: "25px" }}
      >
        {title}
      </Typography>
      <Typography
        variant="body1"
        color={"text.secondary"}
        sx={{ textAlign: "center", my: "10px" }}
      >
        {description}
      </Typography>
      <Typography variant="h5" sx={{ color: "#bdbdbd", textAlign: "center" }}>
        ${price}{" "}
        <span style={{ color: "#23856D" }}>
          ${calculateDiscount(price, discountPercentage).toFixed(2)}
        </span>
      </Typography>
    </Box>
  );
};

export default ProductCard;
