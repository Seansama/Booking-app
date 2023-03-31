import React from 'react';


function LandingPage() {
 const bgImage = "url('https://images.unsplash.com/photo-1467377791767-c929b5dc9a23?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1332&q=80')";
 
  const bgStyle = {
   backgroundImage: bgImage,
   backgroundSize: "cover",
   backgroundPosition: "center",
   height: "75vh",
   width: "100vw",
   display: "inline-block"
 };


 return (
   <div style={bgStyle}>
     <div>
     <div className='m-64 text-white text-b  text-center font-bold font-weight: 700 '>
       <div className='text-6xl'><h1>EXPLORE THE WORLD <br></br> ONE ADVENTURE AT A TIME</h1></div>
           <p className='text-xl font-serif text-b mt-5'>Embark on a journey of a lifetime with us, where adventure meets destination and you discover the world's hidden gems<br></br> through our lens, leaving you free to travel more and worry less</p>
        
           <div className="flex justify-center mt-12 text-b ">
       <button className="bg-white hover:bg-transparent text-black font-semibold hover:text-white py-2   px-4 border border-white rounded-full flex items-center">
   <span>
     <img src="https://www.pngmart.com/files/7/Pin-Transparent-Background.png" alt="Destination Icon" className="mr-2 h-6  " />
   </span>
   <span>Enter destination</span>
 </button>
 <button className="bg-white hover:bg-transparent text-black font-semibold hover:text-white py-2 ml-4 px-4 border border-white rounded-full flex items-center">
   <span>
     <img src="https://img.icons8.com/glyph-neue/256/time-machine.png" alt="Destination Icon" className="mr-2 h-6  " />
   </span>
   <span>check in </span>
 </button>
 <button className="bg-white hover:bg-transparent text-black font-semibold hover:text-white py-2 ml-4 px-4 border border-white rounded-full flex items-center">
   <span>
     <img src="https://img.icons8.com/external-flatart-icons-outline-flatarticons/256/external-hotel-hotel-services-and-city-elements-flatart-icons-outline-flatarticons-1.png" alt="Destination Icon" className="mr-2 h-6  " />
   </span>
   <span>Book </span>
 </button>


</div>
<div className='getstarted text-center mt-12  '>
<button className="bg-white text-xl hover:bg-green-100 text-black font-semibold hover:text-black py-2  px-4 border border-white    ">
   GET STARTED 
 </button>
   </div>
   <div className="ml-11 ">
   
     <img src="https://hotel-booking-application-alpha.vercel.app/image/Screenshot%20from%202022-12-14%2023-32-45.png" alt="Destination Icon" className="mr-2  m-20  " />
  
 
 </div>
   </div>
           </div>
       </div>
      
 );
}


export default LandingPage;



