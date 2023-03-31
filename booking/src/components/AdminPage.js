import React, { useState, useEffect } from 'react';

function Admin() {
  const [formData, setFormData] = useState({
    name: '',
    rating: '',
    class: '',
    description: '',
    additional: '',
    price: '',
    image: '',
    lat: '',
    lng: '',
    userId: ''
  });
  const [hotels, setHotels] = useState([]);
  const [userHotels, setUserHotels] = useState([]);

  function handleFormChange(event) {
    const { name, value } = event.target;
    setFormData((prevFormData) => ({ ...prevFormData, [name]: value }));
  }

  function handleFormSubmit(event) {
    event.preventDefault();
    fetch('/api/hotels', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(formData)
    })
      .then((response) => response.json())
      .then((data) => {
        console.log('Hotel added:', data);
        setFormData({
          name: '',
          rating: '',
          class: '',
          description: '',
          additional: '',
          price: '',
          image: '',
          lat: '',
          lng: '',
          userId: ''
        });
      })
      .catch((error) => console.error('Error adding hotel:', error));
  }

  useEffect(() => {
    fetch('/api/hotels')
      .then((response) => response.json())
      .then((data) => {
        console.log('Hotels fetched:', data);
        setHotels(data);
      })
      .catch((error) => console.error('Error fetching hotels:', error));
  }, []);

  useEffect(() => {
    if (formData.userId !== '') {
      setUserHotels(hotels.filter(hotel => hotel.userId === formData.userId));
    }
  }, [formData.userId, hotels]);
  const bgImage = "url('https://images.unsplash.com/photo-1467377791767-c929b5dc9a23?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1332&q=80')";
 
  const bgStyle = {
   backgroundImage: bgImage,
   backgroundSize: "cover",
   backgroundPosition: "center",
   height: "100vh",
   width: "100vw",
   display: "inline-block"
 };
 
return (
    <div style={bgStyle}>  
     
     <div className="p-8 bg-blue-300 flex-center w-4/12 mt-14 ml-14">
      <h2 className="text-3xl font-bold mb-8">Add Hotel</h2>
      <form onSubmit={handleFormSubmit} className="flex flex-wrap gap-4">
        <div className="w-full md:w-1/2">
          <label htmlFor="name" className="block mb-2 font-bold text-gray-700">
            Name:
          </label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleFormChange}
            className="w-full border py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          />
        </div>
        <div className="w-full md:w-1/2">
          <label htmlFor="rating" className="block mb-2 font-bold text-gray-700">
            Rating:
          </label>
          <input
            type="text"
            id="rating"
            name="rating"
            value={formData.rating}
            onChange={handleFormChange}
            className="w-full border py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          />
        </div>
        <div className="w-full md:w-1/2">
          <label htmlFor="class" className="block mb-2 font-bold text-gray-700">
            Class:
          </label>
          <input
            type="text"
            id="class"
            name="class"
            value={formData.class}
            onChange={handleFormChange}
            className="w-full border py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          />
        </div>
        <div className="w-full md:w-1/2">
          <label htmlFor="description" className="block mb-2 font-bold text-gray-700">
            Description:
          </label>
          <input
            type="text"
            id="description"
            name="description"
            value={formData.description}
            onChange={handleFormChange}
            className="w-full border py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          />
        </div>
        <div className="w-full md:w-1/2">
          <label htmlFor="additional" className="block mb-2 font-bold text-gray-700">
            Additional:
          </label>
          <input
            type="text"
            id="additional"
            name="additional"
            value={formData.additional}
            onChange={handleFormChange}
            className="w-full border py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          />
        </div>
        <div className="w-full md:w-1/2">
          <label htmlFor="price" className="block mb-2 font-bold text-gray-700">
            Price:
          </label>
          <input
            type="number"
            id="price"
            name="price"
            value={formData.price}
            onChange={handleFormChange}
            className="w-full border py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          />
        </div>
        <div className="w-full md:w-1/2">
          <label htmlFor="image" className="block mb-2 font-bold text-gray-700">
            Image URL:
          </label>
          <input
            type="text"
            id="image"
  name="image"
  value={formData.image}
  onChange={handleFormChange}
  className="w-full border py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
  />
  </div>
  <div className="w-full">
  <button
         type="submit"
         className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
       >
  Add Hotel
  </button>
  </div>
  </form>
    </div>
  </div>


  );
  }
  

export default Admin;