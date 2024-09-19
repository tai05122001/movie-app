import React from "react";
import Brand from "./Brand";
import ItemMovieSlider from "../common/ItemMovieSlider";
import ItemPosterMovie from "../common/ItemPosterMovie";
import { Swiper, SwiperSlide } from "swiper/react";
import { GiSwordsEmblem, GiBearFace } from "react-icons/gi";
import { MdOutlineSort, MdFilterAlt, MdSmartToy } from "react-icons/md";
import { RiGhostFill } from "react-icons/ri";
import { FaFire, FaHeart } from "react-icons/fa";
import { FaRankingStar } from "react-icons/fa6";
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper/modules";
const Content: React.FC = () => {
  const list_item = [
    { icon: <FaFire color="white" size={20} />, title: "Trending" },
    { icon: <GiSwordsEmblem color="white" size={20} />, title: "Action" },
    { icon: <FaHeart color="white" size={20} />, title: "Romance" },
    { icon: <GiBearFace color="white" size={20} />, title: "Animation" },
    { icon: <RiGhostFill color="white" size={20} />, title: "Horror" },
    { icon: <MdSmartToy color="white" size={20} />, title: "Cartoon" },
    { icon: <FaRankingStar color="white" size={20} />, title: "Rating" },
    { icon: <FaFire color="white" size={20} />, title: "Trending" },
  ];
  const list_poster = [
    { image: "/img/movie-1.jpg", title: "The ides of march" },
    { image: "/img/movie-2.jpg", title: "Fant 4 stic" },
    { image: "/img/movie-3.jpg", title: "Ngucy" },
    { image: "/img/movie-4.jpg", title: "Alien" },
    { image: "/img/movie-5.jpg", title: "Anyone but you" },
    { image: "/img/movie-6.jpg", title: "Iron man 3" },
    { image: "/img/movie-7.jpg", title: "Ước muốn của con" },
  ];
  return (
    <div className="pt-4 items-center">
      <div className="brand flex justify-between">
        <div className="size-full grid grid-cols-5 mr-2 ml-2">
          <div className="pr-2 pl-2 col-span-2">
            <Brand
              content="The Adventure Of Blue Sword"
              image="/img/justice-league-fan-art-poster-4k-8k.jpg"
            />
          </div>
          <div className="pr-2 pl-2 col-span-3 ">
            <Brand
              content="Mortal Kombat 11"
              image="/img/mk11.png"
            />
          </div>
        </div>
      </div>
      <div className="flex mr-4 ml-4 mt-4">
        <Swiper
          key={`slider1`}
          slidesPerView={7}
          spaceBetween={20}
          pagination={{
            clickable: true,
          }}
          modules={[Pagination]}
          className="mySwiper"
        >
          {list_item.map((item, index) => (
            <SwiperSlide
              className="rounded-lg bg-transparent item-movie "
              key={`movie-item-${index}`}
            >
              <ItemMovieSlider icon={item.icon} title={item.title} />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
      <div className="pl-4 pr-4 mt-4 size-full flex justify-between">
        <span className="text-white text-2xl">Trending in Animation</span>
        <div className="flex bg-black items-center pl-6 pr-6 pt-3 pb-3 rounded-full">
          <MdOutlineSort size={16} color="white" className="mr-8" />
          <MdFilterAlt size={16} color="white" />
        </div>
      </div>
      <div className="flex mr-4 ml-4 mt-4">
        <Swiper
          key={`slider2`}
          slidesPerView={6}
          spaceBetween={20}
          pagination={{
            clickable: true,
          }}
          modules={[Pagination]}
          className="mySwiper"
        >
          {list_poster.map((item, index) => (
            <SwiperSlide
              className="rounded-lg bg-transparent"
              key={`movie-poster-${index}`}
            >
              <ItemPosterMovie
                image={item.image}
                title={item.title}
                key={`${index}`}
              />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};
export default Content;
