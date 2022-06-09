import { Typography } from "@mui/material";
import React from "react";
import { Box } from "@mui/system";
import "../styles/style.css";

export default function Error() {
    return (
        <>
            <Box className="Error">
                <Typography>
                    Not Found
                </Typography>
            </Box>
        </>
    )
}