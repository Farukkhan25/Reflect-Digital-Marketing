import React, { useEffect, useState } from 'react';
import ServiceCard from '../ServiceCard/ServiceCard';

const HomeServices = () => {
    const [services, setServices] = useState([]);

    useEffect(() => {
      fetch("http://localhost:5000/")
        .then((res) => res.json())
        .then((data) => setServices(data));
    }, []);
    return (
      <div className="container mx-auto">
        <div className="text-center mb-4">
          <p className="text-2xl font-bold text-orange-600">Our Services</p>
          
          <p>Save time managing your business with Our best services</p>
        </div>
        <div className="grid gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 justify-items-center">
          {services.map((service) => (
            <ServiceCard key={service._id} service={service}></ServiceCard>
          ))}
        </div>
      </div>
    );
};

export default HomeServices;