import React from "react";
import { AppBar, Toolbar, Typography, Box, Link } from "@mui/material";
import logo from "./../assets/Logo.png";
const Header = () => {
  return (
    <AppBar position="static" sx={{ backgroundColor: "white", paddingX: 2 }}>
      <Toolbar sx={{ display: "flex", justifyContent: "space-between" }}>
        <Typography variant="h6" sx={{ fontWeight: "bold", color:"black" }}>
          <img src={logo} style={{height:"70px", width:"80px" , cursor:"pointer"}} />
        </Typography>

        <Box sx={{ display: "flex", gap: 3 }}>
          <Typography variant="h6" sx={{ cursor: "pointer" , color:"black"}}>
            {/* <link href="#" >Contact</link> */}
            Contact
          </Typography>
          <Typography variant="h6" sx={{ cursor: "pointer", color:"black" }}>
            Help
          </Typography>
          <Typography variant="h6" sx={{ cursor: "pointer" , color:"black"}}>
            Sign Up / Sign In
          </Typography>
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
