import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import ServiceCard from "../ServiceCard/ServiceCard";

const HomeServices = () => {
  const [services, setServices] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/")
      .then((res) => res.json())
      .then((data) => setServices(data));
  }, []);
  return (
    <div className="container mx-auto my-5">
      <div className="text-center mb-4">
        <p className="py-4 text-3xl font-bold text-orange-600">Our Services</p>

        <p>Save time managing your business with Our best services</p>
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
            className="btn btn-primary py-4 my-8 font-semibold rounded-md dark:text-gray-900 dark:bg-violet-400"
          >
            See All
          </button>
        </Link>
      </div>
    </div>
  );
};

export default HomeServices;
