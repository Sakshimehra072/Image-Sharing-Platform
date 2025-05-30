📷 Image Sharing Platform
This is a full-stack web application where users can create accounts, share their favorite images, and explore content shared by others. The platform focuses on simplicity and user experience, allowing people to express themselves visually and connect through pictures.

💻 Technologies Used
Frontend
HTML: Used to structure the content and layout of the web application.

CSS: Provides styling to ensure a clean, modern, and responsive design across different devices.

JavaScript: Adds interactivity to the user interface, enabling dynamic elements such as form validation, responsive navigation, and real-time updates.

Backend & Database
Node.js: A runtime environment that powers the server-side logic of the application. It handles user authentication, routes, file uploads, and communication with the database efficiently using asynchronous programming.

MongoDB: A NoSQL database used to store user profiles, image metadata, and post content. It allows flexible schema design and efficient querying for fast data retrieval.

Express.js: A minimal and flexible Node.js web application framework used to build the backend API, manage routes, and handle server-side logic efficiently.

Multer: A middleware for handling multipart/form-data, primarily used to upload images from the client to the server and store them locally. It enables efficient handling of media files during the post creation process.

✨ Features
User Signup & Login:
Secure authentication system that allows users to create an account and log in easily.

alt text alt text

Profile Creation & Management:
After signing up, users can set up their profile, including updating their profile picture at any time. alt text

By Clicking on pencil icon user can select image from local storage. alt text

Profile Photo updated Successfully. alt text

Post Uploading:
Users can upload images, write captions, and add detailed descriptions to their posts. by Clicking on this "Add New Post" button user you can upload any post (image) from local Storage. alt text

Adding post with a Caption and a Description(optional) alt text Uploaded all posts: alt text

Explore Posts:
All users can scroll through and view images shared by others, creating a social, visual experience. Go to "Feed" to view all Posts from other users. alt text

Feed with user name and caption alt text

Fixed Navbar:
A clean and responsive navigation bar stays fixed at the top, giving quick access to the Profile and Logout options. alt text

Getting Started
Follow these steps to run the project on your local machine:

Clone the Repository
git clone https://github.com/Sakshimehra072/Image-Sharing-Platform
cd image-sharing-platform

Install Dependencies
Make sure you have Node.js installed, then run:

npm install
Set Up MongoDB
Create a MongoDB Atlas account (or use local MongoDB).

Generate your MongoDB connection URI.

Create a .env file in the root directory and add:

MONGODB_URI=your_mongodb_connection_string
Start the Server
npx nodemon
Open in Browser Navigate to http://localhost:3000 in your web browser.
