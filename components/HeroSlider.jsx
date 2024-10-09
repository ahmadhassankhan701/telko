import { Box, Button, Typography } from "@mui/material";
import React from "react";

const HeroSlider = ({ title, subtitle, btn, image }) => {
  const imagure = image || "heroImage1.png";
  return (
    <Box
      sx={{
        backgroundImage: `url(/${imagure})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        height: { xs: "400px", md: "600px" },
        display: "flex",
        justifyContent: "center",
        flexDirection: "column",
        width: "100%",
        marginTop: "50px",
      }}
    >
      <Box
        display={"flex"}
        alignItems={"center"}
        gap={10}
        sx={{
          ml: { xs: 4, sm: 8, md: 10, lg: 15 },
        }}
        mb={3}
      >
        <Box>
          <Typography
            variant="h2"
            component={"h2"}
            sx={{
              fontSize: {
                xs: 34,
                sm: 40,
              },
              fontWeight: 700,
              color: "#2EFE09",
              letterSpacing: -0.8,
              textTransform: "uppercase",
              my: 1,
              lineHeight: 1.5,
            }}
          >
            Fibre internet
          </Typography>
          <Typography
            variant="p"
            component={"p"}
            sx={{
              fontSize: "18px",
              maxWidth: 620,
              paddingTop: 2,
              paddingBottom: 5,
              color: "#fff",
              fontWeight: 400,
            }}
          >
            Get connected at your home or small office
          </Typography>
          <Box display={"flex"} alignItems={"center"}>
            <Button
              variant={"contained"}
              size="large"
              sx={{
                bgcolor: "#FF0000",
                fontSize: { xs: 12, sm: 16 },
                textTransform: "none",
                borderRadius: 8,
                "&:hover": {
                  bgcolor: "#FF0000",
                },
              }}
            >
              Get fibre
            </Button>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default HeroSlider;
