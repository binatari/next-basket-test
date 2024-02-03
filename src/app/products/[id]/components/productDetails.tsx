"use client";
import { Box, Breadcrumbs, Link, Typography } from "@mui/material";
import Grid2 from "@mui/material/Unstable_Grid2/Grid2";
import Image from "next/image";
import React from "react";
import ProductImageSlider from "./productImageSlider";
import ProductSelectionTab from "./productSelectionTab";
import { useGetProductQuery } from "@/lib/api/products/slice";
import { useParams } from "next/navigation";
import DotLoader from "@/components/loader/dotLoader";

const breadcrumbs = [
  <Link
    variant="body1"
    underline="hover"
    key="1"
    color="text.primary"
    href="/"
    fontWeight={700}
  >
    Home
  </Link>,
  <Link
    underline="hover"
    key="2"
    variant="h6"
    sx={{ color: "#BDBDBD" }}
    href="#"
    fontWeight={700}
  >
    Shop
  </Link>,
];
const ProductDetails = () => {
  const { id } = useParams<{ id: string }>();
  const { data, isFetching, error } = useGetProductQuery(id);


  return (
    <div>
      <Breadcrumbs
        separator={
          <Image
            src={"/assets/icons/arrow-right.png"}
            width={9}
            height={16}
            objectFit="cover"
            objectPosition="top center"
            alt="client"
          />
        }
        aria-label="breadcrumb"
        sx={{ pb: "34px" }}
      >
        {breadcrumbs}
      </Breadcrumbs>
      {isFetching ? (
        <DotLoader />
      ) : error ? (
        <Box sx={{ display: "flex", justifyContent: "center", py: "40px" }}>
          <Typography variant="h3" sx={{textAlign:'center'}}>Product does not exist</Typography>
        </Box>
      ) : data ?  (
        <Grid2  spacing={4} container>
          <Grid2 md={6} xs={12}>
            <ProductImageSlider {...data}/>
          </Grid2>
          <Grid2 md={6} xs={12}>
            <ProductSelectionTab {...data}/>
          </Grid2>
        </Grid2>
      ) : null}
    </div>
  );
};

export default ProductDetails;
