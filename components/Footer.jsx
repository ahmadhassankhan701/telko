"use client";
import {
  CalendarTodayOutlined,
  Facebook,
  Instagram,
  Twitter,
} from "@mui/icons-material";
import {
  Box,
  Button,
  Container,
  Divider,
  Grid,
  TextField,
  Typography,
  styled,
} from "@mui/material";
import React from "react";
const FooterGridMainTitle = styled(Typography)({
  fontWeight: "800",
  fontSize: 20,
  color: "#D9DDDE",
  textTransform: "capitalize",
  paddingBottom: 20,
  lineHeight: 1.5,
});
const FooterGridOptions = styled(Typography)({
  fontWeight: 800,
  fontSize: 16,
  color: "#E6E8E9",
  textTransform: "none",
  paddingBottom: 10,
  lineHeight: 1.5,
  textAlign: "left",
});
const Footer = () => {
  return (
    <Box
      sx={{
        backgroundColor: "#0A4954",
        pt: 10,
        pb: 3,
        mt: 10,
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Box
        sx={{
          width: "86%",
        }}
      >
        <Grid container spacing={2}>
          <Grid item xs={12} sm={3}>
            <FooterGridMainTitle>Our Products</FooterGridMainTitle>
            <FooterGridOptions>Fibre</FooterGridOptions>
            <FooterGridOptions>5G</FooterGridOptions>
            <FooterGridOptions>4G</FooterGridOptions>
            <FooterGridOptions>VoIP</FooterGridOptions>
            <FooterGridOptions>Hosting</FooterGridOptions>
          </Grid>
          <Grid item xs={12} sm={3}>
            <FooterGridMainTitle>Useful Links</FooterGridMainTitle>
            <FooterGridOptions>About us</FooterGridOptions>
            <FooterGridOptions>Terms & Conditions</FooterGridOptions>
          </Grid>
          <Grid item xs={12} sm={3}>
            <FooterGridMainTitle>Customer Zone</FooterGridMainTitle>
            <FooterGridOptions>Login</FooterGridOptions>
            <FooterGridOptions>Forgot Password</FooterGridOptions>
          </Grid>
          <Grid item xs={12} sm={3}>
            <FooterGridMainTitle>Connect with us</FooterGridMainTitle>
            <FooterGridOptions>Contact</FooterGridOptions>
            <FooterGridOptions>Help center</FooterGridOptions>
            <Box sx={{ display: "flex", gap: 3, mt: 1 }}>
              <Facebook
                sx={{
                  bgcolor: "white",
                  padding: 0.3,
                  borderRadius: 3,
                  fontSize: 26,
                }}
              />
              <Twitter
                sx={{
                  bgcolor: "white",
                  borderRadius: 3,
                  padding: 0.3,
                  fontSize: 26,
                }}
              />
              <Instagram
                sx={{
                  bgcolor: "white",
                  borderRadius: 3,
                  padding: 0.3,
                  fontSize: 26,
                }}
              />
            </Box>
          </Grid>
        </Grid>
        <Typography
          sx={{
            fontWeight: "700",
            fontSize: 30,
            color: "#fff",
            mb: 2,
            mt: 4,
          }}
        >
          Telkoweb
        </Typography>
        <Divider sx={{ backgroundColor: "#fff", mb: 2 }} />
        <Box
          display={"flex"}
          justifyContent={"flex-start"}
          alignItems={"center"}
        >
          <Typography
            sx={{
              fontWeight: "400",
              fontSize: 14,
              lineHeight: 1.5,
              paddingBottom: 1,
              color: "#E6E8E9",
              maxWidth: 650,
              textAlign: "left",
            }}
          >
            Copyright © 2024 Telkoweb (Pty) Ltd- All rights reserved.
          </Typography>
        </Box>
      </Box>
    </Box>
  );
};

export default Footer;
