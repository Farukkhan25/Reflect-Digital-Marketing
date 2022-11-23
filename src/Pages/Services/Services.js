import React, { useEffect, useState, CSSProperties } from "react";
import { Link } from "react-router-dom";
import ServiceCard from "../../Components/ServiceCard/ServiceCard";
import { PacmanLoader } from "react-spinners";

const Services = () => {
  const [services, setServices] = useState([]);
  // Loader part
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 2000);
  }, []);

  useEffect(() => {
    fetch("https://server-alpha-lake.vercel.app/details")
      .then((res) => res.json())
      .then((data) => setServices(data));
  }, []);
  return (
    <div>
      {loading ? (
        <div className="container justify-center mx-auto mb-4 lg:p-16">
          <PacmanLoader
            color="#36d7b7"
            loading={loading}
            // cssOverride={override}
            size={50}
            // aria-label="Loading Spinner"
            // data-testid="loader"
          />
        </div>
      ) : (
        <div className="container mx-auto mb-6">
          <div className="text-center my-10">
            <p className="text-3xl font-bold text-orange-500 pb-3">
              Our Services
            </p>

            <p className="text-lime-400">
              Save time managing your business with Our best services
            </p>
          </div>
          <div className="grid gap-6 gap-y-16 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 justify-items-center">
            {services.map((service) => (
              <ServiceCard key={service._id} service={service}></ServiceCard>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default Services;
