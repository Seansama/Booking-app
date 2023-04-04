# BOOKING 

A Ruby-React app that allows travellers to book hotels.

## Running live Hosted Application.

Welcome to our hotel booking website! To begin your journey, clicking on the "Get Started" button prominently displayed on our landing page. This will guide you through the account creation process, allowing you to enjoy the full range of our hotel booking services. If you already have an account, simply click on the "Sign In" link to access your account.

Upon logging in, you will be directed to our home page where you can browse, search, and book hotels. Our website is designed to provide a seamless experience, with easy navigation and quick access to the information you need.

If you're looking for a specific hotel, our search function allows you to find it easily. We've also made it simple for hotel owners to add their properties to our platform. Simply switch to the admin account by clicking on the "Admin" button on the navigation bar and fill out the required form. Our team will review your submission and add it to our database if it meets our standards.

At any point during your experience, if you need any help or support, our "Help" button is available to assist you. If you'd like to learn more about our team or get in touch with us directly, click on the "Contact" button to access our contact information.

Thank you for choosing our website as your preferred hotel booking platform. We are committed to providing you with a high-quality, professional service, and look forward to helping you make your travel dreams a reality.

## Getting Started

_For those that intend to make contributions or modify this project to suit their needs._

To get started with the app, clone the repo and then install the needed gems: `bundle install`.

Next, migrate the database: `rails db:migrate`.

Seed the database with some initial data: `rails db:seed`.

Finally, start the server: `rails server`.

You can then access the API at `http://localhost:3000/`.

### Frontend

To start the frontend, please do the following:

Run `npm install --prefix booking` to install the dependencies in **package.json**.

Then run `npm start --prefix booking` to start up the react app in development mode.

## API Live link

_In case you just want to connect the API to a frontend solution without interacting with the API code itself_:

**pending

## React live link

https://booking-app-phi.vercel.app/


****_Caveat emptor_** - _Although the register and login functionalities work as expected with the completed backend in this frontend solution, issues with session inheritance from react prevented more solutions from being implemented from the backend. However, some dummy data was provided to serve as proof-of-concept for what we had originally envisioned. Additionally, in the help section, detailed steps on how the frontend solution was to work was provided. We envision to provide a feasible working solution in time to ensure a pleasant experience. Thank you._
## API Endpoints

The following endpoints are available in the API:

### Hotels

- **DELETE** `/hotel/:id` - Deletes a hotel listing.
- **GET** `/hotel/` - Retrieves all hotel listings.
- **GET** `/hotel/:id` - Retrieves a specific hotel.
- **PUT** `/hotel/:id` - Allows for hotel descriptions to be updated.
- **POST** `/hotel` - Allows for creation of a new hotel listing.

### Session and users

- **POST** `/signup` - Allows for creation of a new user.
- **POST** `/login` - Allows an existing user to sign in.
- **DELETE** `/logout` - Logs out the current user, destroying the session.

### Reviews

- **GET** `/reviews` - returns a list of all reviews for a specific hotel.
- **GET** `/reviews/:id` - returns a single review by ID for a specific hotel.
- **POST** `/reviews/` - creates a new review for a specific hotel.
- **PATCH** `/reviews/:id` - updates an existing review by ID for a specific hotel.
- **DELETE** `/reviews/:id` - deletes a review by ID for a specific hotel.

 ****_Editor's note_** - _Although the above controllers were in the original ideation of the the project, their implementation proved too difficult and thus were given up on. Future updates will see to fully integrate them into the project. You, the reader, could also do this yourself as the necessary dependencies were already made._

### Bookings

- **GET** `/bookings` - returns a list of all bookings.
- **GET** `/bookings/:id` - returns a single booking by ID.
- **POST** `/bookings` - creates a new booking.
- **PATCH** `/bookings/:id` - updates an existing booking by ID.
- **DELETE** `/bookings/:id` - deletes a booking by ID.

_This project has been done by:_

- _Shaun Mwangi_
- _Trevor Febias_
- _Vivian Njoroge_
- _Vincent Chisaka_

**This project is open source under an MIT open source licence.**