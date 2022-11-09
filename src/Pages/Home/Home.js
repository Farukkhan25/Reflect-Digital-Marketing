import React, { Fragment, useEffect, useState } from 'react';
import About from '../../Components/About/About';
import Hero from '../../Components/Hero/Hero';
import HomeServices from '../../Components/HomeServices/HomeServices';
import useTitle from '../../hooks/useTitle';


const Home = () => {
const [theme, setTheme] = useState("");

const toggleTheme = () => {
  theme === "" ? setTheme("light-theme") : setTheme("");
};

useEffect(() => {
  document.body.className = theme;
}, [theme]);

   useTitle("Home"); 
    return (
      <Fragment>
        <Hero theme={theme} />
        <HomeServices />
        <About />
      </Fragment>
    );
};

export default Home;