import { Box } from "@chakra-ui/react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import BannerItem from "./BannerItem";
import { arrayBanner } from "../dummydata/data";
const Banner = () => {
  return (
    <Box bg="secondary_color">
      <Swiper slidesPerView={5} spaceBetween={30} className="slide-main">
        {arrayBanner.map((banner, index) => (
          <SwiperSlide className="slide-banner" key={banner.id}>
            <BannerItem banner={banner} />
          </SwiperSlide>
        ))}
      </Swiper>
    </Box>
  );
};

export default Banner;
