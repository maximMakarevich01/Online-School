import React, { useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import "../Slider/SliderStyle.scss";
import { Pagination, Navigation } from "swiper";

export default function Slider() {
  const [swiperRef, setSwiperRef] = useState(null);

  let appendNumber = 4;
  let prependNumber = 1;

  const prepend2 = () => {
    swiperRef.prependSlide([
      '<div class="swiper-slide">Slide ' + --prependNumber + "</div>",
      '<div class="swiper-slide">Slide ' + --prependNumber + "</div>",
    ]);
  };

  const prepend = () => {
    swiperRef.prependSlide(
      '<div class="swiper-slide">Slide ' + --prependNumber + "</div>"
    );
  };

  const append = () => {
    swiperRef.appendSlide(
      '<div class="swiper-slide">Slide ' + ++appendNumber + "</div>"
    );
  };

  const append2 = () => {
    swiperRef.appendSlide([
      '<div class="swiper-slide">Slide ' + ++appendNumber + "</div>",
      '<div class="swiper-slide">Slide ' + ++appendNumber + "</div>",
    ]);
  };

  return (
    <>
      <Swiper
        onSwiper={setSwiperRef}
        slidesPerView={2}
        centeredSlides={true}
        spaceBetween={30}
        pagination={{
          type: "fraction",
        }}
        navigation={true}
        modules={[Pagination, Navigation]}
        className="mySwiper"
      >
        <SwiperSlide>
          <div className="swiper-card">
            <div className="swiper-top">
              <span className="swiper-title">
                “Teachings of the great explore of truth, the master-builder of
                human happiness. no one rejects,dislikes, or avoids pleasure
                itself, pleasure itself”
              </span>
            </div>
            <div className="swiper-bottom">
              <div className="swiper-content">
                <img src="./img/swiper-1.png" alt="" className="swiper-img" />
              </div>
              <div className="swiper-text">
                <span className="swiper-name">Finlay Kirk</span>
                <p className="swiper-prof">Web Developer</p>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="swiper-card">
            <div className="swiper-top">
              <span className="swiper-title">
                “Complete account of the system and expound the actual Contrary
                to popular belief, Lorem Ipsum is not simply random text. It has
                roots”
              </span>
            </div>
            <div className="swiper-bottom">
              <div className="swiper-content">
                <img src="./img/swiper-2.png" alt="" className="swiper-img" />
              </div>
              <div className="swiper-text">
                <span className="swiper-name">Dannette P. Cervantes</span>
                <p className="swiper-prof">Web Design</p>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="swiper-card">
            <div className="swiper-top">
              <span className="swiper-title">
                “There are many variations of passages of Lorem Ipsum available,
                but the majority have suffered alteration in some form, by
                injected humour”
              </span>
            </div>
            <div className="swiper-bottom">
              <div className="swiper-content">
                <img src="./img/swiper-3.png" alt="" className="swiper-img" />
              </div>
              <div className="swiper-text">
                <span className="swiper-name">Clara R. Altman</span>
                <p className="swiper-prof">UI&UX Design</p>
              </div>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>

      <p className="append-buttons">
        <button onClick={() => prepend2()} className="prepend-2-slides">
          Prepend 2 Slides
        </button>
        <button onClick={() => prepend()} className="prepend-slide">
          Prepend Slide
        </button>
        <button onClick={() => append()} className="append-slide">
          Append Slide
        </button>
        <button onClick={() => append2()} className="append-2-slides">
          Append 2 Slides
        </button>
      </p>
    </>
  );
}
