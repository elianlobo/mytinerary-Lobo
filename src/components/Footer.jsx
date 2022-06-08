import { Box, Typography } from "@mui/material";
import React from "react";
import ConnectingAirportsIcon from '@mui/icons-material/ConnectingAirports';
import '../styles/style.css'

function Footer(){
    return (
        <Box className="Footer">
            <Box>

            </Box>
            <Box>
                <Typography>
                2022 © MyTinerary 
                </Typography>
            </Box>
            <Box>
            <ConnectingAirportsIcon sx={{ mr: 1 }} />
            </Box>
        </Box>
    )
}

export default Footer