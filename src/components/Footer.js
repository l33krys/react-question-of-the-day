import React from "react";
import { AppBar, Box, Typography } from "@mui/material";

function Footer() {
  const currentYear = new Date().getFullYear();
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static" className=".app-bar">
        <Typography variant="h6" align="center" sx={{ marginTop: 2 }}>
          Question Query
        </Typography>
        <Typography variant="p" align="center" sx={{ marginBottom: 2 }}>
          Copyright &copy; {currentYear} Krystle, Madi, Jia-Jia
        </Typography>
      </AppBar>
    </Box>
  );
}

export default Footer;
