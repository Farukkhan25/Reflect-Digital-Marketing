import React, { useEffect, useState } from 'react';
import ReviewCard from '../ReviewCard/ReviewCard';

const Review = () => {
    const [services, setServices] = useState([]);

    useEffect(() => {
      fetch("https://server-alpha-lake.vercel.app/details")
        .then((res) => res.json())
        .then((data) => setServices(data));
    }, []);
    return (
        <div className='container justify-items-center text-center'>
            <h2>Reviews</h2>
            {/* <ReviewCard></ReviewCard> */}
        </div>
    );
};

export default Review;