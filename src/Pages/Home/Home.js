import React, { Fragment } from 'react';
import HomeServices from '../../Components/HomeServices/HomeServices';
import useTitle from '../../hooks/useTitle';


const Home = () => {
   useTitle("Home"); 
    return (
        <Fragment>
          <HomeServices />
        </Fragment>
    );
};

export default Home;