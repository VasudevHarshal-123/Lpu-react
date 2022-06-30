import React from "react";
import Slider from "react-slick";
import PopularCard from "./PopularCard";
import "./styles/PopularSlider.css";
import { useCartContext } from "./CartContext";
import CircularProgress from "@mui/material/CircularProgress";

const settings = {
    classNname: "center",
    infinite: true,
    centerPadding: "60px",
    autoplay: true,
    slidesToShow: 3,
    speed: 500,
};

function PopularSlider() {
    const { popularProducts } = useCartContext();

    const getSlider = () => {
        if (!popularProducts) 
        return <CircularProgress />;
        
        return (
            <Slider {...settings}>
                {
                    popularProducts.map((product, index) => {
                        return <PopularCard key={index} product={product} />;
                    })}
            </Slider>
        );
    };

    return <section id="popular-slider-wrapper">{getSlider()}</section>;
}

export default PopularSlider;
