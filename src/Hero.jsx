import React from "react";
import heroImg from "./assets/hero.svg";
export const Hero = () => {
  return (
    <section className="hero">
      <div className="hero-title">
        <h1>Contentful CMS</h1>
        <p>
          Tbh slow-carb mumblecore, ugh etsy raw denim flexitarian poke. Cliche
          umami viral artisan organic keytar. Hella celiac schlitz, scenester
          austin slow-carb literally pinterest vexillologist direct trade.
          Gastropub vexillologist copper mug bicycle rights activated charcoal
          pork belly snackwave same fashion axe williamsburg.
        </p>
      </div>
      <div className="image-container">
        <img src={heroImg} alt="woman an the browser" className="img"></img>
      </div>
    </section>
  );
};
