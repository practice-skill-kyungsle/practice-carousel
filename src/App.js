import { useState, useEffect, useRef, Fragment } from "react";
import Carousel from "./Carousel";
import "./App.css";

const App = () => {
  const slides = [
    {
      title: "Slide #1",
      content: () => <p>You can add any type of content here!</p>,
    },
    {
      title: "Slide #2 (wrapped in a div)",
      content: () => {
        return (
          <div className="customSlide">
            <h3>2</h3>
            <p>I'm just another slide</p>
            <p>
              Wrapped in a <code>div</code>!
            </p>
          </div>
        );
      },
    },
    {
      content: () => (
        <div className="withImage">
          <img src="https://justacoding.blog/wp-content/uploads/2021/10/loop.jpg"></img>
        </div>
      ),
    },
    {
      title: "Slide #4",
      content: () => (
        <Fragment>
          <h2>Style me!</h2> <small>...in any way you please</small>
        </Fragment>
      ),
    },
    {
      title: "Slide #5",
      content: () => <h3>I'm the final slide...</h3>,
    },
  ];

  return (
    <Fragment>
      <h3>Infinite Scroll</h3>
      <p>
        Scrolls left/right via the left/right controls as well as the navigation
        dots
      </p>
      <Carousel
        slides={slides}
        speed={3000}
        slideWidth={400}
        slideHeight={200}
        manualMode
      />
    </Fragment>
  );
};

export default App;
