import React, { useState } from 'react';
import styled from 'styled-components';

const Box = () => {
  const [showing, setShowing] = useState('none');
  // const showing = useState('none'); 
  // const setShowing = useState('none');
  const [describe, setDescribe] = useState();
  

  return(
    <Container>
      <ClickBox onClick={()=>setShowing('inline-block')}>
        ClickBox
      </ClickBox>
      <ClickBox onClick={()=>setShowing('inline-block')}>
        ClickBox
      </ClickBox>
      <ClickBox onClick={()=>setShowing('inline-block')}>
        ClickBox
      </ClickBox>


      <SampleBox showing={showing}>
        <div>{props=>props.describe}</div>
        <div onClick={()=>setShowing('none')}>X</div>
      </SampleBox>

    </Container>
  );
}


const Container = styled.div`
display: flex;
flex-direction : row;
column-gap : 100px;
width: 800px;
height: 600px;
background-color: #ebfbee;
`;

const SampleBox = styled.div`
display: ${props => props.showing};
// state를 display에 전달 -> SampleBox에 props값 전달. 
// showing props를 전달했다. 라고 표현
// ${props => props.showing}은 styled-components 규칙
width: 300px;
height: 300px;
background-color: rgba(0,0,0,0.3);
border: 3px solid white;
`;

const ClickBox = styled.div`
width: 300px;
height: 300px;
background-color: #d9480f;
border: 3px solid white;

`;
export default Box;