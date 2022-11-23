import React from 'react';
import "./counter.css";

const counterData = [
  {
    number: "130",
    icon: "ri-emotion-normal-fill",
    text: "Client",
  },
  {
    number: 50,
    icon: "ri-building-2-line",
    text: "Running Projects",
  },
  {
    number: 80,
    icon: "ri-key-fill",
    text: "Projects Completed",
  },
];


const Counter = () => {
    return (
      <section className="counter mb-6" id="projects">
        <div className="container bg-gray-900 py-6">
          <div className="counter__top-content ">
            <h6 className="subtitle">My Projects</h6>
            <h2>Business associates work to deliver</h2>
            <h2 className="highlight">for the community</h2>
          </div>

          <div className="counter__wrapper lg:px-20 px-4">
            {counterData.map((item, index) => (
              <div className="counter__item" key={index}>
                <span className="service__icon">
                  <i class={item.icon}></i>
                </span>
                <h3 className="counter__number">{item.number}+</h3>
                <h4 className="counter__title">{item.text}</h4>
              </div>
            ))}
          </div>
        </div>
      </section>
    );
};

export default Counter;