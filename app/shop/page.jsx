"use client";
import ProductAvailabilitty from "@/components/Availability/ProductAvailabilitty";
import HeroSlider from "@/components/HeroSlider";
import CategoryCard from "@/components/Products/CategoryCard";
import ShopItemCard from "@/components/Products/ShopItemCard";
import { Box, Grid, Typography, Button } from "@mui/material";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import React from "react";
const theme = createTheme({
  typography: {
    fontFamily: "Poppins, sans-serif",
  },
});
const page = () => {
  return (
    <ThemeProvider theme={theme}>
      <HeroSlider image={"heroImage5.png"} />
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          flexDirection: "column",
          mt: 3,
        }}
      >
        <Typography
          sx={{
            fontSize: {
              xs: 20,
              sm: 30,
            },
            fontWeight: 700,
            color: "#000000",
            letterSpacing: -0.8,
            textTransform: "none",
            mb: 1,
          }}
        >
          Online Shop
        </Typography>
        <Typography
          sx={{
            fontSize: {
              xs: 12,
              sm: 16,
            },
            fontWeight: 700,
            color: "#000000",
            letterSpacing: -0.8,
            textTransform: "none",
            mb: 1,
          }}
        >
          Looking for a device check our devices below
        </Typography>
      </Box>
      <Box display={"flex"} justifyContent={"center"} mt={15}>
        <Grid container sx={{ width: { xs: "90%", lg: "80%" } }}>
          <Grid
            item
            xs={12}
            sm={6}
            lg={4}
            display={"flex"}
            justifyContent={"center"}
          >
            <ShopItemCard />
          </Grid>
          <Grid
            item
            xs={12}
            sm={6}
            lg={4}
            display={"flex"}
            justifyContent={"center"}
          >
            <ShopItemCard />
          </Grid>
          <Grid
            item
            xs={12}
            sm={6}
            lg={4}
            display={"flex"}
            justifyContent={"center"}
          >
            <ShopItemCard />
          </Grid>
        </Grid>
      </Box>
    </ThemeProvider>
  );
};

export default page;
