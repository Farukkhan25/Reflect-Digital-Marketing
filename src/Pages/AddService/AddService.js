import React, { useState } from 'react';

const AddService = () => {
    const [service, setService] = useState({});

    const handleAddService = event =>{
        event.preventDefault();
        console.log(service);

        fetch("https://server-alpha-lake.vercel.app/details", {
          method: "POST",
          headers: {
            "content-type": "application/json",
          },
          body: JSON.stringify(service),
        })
          .then((res) => res.json())
          .then((data) => {
            if (data.acknowledged) {
              alert("service added successfully");
              event.target.reset();
            }
          });
    }

    const handleInputBlur = event =>{
        const field = event.target.name;
        const value = event.target.value;
        const newService = {...service}
        newService[field] = value;
        setService(newService);
    }

    return (
      <div className="container mx-auto justify-items-center lg:px-24 text-center py-6">
        <h2>Please add a new service</h2>
        <div className=" bg-blue-600 p-6">
          <form onSubmit={handleAddService} className="py-6  bg-gray-200">
            <input
              onBlur={handleInputBlur}
              type="text"
              name="title"
              placeholder="title"
              required
            />
            <br />
            <input
              onBlur={handleInputBlur}
              type="text"
              name="price"
              placeholder="price"
              required
              className="my-3"
            />
            <br />
            <input
              onBlur={handleInputBlur}
              type="text"
              name="details"
              placeholder="details"
              required
            />
            <br />
            <input
              onBlur={handleInputBlur}
              type="text"
              name="image"
              placeholder="imageURL"
              required
              className="my-3"
            />
            <br />
            <input
              onBlur={handleInputBlur}
              type="text"
              name="rating"
              placeholder="rating"
              required
            />
            <br />

            <button type="submit" className="btn btn-primary mt-5">
              Add Service
            </button>
          </form>
        </div>
      </div>
    );
};

export default AddService;