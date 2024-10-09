import React from "react";
import SearchIcon from "@mui/icons-material/Search";
import { InputBase, styled } from "@mui/material";
const Search = styled("div")(({ theme }) => ({
  backgroundColor: "#fff",
  boxShadow: "0 2px 4px rgba(0, 0, 0, 0.1)",
  borderRadius: 10,
  position: "relative",
  marginLeft: 0,
  width: "100%",
  [theme.breakpoints.up("sm")]: {
    marginLeft: theme.spacing(1),
    width: "auto",
  },
}));
const SearchIconWrapper = styled("div")(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: "100%",
  position: "absolute",
  pointerEvents: "none",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  color: "#6E7990",
}));
const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: "#6E7990",
  fontSize: 16,
  width: "100%",
  "& .MuiInputBase-input": {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create("width"),
    [theme.breakpoints.up("sm")]: {
      width: "20ch",
      "&:focus": {
        width: "25ch",
      },
    },
  },
}));
const SearchInput = () => {
  return (
    <Search>
      <SearchIconWrapper>
        <SearchIcon sx={{ fontSize: "20px" }} />
      </SearchIconWrapper>
      <StyledInputBase
        placeholder="Search Patient"
        inputProps={{ "aria-label": "search" }}
      />
    </Search>
  );
};

export default SearchInput;
