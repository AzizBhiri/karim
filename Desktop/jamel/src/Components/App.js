import React from "react";
import Nav from "./Nav";
import Description from "./Description";
import Rentabilite from "./Rentabilite";
import Carousel from "./Carousel";
import Info from "./Info";
import Footer from "./Footer";
import data from "../data";
import "../Styles/App.css";

const captionStyle = {
  fontSize: "2.5em",
  fontWeight: "200",
  fontFamily: "'Dosis', sans-serif",
};

const slideNumberStyle = {
  fontSize: "30px",
  fontWeight: "200",
  fontFamily: "'Dosis', sans-serif",
};

function App() {
  return (
    <div className="app">
      <Nav />
      <Description />
      <Carousel
        data={data}
        time={3000}
        width="1000px"
        height="500px"
        captionStyle={captionStyle}
        radius="10px"
        slideNumber={true}
        slideNumberStyle={slideNumberStyle}
        captionPosition="bottom"
        automatic={true}
        dots={true}
        pauseIconColor="white"
        pauseIconSize="40px"
        slideBackgroundColor="darkgrey"
        slideImageFit="cover"
        thumbnails={true}
        thumbnailWidth="100px"
        showNavBtn={true}
        style={{
          textAlign: "center",
          maxWidth: "850px",
          margin: "40px auto",
        }}
      />
      <Rentabilite />
      <Info />
      <Footer />
    </div>
  );
}

export default App;
