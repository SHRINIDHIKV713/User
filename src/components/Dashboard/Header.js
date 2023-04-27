import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";

export default function Header() {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static" style={{ background: "#000" }}>
        <Toolbar>
          <Typography
            variant="h6"
            component="div"
            sx={{ flexGrow: 1, fontWeight: "bold", fontsize: "20px" }}
          >
            Irin
          </Typography>
          <Typography
            variant="h10"
            component="div"
            sx={{
              flexGrow: 5,
              fontWeight: "400",
              fontsize: "12px",
              marginLeft: "30px",
            }}
          >
            Company
            
          </Typography>
          <Typography
            variant="h9"
            component="div"
            sx={{ flexGrow: 95, fontWeight: "400", fontsize: "12px" }}
          >
            Help
          </Typography>
          <Typography
            variant="h9"
            component="div"
            sx={{ flexGrow: 5, fontWeight: "400", fontsize: "12px" }}
          >
            EN
          </Typography>
          <Typography sx={{ flexGrow: 8, fontWeight: "400", fontsize: "12px", }}>
           
            Products
        
          </Typography>
          <Button color="inherit">Login</Button>
          <Button
            color="inherit"
            style={{ background: "#fff", color: "#000", marginLeft: "10px" }}
          >
            Sign Up
          </Button>
        </Toolbar>
      </AppBar>
    </Box>
  );
}
