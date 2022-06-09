import { Box, Typography } from "@mui/material";
import React from "react";
import '../styles/style.css';
import {Link as LinkRouter} from "react-router-dom";

//Realizo las importaciones 

function Body(){  //Declaro un componente funcional
    return (
        <Box className="Body" sx={{ display: 'flex', 
            bgcolor:'#DAF7A6',
        }}> 
            <Typography variant="h3" component="h2" sx={{
               color:'#CC3333', 
            }}>
                "Find your perfect trip, designed by insiders who know and love their cities!"
            </Typography>
            
            <Typography variant="h5" className="Typo">
                <LinkRouter to='/hola'  className="h5"> Go </LinkRouter>
            </Typography>
        </Box>
    )
}
//Utilizo la etiqueta de MUI de <box> que es igual a un <div>
//Utilizo la etiqueta de MUI de <Typography> en la cual va texto dentro que adquiere un variant h1-h2-p etc
export default Body