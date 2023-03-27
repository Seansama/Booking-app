# BOOKING

This is an API that allows users to make hotel bookings and creation of new hotels.

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