import React from "react";
import img1 from "./img/ex1.jpg";

export default function ImageText() {
  const Styles = {
    ImgStyle: {
      display: 'flex',
      position: 'relative',
      flexDirection: 'column',
      justifyContent: 'center',
      cursor: 'pointer',
    },
    CoverStyle: {
      position: 'absolute',
      top: '0',
      width: '400px',
      height: '379px',
      textAlign: 'center',
      backgroundColor: 'rgba(0,0,0,0.2)',
      zIndex: '30',
    },
  };

  return (
    <div>
      <img src={img1} style={Styles.ImgStyle} alt="image" />
      <div className="headCover" style={Styles.CoverStyle}>
          test
      </div>
    </div>
  );
};

