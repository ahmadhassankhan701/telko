"use client";
import ProductAvailabilitty from "@/components/Availability/ProductAvailabilitty";
import HeroSlider from "@/components/HeroSlider";
import FacilityCard from "@/components/Products/FacilityCard";
import LtetopupCard from "@/components/Products/LtetopupCard";
import ProductDetailCard from "@/components/Products/ProductDetailCard";
import { Box, styled, Typography, Button, Grid } from "@mui/material";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import React, { useState } from "react";
const theme = createTheme({
  typography: {
    fontFamily: "Poppins, sans-serif",
  },
});
const CustomActiveButton = styled(Button)({
  backgroundColor: "#FF0000",
  borderRadius: "20px",
  padding: "5px 20px",
  color: "white",
  "&:hover": {
    backgroundColor: "#FF0000",
    color: "white",
  },
});
const CustomButton = styled(Button)({
  backgroundColor: "transparent",
  color: "#000000",
  borderRadius: "20px",
  "&:hover": {
    backgroundColor: "transparent",
    color: "#000000",
  },
});
const page = () => {
  const [mode, setMode] = useState("simr");
  return (
    <ThemeProvider theme={theme}>
      <HeroSlider image={"heroImage2.png"} />
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
          Checkout our amazing LTE options below
        </Typography>
      </Box>
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          mt: 3,
        }}
      >
        <Button
          sx={{
            backgroundColor: "#FF0000",
            borderRadius: "10px",
            padding: "5px 20px",
            width: "207px",
            height: "68px",
            color: "white",
            "&:hover": {
              backgroundColor: "#FF0000",
              color: "white",
            },
          }}
        >
          Telkom LTE
        </Button>
        <Button
          sx={{
            backgroundColor: "transparent",
            color: "#000000",
            borderRadius: "20px",
            width: "207px",
            height: "68px",
            "&:hover": {
              backgroundColor: "transparent",
              color: "#000000",
            },
          }}
        >
          Vodacom LTE
        </Button>
        <Button
          sx={{
            backgroundColor: "transparent",
            color: "#000000",
            borderRadius: "20px",
            width: "207px",
            height: "68px",
            "&:hover": {
              backgroundColor: "transparent",
              color: "#000000",
            },
          }}
        >
          MTN LTE
        </Button>
      </Box>
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          mt: 3,
        }}
      >
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            gap: 2,
            flexDirection: { xs: "column", sm: "row" },
            padding: "10px 15px",
            backgroundColor: "#ffffff",
            borderRadius: "35px",
            boxShadow:
              "rgba(0, 0, 0, 0.19) 0px 10px 20px, rgba(0, 0, 0, 0.23) 0px 6px 6px;",
          }}
        >
          {mode === "simr" ? (
            <CustomActiveButton onClick={() => setMode("simr")}>
              SIM + ROUTER
            </CustomActiveButton>
          ) : (
            <CustomButton onClick={() => setMode("simr")}>
              SIM + ROUTER
            </CustomButton>
          )}
          {mode === "sim" ? (
            <CustomActiveButton onClick={() => setMode("sim")}>
              SIM ONLY
            </CustomActiveButton>
          ) : (
            <CustomButton onClick={() => setMode("sim")}>SIM ONLY</CustomButton>
          )}
        </Box>
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
            <ProductDetailCard />
          </Grid>
          <Grid
            item
            xs={12}
            sm={6}
            lg={4}
            display={"flex"}
            justifyContent={"center"}
          >
            <ProductDetailCard />
          </Grid>
          <Grid
            item
            xs={12}
            sm={6}
            lg={4}
            display={"flex"}
            justifyContent={"center"}
          >
            <ProductDetailCard />
          </Grid>
        </Grid>
      </Box>
      <Box display={"flex"} justifyContent={"center"} mt={10}>
        <Grid container sx={{ width: { xs: "90%", lg: "80%" } }}>
          <Grid
            item
            xs={12}
            sm={6}
            lg={4}
            display={"flex"}
            justifyContent={"center"}
          >
            <ProductDetailCard />
          </Grid>
          <Grid
            item
            xs={12}
            sm={6}
            lg={4}
            display={"flex"}
            justifyContent={"center"}
          >
            <ProductDetailCard />
          </Grid>
          <Grid
            item
            xs={12}
            sm={6}
            lg={4}
            display={"flex"}
            justifyContent={"center"}
          >
            <ProductDetailCard />
          </Grid>
        </Grid>
      </Box>
      <Box display={"flex"} justifyContent={"center"} mt={15}>
        <Box sx={{ width: { xs: "90%", lg: "71%" } }}>
          <FacilityCard />
        </Box>
      </Box>
      <Box display={"flex"} justifyContent={"center"} mt={15}>
        <Box sx={{ width: { xs: "90%", lg: "71%" } }}>
          <LtetopupCard />
        </Box>
      </Box>
    </ThemeProvider>
  );
};

export default page;
