import {
  ArrowDownward,
  ArrowUpward,
  CheckCircle,
  VerticalAlignTop,
} from "@mui/icons-material";
import {
  Box,
  Button,
  Divider,
  Grid,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Typography,
} from "@mui/material";
import React from "react";
const listArray = [
  "Up to 3Gbps speed",
  "Dual band wifi",
  "Connect up to 32 devices ",
];
const listNewArray = ["Costs R1000", "You save R1000", "Free-to-use"];
const LtetopupCard = () => {
  return (
    <Box
      sx={{
        bgcolor: "#ffffff",
        borderRadius: "25px",
        flexDirection: "column",
        gap: 10,
        boxShadow:
          "rgba(0, 0, 0, 0.19) 0px 10px 20px, rgba(0, 0, 0, 0.23) 0px 6px 6px;rgba(50, 50, 93, 0.25) 0px 50px 100px -20px, rgba(0, 0, 0, 0.3) 0px 30px 60px -30px;rgba(0, 0, 0, 0.12) 0px 1px 3px, rgba(0, 0, 0, 0.24) 0px 1px 2px;rgba(99, 99, 99, 0.2) 0px 2px 8px 0px",
        width: "100%",
        padding: 2,
        mb: 2,
        height: { xs: "1450px", sm: "1050px", md: "682px" },
      }}
    >
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          mt: 1,
          gap: 3,
          height: "20%",
        }}
      >
        <VerticalAlignTop sx={{ fontSize: 40, fontWeight: "bold" }} />
        <Typography fontSize={"40px"} fontWeight={"700"}>
          LTE Top-ups prices
        </Typography>
      </Box>
      <Divider sx={{ my: 3 }} />
      <Box height={"70%"}>
        <Box height={"100%"}>
          <Grid
            container
            display={"flex"}
            alignItems={"center"}
            mt={5}
            spacing={1}
          >
            <Grid
              item
              xs={12}
              sm={6}
              md={4}
              mb={2}
              display={"flex"}
              alignItems={"center"}
              justifyContent={"center"}
            >
              <Box
                display={"flex"}
                justifyContent={"center"}
                alignItems={"center"}
                flexDirection={"column"}
                border={"1px solid gray"}
                borderRadius={"20px"}
                width={"313px"}
                height={"150px"}
              >
                <Typography
                  sx={{
                    fontSize: "36px",
                    fontWeight: "600",
                    color: "#000000",
                  }}
                >
                  2GB
                </Typography>
                <Button
                  sx={{
                    fontSize: "16px",
                    fontWeight: "600",
                    color: "#000000",
                    bgcolor: "#EFEEEE",
                    borderRadius: "30px",
                    ml: 2,
                    my: 2,
                    width: "170px",
                    "&:hover": {
                      color: "#000000",
                      bgcolor: "#EFEEEE",
                    },
                  }}
                  variant="contained"
                  size="small"
                >
                  R20
                </Button>
              </Box>
            </Grid>
            <Grid
              item
              xs={12}
              md={4}
              sm={6}
              mb={2}
              display={"flex"}
              alignItems={"center"}
              justifyContent={"center"}
            >
              <Box
                display={"flex"}
                justifyContent={"center"}
                alignItems={"center"}
                flexDirection={"column"}
                border={"1px solid gray"}
                borderRadius={"20px"}
                width={"313px"}
                height={"150px"}
              >
                <Typography
                  sx={{
                    fontSize: "36px",
                    fontWeight: "600",
                    color: "#000000",
                  }}
                >
                  2GB
                </Typography>
                <Button
                  sx={{
                    fontSize: "16px",
                    fontWeight: "600",
                    color: "#000000",
                    bgcolor: "#EFEEEE",
                    borderRadius: "30px",
                    ml: 2,
                    my: 2,
                    width: "170px",
                    "&:hover": {
                      color: "#000000",
                      bgcolor: "#EFEEEE",
                    },
                  }}
                  variant="contained"
                  size="small"
                >
                  R20
                </Button>
              </Box>
            </Grid>
            <Grid
              item
              xs={12}
              md={4}
              sm={6}
              mb={2}
              display={"flex"}
              alignItems={"center"}
              justifyContent={"center"}
            >
              <Box
                display={"flex"}
                justifyContent={"center"}
                alignItems={"center"}
                flexDirection={"column"}
                border={"1px solid gray"}
                borderRadius={"20px"}
                width={"313px"}
                height={"150px"}
              >
                <Typography
                  sx={{
                    fontSize: "36px",
                    fontWeight: "600",
                    color: "#000000",
                  }}
                >
                  2GB
                </Typography>
                <Button
                  sx={{
                    fontSize: "16px",
                    fontWeight: "600",
                    color: "#000000",
                    bgcolor: "#EFEEEE",
                    borderRadius: "30px",
                    ml: 2,
                    my: 2,
                    width: "170px",
                    "&:hover": {
                      color: "#000000",
                      bgcolor: "#EFEEEE",
                    },
                  }}
                  variant="contained"
                  size="small"
                >
                  R20
                </Button>
              </Box>
            </Grid>
          </Grid>
          <Grid
            container
            display={"flex"}
            alignItems={"center"}
            mt={5}
            spacing={1}
          >
            <Grid
              item
              xs={12}
              md={4}
              sm={6}
              mb={2}
              display={"flex"}
              alignItems={"center"}
              justifyContent={"center"}
            >
              <Box
                display={"flex"}
                justifyContent={"center"}
                alignItems={"center"}
                flexDirection={"column"}
                border={"1px solid gray"}
                borderRadius={"20px"}
                width={"313px"}
                height={"150px"}
              >
                <Typography
                  sx={{
                    fontSize: "36px",
                    fontWeight: "600",
                    color: "#000000",
                  }}
                >
                  2GB
                </Typography>
                <Button
                  sx={{
                    fontSize: "16px",
                    fontWeight: "600",
                    color: "#000000",
                    bgcolor: "#EFEEEE",
                    borderRadius: "30px",
                    ml: 2,
                    my: 2,
                    width: "170px",
                    "&:hover": {
                      color: "#000000",
                      bgcolor: "#EFEEEE",
                    },
                  }}
                  variant="contained"
                  size="small"
                >
                  R20
                </Button>
              </Box>
            </Grid>
            <Grid
              item
              xs={12}
              md={4}
              sm={6}
              mb={2}
              display={"flex"}
              alignItems={"center"}
              justifyContent={"center"}
            >
              <Box
                display={"flex"}
                justifyContent={"center"}
                alignItems={"center"}
                flexDirection={"column"}
                border={"1px solid gray"}
                borderRadius={"20px"}
                width={"313px"}
                height={"150px"}
              >
                <Typography
                  sx={{
                    fontSize: "36px",
                    fontWeight: "600",
                    color: "#000000",
                  }}
                >
                  2GB
                </Typography>
                <Button
                  sx={{
                    fontSize: "16px",
                    fontWeight: "600",
                    color: "#000000",
                    bgcolor: "#EFEEEE",
                    borderRadius: "30px",
                    ml: 2,
                    my: 2,
                    width: "170px",
                    "&:hover": {
                      color: "#000000",
                      bgcolor: "#EFEEEE",
                    },
                  }}
                  variant="contained"
                  size="small"
                >
                  R20
                </Button>
              </Box>
            </Grid>
            <Grid
              item
              xs={12}
              md={4}
              sm={6}
              mb={2}
              display={"flex"}
              alignItems={"center"}
              justifyContent={"center"}
            >
              <Box
                display={"flex"}
                justifyContent={"center"}
                alignItems={"center"}
                flexDirection={"column"}
                border={"1px solid gray"}
                borderRadius={"20px"}
                width={"313px"}
                height={"150px"}
              >
                <Typography
                  sx={{
                    fontSize: "36px",
                    fontWeight: "600",
                    color: "#000000",
                  }}
                >
                  2GB
                </Typography>
                <Button
                  sx={{
                    fontSize: "16px",
                    fontWeight: "600",
                    color: "#000000",
                    bgcolor: "#EFEEEE",
                    borderRadius: "30px",
                    ml: 2,
                    my: 2,
                    width: "170px",
                    "&:hover": {
                      color: "#000000",
                      bgcolor: "#EFEEEE",
                    },
                  }}
                  variant="contained"
                  size="small"
                >
                  R20
                </Button>
              </Box>
            </Grid>
          </Grid>
        </Box>
      </Box>
    </Box>
  );
};

export default LtetopupCard;
