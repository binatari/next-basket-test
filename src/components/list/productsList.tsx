"use client";
import {useGetProductsQuery } from "@/lib/api/products/slice";
import { Box, Button } from "@mui/material";
import React, { useState } from "react";
import ProductCard from "../card/productCard";
import Grid2 from "@mui/material/Unstable_Grid2/Grid2";
import Link from "next/link";
import DotLoader from "../loader/dotLoader";
type productsListProps = {
  isPaginated?: boolean;
};
const ProductsList = ({ isPaginated = false }: productsListProps) => {
  // const products = useAppSelector(selectProducts)
  // console.log(products)
  const [page, setPage] = useState<number>(0);
  const totalProducts = page * 10;
  const { data, isFetching } = useGetProductsQuery(totalProducts);
  const fetchMore = () => {
    if (data) if (data?.total > data?.products?.length) setPage(page + 1);
  };

  const disabled = isFetching || !data || data?.products.length == data?.total;

  return (
    <Box sx={{pt:'24px'}}>
      <Grid2 container spacing={"30px"}>
        {data?.products.map((product) => (
          <Grid2 key={product.id} xs={12} sm={4} md={2.4}>
            <Link
              href={`/products/${product.id}`}
              style={{ textDecoration: "none" }}
            >
              <ProductCard {...product} />
            </Link>
          </Grid2>
        ))}
      </Grid2>
      {isFetching ? <DotLoader /> : null}

      {isPaginated ? (
        <Box sx={{ display: "flex", justifyContent: "center", mt: "56px" }}>
          <Button variant="outlined" disabled={disabled} onClick={fetchMore}>
            LOAD MORE PRODUCTS
          </Button>
        </Box>
      ) : null}
    </Box>
  );
};

export default ProductsList;
