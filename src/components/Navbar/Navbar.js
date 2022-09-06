import React from 'react'
import { AppBar, Toolbar, Typography } from "@mui/material";
import './Navbar.css'


export default function Navbar() {
  return (
    <div className="scroll">
      <AppBar position="static" className="appStyle" sx={{backgroundColor:"#0698d1"}}>
        <Toolbar style={{ height: "100px", left: "10%" ,backgroundColor:"#0698d1"}}>
          <Typography variant="h6">Kis Kiosk</Typography>
        </Toolbar>
      </AppBar>
      </div>
  )
}
