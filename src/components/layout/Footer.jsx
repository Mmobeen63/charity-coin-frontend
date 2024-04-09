import React from "react";
import Divider from "@mui/material/Divider";
import { Typography, Grid, Box } from "@mui/material";
import logoSVG from "./../../assets/Charity_Logo.png";
import NavigateNextIcon from "@mui/icons-material/NavigateNext";
import InputBase from "@mui/material/InputBase";
import IconButton from "@mui/material/IconButton";
import GitHubIcon from "@mui/icons-material/GitHub";
import XIcon from "@mui/icons-material/X";
import TelegramIcon from "@mui/icons-material/Telegram";
import { useNavigate } from "react-router-dom";
import InboundForm from "../form/InboundForm";


export const Footer = () => {
  const navigate= useNavigate();
  const currentYear = new Date().getFullYear();

  const renderLogoAndText = () => (
    <Grid
      item
      xl={6}
      lg={6}
      md={6}
      sm={12}
      xs={12}
      style={{
        padding: "20px",
        display: "flex",
        flexDirection: "column",
        gap: "36px",
      }}
    >
      <img src={logoSVG} alt="Logo" style={{ width: "60px", height: "60px" }} />
      <Typography variant="h5" style={{ width: "320px" }}>
        Don’t miss out on our updates! Subscribe to our newsletter
      </Typography>

      <div
        style={{
          display: "flex",
          alignItems: "center",
          maxWidth: "300px",
          borderBottom: "1px solid black",
        }}
      >
        <InputBase
          sx={{ ml: 1, flex: 1 }}
          placeholder="Email Address"
          inputProps={{ "aria-label": "Email Address" }}
        />

        {/* <Divider sx={{ height: 28, m: 0.5 }} orientation="vertical" /> */}
        <NavigateNextIcon />
      </div>
      <div style={{ marginTop: "80px", display: "flex", gap: "8px" }}>
        <IconButton sx={{ backgroundColor: "black", color: "white" }}>
          <GitHubIcon />
        </IconButton>
        <IconButton sx={{ backgroundColor: "black", color: "white" }}>
          <XIcon />
        </IconButton>
        {/* <IconButton sx={{ backgroundColor: "black", color: "white" }}>
          <DiscordIcon /> 
        </IconButton> */}
        <IconButton sx={{ backgroundColor: "black", color: "white" }}>
          <TelegramIcon />
        </IconButton>
      </div>
    </Grid>
  );

  return (
    

    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        backgroundColor: "#a0f8f8",
        
      }}
    >
      <InboundForm />

      <Divider />
      <Grid container justifyContent={"center"}>
        {renderLogoAndText()}
        <Divider orientation="vertical" flexItem />
        <Divider orientation="vertical" variant="middle" flexItem />
        <Grid
          item
          xl={5.9}
          lg={5.9}
          md={5.9}
          sm={12}
          xs={12}
          style={{
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "space-around",
            width: "300px",
          }}
        >
          <div></div>
          <div>
            <Typography>
              <b>Menu</b>
            </Typography>
            <Typography  
            sx={{cursor:"pointer"}}
            onClick={()=>{
              navigate('/docs')
            }}
            >Docs</Typography>
            <Typography 
            sx={{cursor:"pointer"}}
            onClick={()=>{
              navigate('/privacy-policy')
            }}
            >Privacy Policy</Typography>
            <Typography  
            sx={{cursor:"pointer"}}
            onClick={()=>{
              navigate('/cookies-policy')
            }}
            >Cookies Policy</Typography>
            <Typography  
            sx={{cursor:"pointer"}}
            onClick={()=>{
              navigate('/')
            }}
            >Contact</Typography>
          </div>
        </Grid>
      </Grid>

      <Divider />
      <Box style={{ display: "flex", padding: "20px " }}>
        <Typography variant="body1" align="left">
          &copy; {currentYear} Charity Coin. All rights reserved.
        </Typography>
      </Box>
    </Box>
              
  );
};

