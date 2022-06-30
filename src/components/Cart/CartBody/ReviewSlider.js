import React from "react";
import ReviewCard from "./ReviewCard";
import Slider from "react-slick";
import {useCartContext} from "./CartContext";
import CircularProgress from "@mui/material/CircularProgress";

const settings = {
    className: "center",
    infinite: true,
    autoplay: true,
    centerPadding: "60px",
    slidesToShow: 3,
    speed: 500
  };


function ReviewSlider() {

    const {reviews} = useCartContext();
    

    const getReviewSlider = () => {
        if (!reviews) 
        return <CircularProgress />;

        return (
            <Slider {...settings}>
                {reviews.map((review,index)=>{
                    return <ReviewCard review={review} key={index}/>
                })}
            </Slider>
        )
    };
    return <section id="review-slider-wrapper">{getReviewSlider()}</section>;
}

export default ReviewSlider;
