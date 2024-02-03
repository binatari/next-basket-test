"use client";
import { useGetProductQuery } from "@/lib/api/products/slice";
import { Box, Button, Divider, Typography } from "@mui/material";
import { useParams } from "next/navigation";
import React from "react";
import ProductDescriptionTab from "./tabs/productDescriptionTab";

const ProductInformation = () => {
  const [value, setValue] = React.useState("Description");

  const handleChange = (newValue: string) => {
    setValue(newValue);
  };

  const { id } = useParams<{ id: string }>();
  const { data, isFetching, error } = useGetProductQuery(id);

  const buttonList = [
    {
      label: "Description",
      value: "",
    },
    {
      label: "Additional Information",
      value: "",
    },
  ];

  return (
    <Box sx={{ pt: "86px", pb: "48px" }}>
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          gap: "24px",
          flexDirection: {
            xs: "column",
            md: "row",
          },
          alignItems: "center",
        }}
      >
        {buttonList.map((button) => (
          <Button
            variant="text"
            key={button.value}
            sx={{ color: "text.secondary", fontWeight:700 }}
            onClick={() => handleChange(button.label)}
          >
            {button.label}
          </Button>
        ))}
        <Button
          variant="text"
          sx={{ color: "text.secondary", fontWeight:'700' }}
          onClick={() => handleChange("reviews")}
        >
          Reviews {"  "} <Typography sx={{color:'secondary.main', fontWeight:700, ml:'8px'}}>(0)</Typography>
        </Button>
      </Box>
      <Divider sx={{ pt: "28px" }} />
      {value == "Description" ? (
        <ProductDescriptionTab />
      ) : value == "Additional Information" ? (
        <></>
      ) : (
        <></>
      )}
    </Box>
  );
};

export default ProductInformation;
