import React from "react";
import Footer from "./Footer";
// import Card from "./Card";

// import gogin_getstarted from "./img/gogin_getstarted.png";
// import home from "./img/home.png";
// import addmeme from "./img/addmeme.png";
// import mymeme from "./img/mymeme.png";
// import searchmeme from "./img/searchmeme.png";
// import deletemem from "./img/deletemem.png";

const Card = ({ title, image, children }) => {
  return (
    <div className="shadow-lg rounded-lg overflow-hidden">
      <div className="relative">
        <div className="absolute inset-0 bg-black opacity-50"></div>
        <h2 className="text-white text-2xl font-bold absolute bottom-0 left-0 p-4">
          {title}
        </h2>
      </div>
      <div className="p-4">{children}</div>
    </div>
  );
};

const AboutPage = () => {
  return (
    <div className="bg-gray-200 min-h-screen">
      <div className="mx-auto px-4 py-8 max-w-7xl">
        <h1 className="text-4xl font-bold text-center mt-8 mb-12">
          How to Use Our App
        </h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <Card title="Register/Login">
            <img
              src="{gogin_getstarted}"
              alt="Register/Login"
              className="w-full h-48 object-cover"
            />
            <p className="mt-4">
              To get started, register a new account or login with your existing
              one.
            </p>
          </Card>

          <Card title="View Memes">
            <img
              src="{home}"
              alt="View Memes"
              className="w-full h-48 object-cover"
            />
            <p className="mt-4">
              Once you're logged in, you'll be taken to the home page where you
              can view all the Hotels available on our app.
            </p>
          </Card>
          <Card title="Add Memes">
            <img
              src="{addmeme}"
              alt="View Memes"
              className="w-full h-48 object-cover"
            />
            <p className="mt-4">
              If your using the app to market your hotel,switch users to admin
              and fill in the form with the required details.
            </p>
          </Card>
          <Card title="My Memes">
            <img
              src="{mymeme}"
              alt="View Memes"
              className="w-full h-48 object-cover"
            />
            <p className="mt-4">
              To view the hotels you've added, click on the booked button.
            </p>
          </Card>
          <Card title="Search Memes">
            <img
              src="{searchmeme}"
              alt="View Memes"
              className="w-full h-48 object-cover"
            />
            <p className="mt-4">
              If you're looking for a specific Hotel, simply use the search bar
              and enter the name of the Hotel you're looking for.
            </p>
          </Card>
          <Card title="Remove Memes">
            <img
              src="{deletemem}"
              alt="View Memes"
              className="w-full h-48 object-cover"
            />
            <p className="mt-4">
              If you wish to remove a hotel you've added, simply click on the X
              button on the Hotel you want to delete. Please note that you can
              only update or delete Hotels that you've added.
            </p>
          </Card>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default AboutPage;
