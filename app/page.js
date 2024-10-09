"use client";
import ProductAvailabilitty from "@/components/Availability/ProductAvailabilitty";
import HeroSlider from "@/components/HeroSlider";
import CategoryCard from "@/components/Products/CategoryCard";
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
      <HeroSlider image={"heroImage1.png"} />
      <Box
        sx={{
          bgcolor: "#ECE9E9",
          height: "200px",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <ProductAvailabilitty />
      </Box>
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
          Internet connectivity made simple
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
          From a lot of options to choose from
        </Typography>
      </Box>
      <Grid container height={"480px"} mt={2}>
        <Grid
          item
          xs={12}
          sm={8}
          bgcolor={"#0A93AB"}
          display={"flex"}
          alignItems={"flex-start"}
          flexDirection={"column"}
          justifyContent={"center"}
        >
          <Box ml={5}>
            <Typography
              sx={{
                fontSize: {
                  xs: 20,
                  sm: 30,
                },
                fontWeight: 700,
                color: "#FFFFFF",
                letterSpacing: -0.8,
                textTransform: "none",
                lineHeight: "43.57px",
                mb: 1,
              }}
            >
              Our fiber internet
            </Typography>
            <Typography
              sx={{
                fontSize: {
                  xs: 14,
                  sm: 18,
                },
                fontWeight: 700,
                color: "#FFFFFF",
                letterSpacing: -0.8,
                textTransform: "none",
                lineHeight: "43.57px",
                width: { xs: "250px", sm: "445px" },
                mb: 1,
              }}
            >
              We are available all over the country with a lot of options that
              are affordable and with 24/7 support you can have a piece of mind.
            </Typography>
            <Typography
              sx={{
                fontSize: {
                  xs: 20,
                  sm: 30,
                },
                fontWeight: 700,
                color: "#FFFFFF",
                letterSpacing: -0.8,
                textTransform: "none",
                lineHeight: "43.57px",
                mb: 1,
              }}
            >
              Starting from R449
            </Typography>
            <Button
              variant={"contained"}
              size="large"
              sx={{
                bgcolor: "#FF0000",
                fontSize: { xs: 12, sm: 14 },
                textTransform: "none",
                borderRadius: 8,
                width: 250,
                height: 60,
                mt: 1,
                "&:hover": {
                  bgcolor: "#FF0000",
                },
              }}
            >
              Get yours today
            </Button>
          </Box>
        </Grid>
        <Grid
          item
          xs={12}
          sm={4}
          sx={{
            backgroundImage: `url(/watch.png)`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        ></Grid>
      </Grid>
      <Box width={"80%"} alignSelf={"center"} mt={5}>
        <Grid container mt={5} spacing={1}>
          <Grid
            item
            xs={12}
            sm={6}
            lg={4}
            mb={1}
            display={"flex"}
            justifyContent={"center"}
            alignItems={"center"}
          >
            <CategoryCard />
          </Grid>
          <Grid
            item
            xs={12}
            sm={6}
            lg={4}
            mb={1}
            display={"flex"}
            justifyContent={"center"}
            alignItems={"center"}
          >
            <CategoryCard />
          </Grid>
          <Grid
            item
            xs={12}
            sm={6}
            lg={4}
            mb={1}
            display={"flex"}
            justifyContent={"center"}
            alignItems={"center"}
          >
            <CategoryCard />
          </Grid>
        </Grid>
      </Box>
      <Box width={"80%"} alignSelf={"center"} mb={5}>
        <Grid container mt={5} spacing={1}>
          <Grid
            item
            xs={12}
            sm={6}
            mb={1}
            display={"flex"}
            justifyContent={"center"}
            alignItems={"center"}
          >
            <CategoryCard />
          </Grid>
          <Grid
            item
            xs={12}
            sm={6}
            mb={1}
            display={"flex"}
            justifyContent={"center"}
            alignItems={"center"}
          >
            <CategoryCard />
          </Grid>
        </Grid>
      </Box>
    </ThemeProvider>
  );
};

export default page;
