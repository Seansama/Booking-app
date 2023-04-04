# BOOKING 

This website is a platform for booking hotels in Nairobi. It allows users to view information about various hotels in the city, including their names, ratings, classes, descriptions, additional information, and prices. Users can browse through the hotels using cards that display this information and can book a hotel by clicking a button on the card. The website also includes a form for users to sign up and a Google Maps instance with markers for each hotel. The website is designed to be user-friendly and visually appealing, with styles that enhance the layout and appearance of various elements on the page. Overall, the website aims to provide a convenient and straightforward way for users to find and book hotels in Nairobi.

## Running live Hosted Application.

Click on this link to run the application.

http://.......  

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

**pending

## API Endpoints

The following endpoints are available in the API:

### Hotels

- **DELETE** `/hotel/:id` - Deletes a hotel listing.
- **GET** `/hotel/` - Retrieves all hotel listings.
- **GET** `/hotel/:id` - Retrieves a specific hotel.
- **PUT** `/hotel/:id` - Allows for hotel descriptions to be updated.
- **POST** `/hotel` - Allows for creation of a new hotel listing.

### Users

**pending


_This project has been done by:_

**pending

**This project is open source under an MIT open source licence.**