import React from 'react';
import "./Hero.css";

import heroDarkImg from "../../assets/images/hero-img.png";
import lightImg from "../../assets/images/light-hero-bg.png";
import { Link } from 'react-router-dom';

const Hero = ({ theme }) => {
    return (
      <section className="hero__section" id="home">
        <div className="container">
          <div className="hero__wrapper lg:px-20 px-4">
            <div className="hero__content">
              <div>
                <h2> I'm Providing Perfect</h2>
                <h2>Digital Marketing Solutions</h2>
                <h2 className="highlight">To Promote Your Brand</h2>
              </div>
              <p className="description">
                You need to market your online store in unique ways to attract
                customers <br /> and increase sales.
              </p>
              <div className="hero__btns">
                <Link to="/allServices">
                  <button className="primary__btn">Get Started Now</button>
                </Link>
                <Link to="/allServices">
                  <button className="secondary__btn">Discover More</button>
                </Link>
              </div>
            </div>
            <div className="hero__img">
              <img
                src={theme === "light-theme" ? lightImg : heroDarkImg}
                alt="hero-img"
              />
            </div>
          </div>
        </div>
      </section>
    );
};

export default Hero;