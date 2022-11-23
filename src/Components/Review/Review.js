import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../../contexts/AuthProvider/AuthProvider';
import ReviewCard from '../ReviewCard/ReviewCard';

const Review = ({ addNewReview, handleAddReview }) => {
  return (
    <div className="container mx-auto justify-items-center max-w-4xl text-center py-6 bg-slate-200">
      {/* <div className="flex space-x-4">
          <div>
            <img
              src={user.photoURL}
              alt=""
              className="object-cover w-12 h-12 rounded-full dark:bg-gray-500"
            />
          </div>
          <div>
            <h4 className="font-bold text-purple-700">{user.displayName}</h4>
          </div>
        </div> */}

      <form onSubmit={handleAddReview} className="py-6 px-24">
        <input
          //   onBlur={handleInputBlur}
          type="text"
          name="review"
          placeholder="Write your review here"
          className="w-96 h-24 mb-4 text-center"
          required
        />
        <br />
        <input
          //   onBlur={handleInputBlur}
          type="text"
          name="rating"
          className="w-96 text-center"
          placeholder="Give your rating between 0 to 5 here"
          required
        />
        <br />

        <button type="submit" className="btn btn-primary mt-5">
          Add Review
        </button>
      </form>
    </div>
  );

  // const { _id, title, name, image, review, rating } = serviceReview;
  // const { login, setLoading, user } = useContext(AuthContext);
  //   const [addReviews, setAddReviews] = useState({});
  // const handleAddReview = (event) => {
  //   event.preventDefault();
  //   //   const field = event.target.name;
  //   const review = event.target.review.value;
  //   const rating = event.target.rating.value;
  //   const reviewTitle = title;
  //   const id = _id;
  //   const addReview = {
  //     reviewTitle,
  //     name: user.displayName,
  //     review,
  //     image: user.photoURL,
  //     rating,
  //     id,
  //   };
  //   setAddReviews(addReview);
  //   console.log(addReview);
  //   // console.log(user.photoURL);
  //   fetch("https://server-alpha-lake.vercel.app/addReviews", {
  //     method: "POST",
  //     headers: {
  //       "content-type": "application/json",
  //       authorization: `Bearer ${localStorage.getItem("reflect-token")}`,
  //     },
  //     body: JSON.stringify(addReviews),
  //   })
  //     .then((res) => res.json())
  //     .then((data) => {
  //       if (data.acknowledged) {
  //         alert("Review added successfully!");
  //         event.target.reset();
  //         // navigate(from, { replace: true });
  //       }
  //     });
  //   //  .catch(er => console.error(er));
  // };
  //     const handleAddReview = (event) => {
  //       event.preventDefault();
  //     //   const field = event.target.name;
  //       const review = event.target.review.value;
  //       const rating = event.target.rating.value;
  //       const serviceTitle = title;
  //       const id = _id;
  //       const addReview = {
  //         serviceTitle,
  //         name: user.displayName,
  //         review,
  //         image: user.imgURL,
  //         rating,
  //         id,
  //       };
  //         setAddReviews(addReview);
  //         fetch("https://server-alpha-lake.vercel.app/addReviews", {
  //           method: "POST",
  //           headers: {
  //             "content-type": "application/json",
  //           },
  //           body: JSON.stringify(addReviews),
  //         })
  //           .then((res) => res.json())
  //           .then((data) => {
  //             if (data.acknowledged) {
  //               alert("Review added successfully!");
  //               event.target.reset();
  //             }
  //           });
  //         // .catch (er => console.error(er));
  //     };
  // return (
  //   <div className="container mx-auto justify-items-center lg:px-24 text-center py-6">
  //     <form onSubmit={handleAddReview} className="py-6">
  //       <input
  //         //   onBlur={handleInputBlur}
  //         type="text"
  //         name="review"
  //         placeholder="Write your review here"
  //         required
  //       />
  //       <br />
  //       <input
  //         //   onBlur={handleInputBlur}
  //         type="text"
  //         name="rating"
  //         placeholder="Write your rating between 0 to 5 here"
  //         required
  //       />
  //       <br />
  //       <button type="submit" className="btn btn-primary mt-5">
  //         Add Review
  //       </button>
  //     </form>
  //   </div>
  // );
};

export default Review;