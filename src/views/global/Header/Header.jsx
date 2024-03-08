import { useTheme } from "@emotion/react";
import { Box, Typography } from "@mui/material";
import React from "react";
import { tokens } from "../../../theme";

export default function Header({ title, subtitle }) {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  return (
    <Box mb={"48px"}>
      <Typography variant="h4" fontWeight={"bold"} color={colors.grey[100]}>
        {title}
      </Typography>
      <Typography variant="h6" fontWeight={"bold"} color={colors.grey[400]}>
        {subtitle}
      </Typography>
    </Box>
  );
}
