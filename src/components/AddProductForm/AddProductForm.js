import React, { useState } from "react";
import {
  TextField,
  Button,
  Grid,
  Paper,
  IconButton,
  Typography,
  Backdrop,
} from "@mui/material";
import { PhotoCamera } from "@mui/icons-material";
import "./AddProductForm.css";
import Navbar from "../Navbar/Navbar";
import { postUrl, imgUrl } from "../../utils/url";
import axios from "axios";
import CircularProgress from "@mui/material/CircularProgress";
import { useNavigate } from "react-router-dom";

function AddProductForm() {
  const paperStyle = {
    padding: 20,
    height: "fit-content",
    width: 280,
    margin: "20px auto",
    borderRadius: "10px",
  };
  const [open, setOpen] = useState(false);

  const btnstyle = { margin: "8px 0" };
  const preview = { display: "flex", flexDirection: "column" };
  const image = { maxWidth: "100%", maxHeight: 320 };


  // const [postData, setPostData] = useState({
  //   name:'',
  //   description:'',
  //   price:'',
  //   image:selectedImage
  // });

  const [selectedImage, setSelectedImage] = useState();
  const [name, setName] = useState();
  const [description, setDescription] = useState();
  const [price, setPrice] = useState();
  const navigate = useNavigate()


  // This function will be triggered when the file field change
  const imageChange = (e) => {
    if (e.target.files && e.target.files.length > 0) {
      setSelectedImage(e.target.files[0]);
    }
  };


  // let formData = new FormData(); 
  // formData.append('name',name)
  // formData.append('description',description)
  // formData.append('price',price)
  // formData.append('image',selectedImage)


  function handleClick(e) {
    setOpen(!open)
    e.preventDefault();
    // Send data to the backend via POST
    // console.log(formData)

    axios.post(postUrl, {
      'name': name,
      'description': description,
      'price': price
    }).then(({ data }) => {

      // alert("Data added successfully");
      // navigate("../Home")

      const imageForm = new FormData()
      imageForm.set('image', selectedImage, data._id + '.jpg')

      const config = {
        headers: { 'content-type': 'multipart/form-data' }
      }

      axios.post(imgUrl, imageForm, config) // receive two parameter endpoint url ,form data         
        .then(res => { // then print response status
          alert("Data added successfully");
          navigate("../Home")
        }).catch((error) => {
          alert(error)
          
        })


    }).catch((error) => {
      alert(error)
      navigate("../Home")

    })
    // 
    // .catch((error) => {

    //   alert(error)

    // });
  }

  return (
    <div className="FormBody">
      <Navbar />

      <Grid container justify="center" wrap="wrap" >
        <Paper elevation={10} style={paperStyle}>
          <Typography align="center" variant="h5" sx={{ mb: 1 }}>
            Add Product
          </Typography>
          <TextField
            label="Name"
            placeholder="Name"
            fullWidth
            required
            value={name}
            error={name === ""}
            sx={{ mb: 2 }}
            onChange={(e) => {
              setName(e.target.value);
            }}
          />
          <TextField
            label="Description"
            placeholder="Description"
            fullWidth
            required
            value={description}
            error={description === ""}
            sx={{ mb: 2 }}
            onChange={(e) => {
              setDescription(e.target.value);
            }}
          />
          <TextField
            label="Price"
            placeholder="Price"
            fullWidth
            required
            type="number"
            value={price}
            error={price === ""}
            sx={{ mb: 2 }}
            onChange={(e) => {
              setPrice(e.target.value);
            }}
          />
          <IconButton
            color="primary"
            aria-label="upload picture"
            component="label"
            onChange={imageChange}
          >
            <input hidden accept="image/*" type="file" />
            <PhotoCamera />
          </IconButton>

          {selectedImage && (
            <div style={preview}>
              <img
                src={URL.createObjectURL(selectedImage)}
                style={image}
                alt="Thumb"
              />
            </div>
          )}
          <Button
            type="submit"
            color="primary"
            variant="contained"
            style={btnstyle}
            fullWidth
            disabled={!name || !description || !price || !selectedImage}
            href='./Home'
            onClick={handleClick}
          >
            Submit
          </Button>
          <Backdrop
            sx={{ color: '#fff', zIndex: (theme) => theme.zIndex.drawer + 1 }}
            open={open}
            >
            <CircularProgress  />
          </Backdrop>
        </Paper>
      </Grid>
    </div>
  );
}

export default AddProductForm;
