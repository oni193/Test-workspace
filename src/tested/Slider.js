import React, { useState, useEffect, useRef } from "react";
import Slide from "./Carousel2";
import styled from "styled-components";
import img1 from "./img/slide1.jpg";
import img2 from "./img/slide2.jpg";
import img3 from "./img/slide3.jpg";
import img4 from "./img/slide4.jpg";
import img5 from "./img/slide5.jpg";

const Container = styled.div`
  width: 900px;
  height: 300px;
  overflow: hidden; // 선을 넘어간 이미지들은 보이지 않도록 처리합니다.
  padding-bottom:300px;
`;
const Button = styled.button`
  all: unset;
  border: 1px solid black;
  padding: 0.5em 2em;
  color: black;
  cursor: pointer;
  /* &:hover {
    transition: all 0.3s ease-in-out;
    background-color: coral;
    color: #fff;
  } */
`;
const SliderContainer = styled.div`
  width: 25%;
  display: flex; //이미지들을 가로로 나열합니다.
`;

const TOTAL_SLIDES = 4;

export default function Slider() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const slideRef = useRef(null);
const nextSlide = () => {
    if (currentSlide >= TOTAL_SLIDES) { // 더 이상 넘어갈 슬라이드가 없으면 슬라이드를 초기화합니다.
      setCurrentSlide(currentSlide);
    } else {
      setCurrentSlide(currentSlide + 1);
    }
  };
  const prevSlide = () => {
    if (currentSlide === 0) {
      setCurrentSlide(currentSlide);
    } else {
      setCurrentSlide(currentSlide - 1);
    }
  };
  useEffect(() => {
    slideRef.current.style.transition = "all 0.5s ease-in-out";
    slideRef.current.style.transform = `translateX(-${currentSlide}00%)`; // 백틱을 사용하여 슬라이드로 이동하는 애니메이션을 만듭니다.
  }, [currentSlide]);
return (
    <Container>
      {currentSlide}
      <SliderContainer ref={slideRef}>
        <Slide img={img1} />
        <Slide img={img2} />
        <Slide img={img3} />
        <Slide img={img4} />
        <Slide img={img5} />
      </SliderContainer>
      <Button onClick={prevSlide}>이전</Button>
      <Button onClick={nextSlide}>이후</Button>
    </Container>
  );
}