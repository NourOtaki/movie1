import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import img1 from "../../assets/img/Beast & Belle (3).jpeg";
import img2 from "../../assets/img/Beast & Belle (4).jpeg";
import img3 from "../../assets/img/Beast & Belle (5).jpeg";
import img4 from "../../assets/img/Minions.jpeg";
import img5 from "../../assets/img/تنزيل.jpeg";
function Home() {
  return (
    <div className="h-dvh">
      <Swiper
        centeredSlides={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        direction={"vertical"}
        pagination={{
          clickable: true,
        }}
        modules={[Pagination, Autoplay]}
        className="mySwiper h-full"
      >
        <SwiperSlide>
          <img src={img2} className="w-full h-full" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={img3} className="w-full h-full" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={img1} className="w-full h-full" />
        </SwiperSlide>
      </Swiper>
    </div>
  );
}

export default Home;
