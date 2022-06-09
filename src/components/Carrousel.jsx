import React from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import Typography from '@mui/material/Typography';
import "../styles/style.css";
import Data from '../data.json'
//import axios from 'axios'
// import required modules
import {Pagination } from "swiper";
import { Box } from "@mui/system";

export default function Carousel() {
    
    console.log(Data);
    
  return (
    <div className="Div">
      <Swiper        
        slidesPerView={4}
        spaceBetween={10}
        slidesPerGroup={4}
        pagination={{
          clickable: true,
        }}
        breakpoints={{
          640: {
            slidesPerView: 4,
            spaceBetween: 20,
          },
          768: {
            slidesPerView: 4,
            spaceBetween: 20,
          },
          1024: {
            slidesPerView: 4,
            spaceBetween: 20,
          },
        }}
        modules={[Pagination]}
        className="mySwiper SwipperFond"
      >
        {Data.map( date =>(
          <SwiperSlide key={date.id}>
          <Box className="Box">
          <img src={date.image} alt=""/>
          <Typography className="h3" sx={{color:"white"}}>
          {date.name}
          </Typography>
          </Box>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}