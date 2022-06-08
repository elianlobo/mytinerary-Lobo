import React from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "../styles/style.css";
import Data from '../data.json'
//import axios from 'axios'
// import required modules
import { Pagination } from "swiper";
import { Box } from "@mui/system";

export default function Carousel() {
    
    console.log(Data);
    
  return (
    <>
      <Swiper        
        slidesPerView={4}
        spaceBetween={30}
        pagination={{
          clickable: true,
        }}
        modules={[Pagination]}
        className="mySwiper"
      >
        {Data.map( date =>(
          <SwiperSlide>
          <Box>
          {date.image}
          </Box>
          {date.name}
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  );
}