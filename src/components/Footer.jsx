import { Box, Typography } from "@mui/material";
import React from "react";
import ConnectingAirportsIcon from '@mui/icons-material/ConnectingAirports';
import '../styles/style.css'
import {Link as LinkRouter} from "react-router-dom"
import InstagramIcon from '@mui/icons-material/Instagram';
import TwitterIcon from '@mui/icons-material/Twitter';

function Footer(){
    return (
        <Box className="Footer">
            <Box>
                <Typography>
                <LinkRouter to="https://www.instagram.com/"> <InstagramIcon sx={{
                    color:"white"
                }}/></LinkRouter>
                </Typography>
                <Typography>
                <LinkRouter to="https://twitter.com/home"> <TwitterIcon sx={{
                    color:"white"
                }}/> </LinkRouter>
                </Typography>
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