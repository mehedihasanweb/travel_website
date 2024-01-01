import React from "react";
import Slide from "react-slick";
import ava01 from "../../assets/images/ava-1.jpg";
import ava02 from "../../assets/images/ava-2.jpg";
import ava03 from "../../assets/images/ava-3.jpg";

const Testimonials = () => {
  const settings = {
    dots: true,
    infinite: true,
    autoplay: true,
    speed: 2000,
    swipeToSlide: true,
    autoplaySpeed: true,
    slidesToShow: 3,

    responsive: [
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 2,
          slideToScroll: 1,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 576,
        settings: {
          slidesToShow: 1,
          shidesToScroll: 2,
        },
      },
    ],
  };

  return (
    <Slide {...settings}>
      <div className="testimonial py-4 px-3">
        <p>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eaque
          laboriosam minima corrupti pariatur modi illum fuga provident rem
          culpa facilis numquam, commodi aperiam ea tempore.
        </p>

        <div className="d-flex align-items-center gap-4 mt-3">
          <img src={ava01} alt="" className="w-25 h-25 rounded-2" />
          <div>
            <h6 className="mb-0 mt-3">John Doe</h6>
            <p>customer</p>
          </div>
        </div>
      </div>
      <div className="testimonial py-4 px-3">
        <p>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eaque
          laboriosam minima corrupti pariatur modi illum fuga provident rem
          culpa facilis numquam, commodi aperiam ea tempore.
        </p>

        <div className="d-flex align-items-center gap-4 mt-3">
          <img src={ava02} alt="" className="w-25 h-25 rounded-2" />
          <div>
            <h6 className="mb-0 mt-3">Lia Frank lin</h6>
            <p>customer</p>
          </div>
        </div>
      </div>
      <div className="testimonial py-4 px-3">
        <p>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eaque
          laboriosam minima corrupti pariatur modi illum fuga provident rem
          culpa facilis numquam, commodi aperiam ea tempore.
        </p>

        <div className="d-flex align-items-center gap-4 mt-3">
          <img src={ava03} alt="" className="w-25 h-25 rounded-2" />
          <div>
            <h6 className="mb-0 mt-3">John Doe</h6>
            <p>customer</p>
          </div>
        </div>
      </div>
      <div className="testimonial py-4 px-3">
        <p>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eaque
          laboriosam minima corrupti pariatur modi illum fuga provident rem
          culpa facilis numquam, commodi aperiam ea tempore.
        </p>

        <div className="d-flex align-items-center gap-4 mt-3">
          <img src={ava02} alt="" className="w-25 h-25 rounded-2" />
          <div>
            <h6 className="mb-0 mt-3">Lia Frank lin</h6>
            <p>customer</p>
          </div>
        </div>
      </div>
    </Slide>
  );
};

export default Testimonials;
