import React from "react";
import "./Footer.css";
import { Typography, Link, Grid } from "@mui/material";

// const useStyles = makeStyles(theme => ({
//   root: {
//     '@media(minWidth: 780px)' : {
//       flexDirection: "column-reverse"
//     }
//   }
// }));

function Footer() {
  // const classes = useStyles();
  return (
    <Grid
      item
      xs={16}
      sm={8}
      px={{ xs: 3, sm: 3 }}
      py={{ xs: 3, sm: 3 }}
      bgcolor="text.primary"
      color="white"
      display="flex"
      alignItems="center"
      // className={classes.root}
    >
      <div className="resp">

        <div className="copyrightFooter">
        <Typography variant="h8">
          Copyright © 2020 KISTicket V1.10.1
        </Typography>
        </div>

        <div className="footerButtons">
          <Link href="/" underline="none" style={{ fontSize: "18px" }}>
            Home
          </Link>

          <Link
            hre="/"
            underline="none"
            style={{ fontSize: "18px", marginRight: "10%", marginLeft: "30px" }}
          >
            Support
          </Link>
        </div>
      </div>
    </Grid>
  );
}

export default Footer;
