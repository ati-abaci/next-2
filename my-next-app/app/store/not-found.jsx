"use client";
import { Stack, Typography } from "@mui/material";
import React from "react";

export default function NotFound() {
  return (
    <Stack justifyContent={"center"} alignItems={"center"}>
      <Typography variant="h2">404, page not found ☹</Typography>
    </Stack>
  );
}
