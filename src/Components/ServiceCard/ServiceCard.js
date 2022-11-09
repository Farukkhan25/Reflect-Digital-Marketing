import React from 'react';
import { Link } from 'react-router-dom';
import { PhotoProvider, PhotoView } from "react-photo-view";
import "react-photo-view/dist/react-photo-view.css";

const ServiceCard = ({ service }) => {
  const { _id, image, price, title, details } = service;

  return (
    <div className="card card-compact w-96 bg-base-100 shadow-xl">
      <figure>
        {/* <img src={image} style={{ height: "300px", width: "400px" }} alt="" /> */}
        <PhotoProvider>
          <PhotoView src={image} >
            <img
              src={image}
              style={{ height: "300px", width: "400px" }}
              alt=""
            />
          </PhotoView>
        </PhotoProvider>
      </figure>
      <div className="card-body">
        <h2 className="card-title text-center">{title}</h2>
        <p className="text-gray-200 dark:text-white text-justify">
          {details.substring(0, 100) + "..."}
        </p>
        <p className="text-2xl text-orange-600 font-semibold">Price: {price}</p>
        <div className="card-actions justify-end">
          <Link to={`/details/${_id}`}>
            <button className="btn btn-primary">View Details</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ServiceCard;