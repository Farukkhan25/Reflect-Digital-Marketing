import React from "react";
import { Link } from "react-router-dom";
import { PhotoProvider, PhotoView } from "react-photo-view";
import "react-photo-view/dist/react-photo-view.css";

const ServiceCard = ({ service }) => {
  const { _id, image, price, title, details } = service;

  return (
    <div className="card card-compact lg:w-96 bg-slate-800 mx-1 shadow-xl">
      <figure>
        <PhotoProvider>
          <PhotoView src={image}>
            <img
              src={image}
              // style={{ height: "300px", width: "400px" }}
              alt=""
              className="w-full h-72 object-fit lg:h-64"
            />
          </PhotoView>
        </PhotoProvider>
      </figure>
      <div className="card-body">
        <h2 className="card-title text-center  text-cyan-400 dark:text-cyan-600">
          {title}
        </h2>
        <p className="text-gray-200 dark:gray-700 text-justify">
          {details.substring(0, 100) + " ..."}
        </p>
        <div className="flex justify-between items-center pt-4">
          <div>
            <p className="text-xl text-orange-400 dark:text-orange-600 font-semibold">
              Price: {price}
            </p>
          </div>
          <div className="card-actions">
            <Link to={`/details/${_id}`}>
              <button
                className="rounded-lg bg-blue-600 px-5 py-2.5 text-center text-sm font-medium text-white hover:bg-blue-800 focus:outline-none focus:ring-4 focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-700"
                // style={{ backgroundColor: "#0066CC" }}
              >
                View Details
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServiceCard;
