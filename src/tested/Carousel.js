import React from 'react';
import styled from 'styled-components';


const Carousel = () => {
const slider = document.querySelector('.slider');
const images = document.querySelectorAll('.slider div');

const prevBtn = document.querySelector('#prevBtn');
const nextBtn = document.querySelector('#nextBtn');

const imgElement = document.getElementsByTagName('div');
const divLen = imgElement.length;
let counter = 0;
const size = 900;
slider.style.transform = 'translateX(' + (-size * counter) + 'px)';



// Buttons click function
nextBtn.addEventListener('click', () => {
    if(counter === div.length -1) {
        // nextBtn.style.display = 'none';
        return;
    }
    slider.style.transition = "transform 0.4s ease-in-out";
    counter++;
    slider.style.transform = 'translateX(' + (-size * counter) + 'px)'
});

prevBtn.addEventListener('click', () => {
  if(counter == 0) {
    //   prevBtn.style.display = 'none';
      return;
    }
  slider.style.transition = "transform 0.4s ease-in-out";
  counter--;
  slider.style.transform = 'translateX(' + (-size * counter) + 'px)';
});


// Button display : none 
slider.addEventListener('transitionstart', () => {
  console.log(images[counter]);
  console.log(images[images.length - 1].id);  
  if(images[counter].id === 'last') {
    prevBtn.style.display='block';
    nextBtn.style.display='none';
  } else if(images[counter].id === 'first') {
    prevBtn.style.display='none';
    nextBtn.style.display='block';    
  } else {
    prevBtn.style.display='block';
    nextBtn.style.display='block';
  }
});



  const Container = styled.div`
    width: 900px;
    margin: 30px auto;
    border: 0px solid #000;
    overflow: hidden;
    position: relative;
  `;
  const Slider = styled.div`
    display: flex;
    width: 100%;
    height: 450px;
  `;
  const Box = styled.div`
  width: 900px;
  height: 450px;
  background-color: #ebfbee;
  border: 1px solid black;
  `;
  const Box2 = styled.div`
  width: 900px;
  height: 450px;
  background-color: #fff9db;
  border: 1px solid black;
  `;
  const PrevBtn = styled.button`
    display: none;
    position:absolute;
    top: 50%;
    left: 0;
    transform: translate(0%, -50%);
    width: 50px;
    height: 36px;
    background: rgba(143, 143, 143, 0.2) no-repeat;
    text-indent: -9999px;
    `;
  const NextBtn = styled.button`
    display: block;
    position:absolute;
    top: 50%;
    right: 0;
    transform: translate(0%, -50%);
    width: 50px;
    height: 36px;
    background: rgba(143, 143, 143, 0.2) no-repeat;
    text-indent: -9999px;
      `;
  return(
    <Container>
    <Slider>
      {/* <!-- <img src="img/slide5.jpg" id="lastClone"> --> */}
      <Box class="img" id="first" />
      <Box2 class="img" />
      <Box class="img" />
      <Box2 class="img" />
      <Box class="img" id="last" />
      {/* <!-- <img src="img/slide1.jpeg" id="firstClone"> --> */}
    </Slider>
    <PrevBtn id="prevBtn" class ="btn"></PrevBtn>
    <NextBtn id="nextBtn" class ="btn"></NextBtn>
  </Container>
  );
};

export default Carousel;