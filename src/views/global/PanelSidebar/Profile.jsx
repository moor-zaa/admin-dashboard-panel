import { Box, Typography } from "@mui/material";
import React from "react";
import { profileImage } from "../../../assets/images";
import { tokens } from "../../../theme";
import { useTheme } from "@emotion/react";

export default function Profile() {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  return (
    <Box>
      <Box display={"flex"} justifyContent={"center"} alignItems={"center"}>
        <img
          src={profileImage}
          width={64}
          height={64}
          alt="profile-user"
          style={{ cursor: "pointer", borderRadius: "50%" }}
        />
      </Box>
      <Box
        display={"flex"}
        justifyContent={"center"}
        alignItems={"center"}
        flexDirection={"column"}
      >
        <Typography
          variant="h3"
          color={colors.grey[100]}
          fontWeight={"bold"}
          sx={{ m: "10px 0 0 0" }}
        >
          Morteza Alipour
        </Typography>
        <Typography variant="h6" color={colors.greenAccent[500]}>
          Admin Dashboard Panel
        </Typography>
      </Box>
    </Box>
  );
}
