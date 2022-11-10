import React, { useState } from 'react';

const AddService = () => {
    const [service, setService] = useState({});

    const handleAddService = event =>{
        event.preventDefault();
        console.log(service);

        fetch('http://localhost:5000/details', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(service)
        })
        .then(res => res.json())
        .then(data => {
            if(data.acknowledged){
                alert('service added successfully');
                event.target.reset();
            }
        })
    }

    const handleInputBlur = event =>{
        const field = event.target.name;
        const value = event.target.value;
        const newService = {...service}
        newService[field] = value;
        setService(newService);
    }

    return (
        <div className='container mx-auto justify-items-center lg:px-24 text-center py-6'>
            <h2>Please add a new service</h2>
            <form onSubmit={handleAddService} className="py-6">
                <input onBlur={handleInputBlur} type="text" name='title' placeholder='title' required />
                <br />
                <input onBlur={handleInputBlur} type="text" name='price' placeholder='price' required />
                <br />
                <input onBlur={handleInputBlur} type="text" name='details' placeholder='details' required />
                <br />
                <input onBlur={handleInputBlur} type="text" name='image' placeholder='imageURL' required />
                <br />
                <input onBlur={handleInputBlur} type="text" name='rating' placeholder='rating' required />
                <br />
                
                <button type="submit" className='btn btn-primary mt-5'>Add Service</button>
            </form>
        </div>
    );
};

export default AddService;