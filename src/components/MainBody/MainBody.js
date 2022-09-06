import React from "react";
import { Box, Grid } from "@mui/material";
import "./MainBody.css";
import EventCard from "../EventCard/EventCard";

import Navbar from "../Navbar/Navbar";

function Body() {


  //Using prmises


  return (
    <>
      <Navbar />
      {/* <Box sx={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', mx: "auto", width: 1400, alignItems:'center' }}>
             <EventCard />
             <EventCard />
             <EventCard />
             <EventCard />
             <EventCard />
             <EventCard />
             <EventCard />
             <EventCard />
             <EventCard />
             <EventCard />

             </Box> */}

      <Box
        container
        spacing={0}
        direction="column"
        alignItems="center"
        justifyContent="center"
        marginLeft="10%"
        marginRight="10%"
        style={{ minHeight: "100vh" }}
      >
        <Grid container columns={{ xs: 4, sm: 8, md: 12 }} style={{justifyContent:'center'}}>
          {/* {Array.from(Array(6)).map((_, index) => ( */}

          {/* <Grid item xs={4} sm={4} md={4} > */}

          <EventCard />

          {/* </Grid> */}
          {/* ))} */}
        </Grid>
      </Box>
    </>
  );
}
export default Body;
