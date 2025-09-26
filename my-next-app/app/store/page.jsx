"use client";
import { Stack, Typography } from "@mui/material";
import React from "react";

export default function Store() {
  const store = ["meat", "rice", "milk", "nut"];
  return (
    <Stack justifyContent={"center"} alignItems={"center"}>
      {store.map((item) => (
        <Typography variant="h3">{item}</Typography>
      ))}
    </Stack>
  );
}
