import React from "react";
import "./Home.css";
import { Button, Typography } from "@mui/material";
import Navbar from "../Navbar/Navbar";

function Home() {
  return (
    <div className="homeStyle">
      <Navbar />
      <div elevation={3} className="btnStyle">
        <div className="aboutStyle">
          <Typography align="center" variant="h4">KIS TICKET</Typography><br></br>
          <Typography align="center">KIS Ticket is the smart, secure, simple way to sell tickets online and at the box office. Our point-of-sale app for Android is perfect for venues of all sizes.</Typography>
          <hr></hr>
<br></br><div className="homeButton">
          <Button variant="contained" href="/AddProduct" style={{borderRadius:20}}>
            Add Product
          </Button>
          <br></br>

          <Button href="/Home" style={{borderRadius:20}}>View Product</Button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
