import React, { useEffect, useState } from "react";
import "./EventCard.css";
import axios from "axios";
import {
  // imgUrl,
  dataUrl,
} from "../../utils/url.js";

import {
  Card,
  CardContent,
  CardMedia,
  Button,
  Typography,
  DialogContent,
  DialogActions,
} from "@mui/material";
import { styled } from "@mui/material/styles";
import Dialog from "@mui/material/Dialog";
import DialogTitle from "@mui/material/DialogTitle";
import IconButton from "@mui/material/IconButton";
import CloseIcon from "@mui/icons-material/Close";
import PropTypes from "prop-types";
import CurrencyRupeeIcon from "@mui/icons-material/CurrencyRupee";

const styles = {
  media: {
    // 16:9,
    height: 200,
  },
};

const BootstrapDialog = styled(Dialog)(({ theme }) => ({
  "& .MuiDialogContent-root": {
    padding: theme.spacing(2),
  },
  "& .MuiDialogActions-root": {
    padding: theme.spacing(1),
  },
}));

const BootstrapDialogTitle = (props) => {
  const { children, onClose, ...other } = props;

  return (
    <DialogTitle sx={{ m: 0, p: 2 }} {...other}>
      {children}
      {onClose ? (
        <IconButton
          aria-label="close"
          onClick={onClose}
          sx={{
            position: "absolute",
            right: 8,
            top: 8,
            color: (theme) => theme.palette.grey[500],
          }}
        >
          <CloseIcon />
        </IconButton>
      ) : null}
    </DialogTitle>
  );
};

BootstrapDialogTitle.propTypes = {
  children: PropTypes.node,
  onClose: PropTypes.func.isRequired,
};

function EventCard() {
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = (e) => {
    const id = e.target.value;
    setOpen(true, id);
  };
  const handleClose = () => {
    setOpen(false);
  };

  const [myData, setMyData] = useState([]);

  //Using prmises

  useEffect(() => {
    console.log("dataaaaaa");
    axios.get(dataUrl).then((res) => {
      setMyData(res.data);
    });
  }, []);

  return (
    <>
      {myData && myData.map((data) => (
        // myImage.src = URL.createObjectURL({data.img});

        <Card
          className="cardStyle"
          item
          xs={12}
          sm={6}
          md={3}
          key={myData.indexOf(data)}
        >
          <CardMedia
            component="img"
            // image={imgUrl + data.img}
            alt="No image"
            style={styles.media}
          />

          <CardContent>
            <Typography gutterBottom variant="h6" component="div">
              {data.name}
            </Typography>

            <Typography variant="body2" color="text.secondary">
              {data.description}
            </Typography>

            <Typography variant="body1" color="text.primary">
              M.R.P:
              <CurrencyRupeeIcon sx={{ fontSize: "13px", mb: 0 }} />
              {data.price}
            </Typography>
          </CardContent>

          <Button
            variant="contained"
            color="success"
            className="buttonStyle"
            sx={{
              backgroundColor: "#17ad03",
              fontSize: "20px",
              fontWeight: "bold",
            }}
            onClick={handleClickOpen}
          >
            BUY PRODUCT
          </Button>

          <div>
            <BootstrapDialog
              onClose={handleClose}
              aria-labelledby="customized-dialog-title"
              open={open}
            >
              <BootstrapDialogTitle
                id="customized-dialog-title"
                onClose={handleClose}
              >
                KIS TICKET
              </BootstrapDialogTitle>
              <DialogContent dividers>
                <Typography gutterBottom>
                  <p>
                    Sorry for the inconvenience. We&rsquo;re performing some
                    maintenance at the moment. If you need to you can always
                    follow us on <a href="http://www.twitter.com/">Twitter</a>{" "}
                    for updates, otherwise we&rsquo;ll be back up shortly!
                  </p>
                </Typography>
              </DialogContent>
              <DialogActions>
                <Button autoFocus onClick={handleClose}>
                  Cancel
                </Button>
              </DialogActions>
            </BootstrapDialog>
          </div>
        </Card>


      ))}


    </>
  );
}

export default EventCard;
