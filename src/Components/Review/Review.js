import React, { useState } from 'react';
import ReviewCard from '../ReviewCard/ReviewCard';

const Review = () => {
    const [services, setServices] = useState([]);

    useEffect(() => {
      fetch("http://localhost:5000/details")
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