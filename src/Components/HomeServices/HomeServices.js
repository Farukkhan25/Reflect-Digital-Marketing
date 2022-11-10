import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import ServiceCard from "../ServiceCard/ServiceCard";

const HomeServices = () => {
  const [services, setServices] = useState([]);

  useEffect(() => {
    fetch("https://server-alpha-lake.vercel.app/")
      .then((res) => res.json())
      .then((data) => setServices(data));
  }, []);
  return (
    <div className="container mx-auto lg:py-24 py-12 lg:px-12 px-4">
      <div className="text-center mb-4">
        <p className="py-4 text-2xl font-bold text-orange-600">
          Special Services
        </p>

        <p className="text-3xl text-white pb-3">
          Save time managing your business with
        </p>
        <p className="highlight text-3xl">My best services</p>
      </div>
      <div className="grid gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 justify-items-center">
        {services.map((service) => (
          <ServiceCard key={service._id} service={service}></ServiceCard>
        ))}
      </div>
      <div className="text-center">
        <Link to="/allServices">
          <button
            type="button"
            className="btn btn-info px-7 my-8 text-lg font-semibold rounded-md dark:text-gray-900 dark:bg-violet-400"
          >
            See All
          </button>
        </Link>
      </div>
    </div>
  );
};

export default HomeServices;
