import { Card } from "flowbite-react";
import React, { useContext, useEffect, useState } from "react";
import {
  Link,
  useLoaderData,
  useLocation,
  useNavigate,
} from "react-router-dom";
import { PhotoProvider, PhotoView } from "react-photo-view";
import "react-photo-view/dist/react-photo-view.css";
import useTitle from "../../hooks/useTitle";
import ReviewCard from "../../Components/ReviewCard/ReviewCard";
import Review from "../../Components/Review/Review";
import { AuthContext } from "../../contexts/AuthProvider/AuthProvider";
import Services from "../Services/Services";

const ServiceDetails = () => {
  const { _id, title, price, image, details, rating } = useLoaderData();

  const [reviews, setReviews] = useState([]);
  useTitle("Service Details");

  // const navigate = useNavigate();
  // const location = useLocation();
  //  const from = location.state?.from?.pathname || "/";
  const { login, setLoading, user } = useContext(AuthContext);

  const [addReviews, setAddReviews] = useState({});
  const [refresh, setRefresh] = useState(false);

  useEffect(() => {
    fetch(`https://server-alpha-lake.vercel.app/reviews/${_id}`)
      .then((res) => res.json())
      .then((data) => setReviews(data));
  }, [_id, refresh]);

  // console.log(reviews);

  const handleAddReview = (event) => {
    event.preventDefault();

    const review = event.target.review.value;
    const rating = event.target.rating.value;
    const reviewTitle = title;

    const id = _id;

    const addReview = {
      reviewTitle,
      name: user.displayName,
      email: user.email,
      review,
      image: user.photoURL,
      rating,
      id,
    };

    setAddReviews(addReview, _id);

    console.log(addReview);
    // console.log(user.photoURL);

    fetch("https://server-alpha-lake.vercel.app/addReviews", {
      method: "POST",
      headers: {
        "content-type": "application/json",
        authorization: `Bearer ${localStorage.getItem("reflect-token")}`,
      },
      body: JSON.stringify(addReview),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.acknowledged) {
          alert("Review added successfully!");
          // event.target.reset();
          // setRefresh(!refresh);
          // navigate(from, { replace: true });
        }
        event.target.reset();
        setRefresh(!refresh);
      });

    //  .catch(er => console.error(er));
  };

  return (
    <div>
      <div className="container mx-auto my-4 max-w-4xl">
        <Card>
          <PhotoProvider>
            <PhotoView src={image}>
              <img src={image} alt="" />
            </PhotoView>
          </PhotoProvider>
          <h5 className="text-xl font-semibold tracking-tight text-gray-900 dark:text-white">
            {title}
          </h5>

          <div className="mt-2.5 mb-5 flex items-center">
            <svg
              className="h-5 w-5 text-yellow-300"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
            </svg>
            <svg
              className="h-5 w-5 text-yellow-300"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
            </svg>
            <svg
              className="h-5 w-5 text-yellow-300"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
            </svg>
            <svg
              className="h-5 w-5 text-yellow-300"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
            </svg>
            <svg
              className="h-5 w-5 text-yellow-300"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
            </svg>
            <span className="mr-2 ml-3 rounded bg-blue-100 px-2.5 py-0.5 text-xs font-semibold text-blue-800 dark:bg-blue-200 dark:text-blue-800">
              {rating}
            </span>
          </div>
          <p className="text-gray-700 dark:text-white text-justify">
            {details}
          </p>
          <div className="flex items-center justify-between">
            <span className="text-2xl font-bold text-gray-900 dark:text-white">
              {price}
            </span>
            <Link
              to="/"
              className="rounded-lg bg-blue-700 px-5 py-2.5 text-center text-sm font-medium text-white hover:bg-blue-800 focus:outline-none focus:ring-4 focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
            >
              Add to cart
            </Link>
          </div>
        </Card>
      </div>
      <div className="container mx-auto mt-5 mb-1 max-w-4xl bg-base-100 rounded-t-xl">
        {reviews.length === 0 ? (
          <h2>No review available for this service!</h2>
        ) : (
          <div>
            {reviews.map((serviceReview) => (
              <ReviewCard
                key={serviceReview._id}
                serviceReview={serviceReview}
              ></ReviewCard>
            ))}
          </div>
        )}
      </div>
      {/* <div className="container mx-auto my-5 max-w-4xl bg-base-100">
        {reviews.map((serviceReview) => (
          <Review
            key={serviceReview._id}
            serviceReview={serviceReview}
          ></Review>
        ))}
      </div> */}

      {user?.uid ? (
        <>
          <div className="container mx-auto mb-5 justify-items-center max-w-4xl text-center py-6 bg-base-100 rounded-b-xl">
            <h3 className="text-red-700 text-lg">
              Are you satisfied with my service?
            </h3>
            <div className="flex space-x-4 items-center justify-center pt-5">
              <div>
                <img
                  src={user.photoURL}
                  alt=""
                  className="object-cover w-12 h-12 rounded-full dark:bg-gray-500"
                />
              </div>
              <div>
                <h4 className="font-semibold text-2xl text-blue-500">
                  {user.displayName}
                </h4>
              </div>
            </div>

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

              <button type="submit" className="btn btn-info mt-5">
                Add Review
              </button>
            </form>
          </div>
        </>
      ) : (
        <div className="container mx-auto justify-items-center max-w-4xl text-center py-6 bg-slate-200 mb-6  rounded-b-xl">
          <h3 className="text-red-700 text-xl font-semibold">
            Please{" "}
            <span className="text-red-700">
              <Link
                to="/login"
                className="text-blue-700 font-bold border-2 rounded border-indigo-500/100 bg-slate-300"
              >
                Login
              </Link>
            </span>{" "}
            to add review
          </h3>
        </div>
      )}
    </div>
  );
};

export default ServiceDetails;
