import { COLORS } from "@/styles/colors";
import  Box from "@mui/material/Box";
import React from "react";
import Logo from "./Logo";
import SearchBar from "./SearchBar";
import Typography from "@mui/material/Typography";
import HeaderLink from "./HeaderLink";

const Header = () => {
    return(
        <Box 
        sx={{
         backgroundColor: COLORS.darkBlue,
         color: COLORS.white,
         display: "flex",
         flexDirection: "column"}}>
            <Box sx={{display: "flex", padding: "1rem", justifyContent:"space-between"}}>
                <Logo />
                <SearchBar />

                <Box sx={{display: "flex"}}>
                    <HeaderLink href="/Cart">
                        <Typography>Returns</Typography>
                        <Typography>& Orders</Typography>
                    </HeaderLink>
                </Box>
            </Box>
        </Box>
    );
};

export default Header