import React from "react";
import "./Header.css";
import {
  Button,
  Typography,
  Toolbar,
  AppBar,
  IconButton,
} from "@mui/material";
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";

// const matches = useMediaQuery('(min-width:600px)');

// import {AddShoppingCartIcon} from '@mui/icons-material'

function Header() {

  return (
 
        
          <AppBar position="fixed" className="headerStyle">
            <Toolbar style={{ backgroundColor: "black", height: "100px"}} >

              <Typography variant="h4" sx={{ flexGrow: 0.99,fontWeight: 'bold'}} >
                KIS TICKET
              </Typography>

              <Button
                color="inherit"
                size="medium"
                endIcon={<AddShoppingCartIcon />}
                sx={{ display: { xs: "none", sm: "block" } }}
                href="/AddProduct"
              >
                ADD TICKET
              </Button>
              
              <IconButton color="inherit" aria-label="add to shopping cart">
                <AddShoppingCartIcon sx={{ display: { xs: "block", sm: "none" } }}/>
              </IconButton>

            </Toolbar>

          </AppBar>
        
  
  );
}

export default Header;
