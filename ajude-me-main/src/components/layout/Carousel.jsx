import React, { useState } from "react";
import { SliderData } from "./SliderData";
import { FaArrowAltCircleRight, FaArrowAltCircleLeft } from "react-icons/fa";

const Carousel = ({ slides }) => {
  const [current, setCurrent] = useState(0);
  const length = slides.length;

  const nextSlide = () => {
    setCurrent(current === length - 1 ? 0 : current + 1);
  };

  const prevSlide = () => {
    setCurrent(current === 0 ? length - 1 : current - 1);
  };

  if (!Array.isArray(slides) || slides.length <= 0) {
    return null;
  }

  return (
    <section className="slider">
      <FaArrowAltCircleLeft
        className="left-arrow"
        onClick={prevSlide}
      />
      <FaArrowAltCircleRight
        className="right-arrow"
        onClick={nextSlide}
      />
      {SliderData.map((slide, index) => {
        // slide.text = slide.text.replace(/\n/g, <br />);
        return (
          <div
            className={index === current ? "slide active" : "slide"}
            key={index}
          >
            {index === current && <p className="text-left">{slide.text}</p>}
            {index === 3 && (
              <a
                href="https://site.cfp.org.br/wp-content/uploads/2012/07/codigo-de-etica-psicologia.pdf"
                target="_blank"
              >
                <button className="px-4 py-2 mt-2 text-[#272928] text-transparent bg-clip-text bg-gradient-to-r from-purple-500 via-fuchsia-400 to-blue-400 rounded-[64px] hover:bg-[#79128b] transition duration-300 ease-in-out">
                  Saiba mais
                </button>
              </a>
            )}
          </div>
        );
      })}
    </section>
  );
};
export default Carousel;
