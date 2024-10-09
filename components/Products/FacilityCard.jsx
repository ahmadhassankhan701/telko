import { ArrowDownward, ArrowUpward, CheckCircle } from "@mui/icons-material";
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
const FacilityCard = () => {
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
        height: { xs: "1150px", sm: "830px", md: "682px" },
      }}
    >
      <Box
        sx={{
          display: "flex",
          alignItems: "flex-end",
          mt: 1,
          gap: 2,
          height: "20%",
        }}
      >
        <img src={"/router.png"} />
        <Typography fontSize={"40px"} fontWeight={"700"}>
          5G Router
        </Typography>
      </Box>
      <Divider sx={{ my: 3 }} />
      <Box height={"70%"}>
        <Box height={"100%"}>
          <Grid
            container
            height={"100%"}
            display={"flex"}
            alignItems={"center"}
          >
            <Grid item xs={12} md={4}>
              <Box
                display={"flex"}
                justifyContent={"center"}
                alignItems={"center"}
              >
                <img src="/5grouter.png" />
              </Box>
            </Grid>
            <Grid item xs={12} md={8}>
              <Box
                mt={3}
                display={"flex"}
                flexDirection={"column"}
                justifyContent={"center"}
              >
                <Box
                  width={"100%"}
                  display={"flex"}
                  flexDirection={"row"}
                  alignItems={"center"}
                  justifyContent={"space-around"}
                  flexWrap={"wrap"}
                >
                  <List>
                    {listArray.map((item, index) => (
                      <ListItem key={index}>
                        <ListItemIcon>
                          <CheckCircle
                            sx={{
                              fontSize: "30px",
                              fontWeight: "600",
                              color: "#000",
                            }}
                          />
                        </ListItemIcon>
                        <ListItemText
                          sx={{ fontSize: "20px", fontWeight: "600" }}
                          disableTypography
                          primary={item}
                        />
                      </ListItem>
                    ))}
                  </List>
                  <List>
                    {listNewArray.map((item, index) => (
                      <ListItem key={index}>
                        <ListItemIcon>
                          <CheckCircle
                            sx={{
                              fontSize: "30px",
                              fontWeight: "600",
                              color: "#000",
                            }}
                          />
                        </ListItemIcon>
                        <ListItemText
                          sx={{ fontSize: "20px", fontWeight: "600" }}
                          disableTypography
                          primary={item}
                        />
                      </ListItem>
                    ))}
                  </List>
                </Box>
                <Typography
                  sx={{
                    fontSize: "18px",
                    fontWeight: "600",
                    mt: 2,
                    textAlign: "left",
                    ml: { xs: 4, lg: 13 },
                  }}
                >
                  Please note free router is only applicable to uncapped
                  products that with SIM + Device options only
                </Typography>
              </Box>
            </Grid>
          </Grid>
        </Box>
      </Box>
    </Box>
  );
};

export default FacilityCard;
