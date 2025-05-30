# 📷 Image Sharing Platform
This is a full-stack web application where users can create accounts, share their favorite images, and explore content shared by others. The platform focuses on simplicity and user experience, allowing people to express themselves visually and connect through pictures.
## 💻 Technologies Used 
### Frontend

- HTML: Used to structure the content and layout of the web application.

- CSS: Provides styling to ensure a clean, modern, and responsive design across different devices.

- JavaScript: Adds interactivity to the user interface, enabling dynamic elements such as form validation, responsive navigation, and real-time updates.

### Backend & Database
- Node.js: A runtime environment that powers the server-side logic of the application. It handles user authentication, routes, file uploads, and communication with the database efficiently using asynchronous programming.

- MongoDB: A NoSQL database used to store user profiles, image metadata, and post content. It allows flexible schema design and efficient querying for fast data retrieval.

- Express.js: A minimal and flexible Node.js web application framework used to build the backend API, manage routes, and handle server-side logic efficiently.

- Multer: A middleware for handling multipart/form-data, primarily used to upload images from the client to the server and store them locally. It enables efficient handling of media files during the post creation process.

# ✨ Features
- ### User Signup & Login: 
Secure authentication system that allows users to create an account and log in easily.


![{E2574B13-8029-4639-8B15-AA6EE93EDD01}](https://github.com/user-attachments/assets/82b5c908-d023-45ff-8a42-942fcd31db37) ![{DEAB3EA9-C9A8-458C-8B4A-E28EE3AC7991}](https://github.com/user-attachments/assets/eb4f9255-0b01-44a5-85c4-a866b9aa7769)

- ### Profile Creation & Management: 
After signing up, users can set up their profile, including updating their profile picture at any time.
![image](https://github.com/user-attachments/assets/4dfceb7c-d31b-455a-bb00-129db25258a2)  

By Clicking on pencil icon user can select image from local storage. 
![{43D31A06-7E57-43E5-BE22-0D8BC984D9F0}](https://github.com/user-attachments/assets/2ac05ad6-4ead-4c25-96dc-d70fd298c511)
![{BBABBF90-88FF-4490-9B9E-0F549C8AE259}](https://github.com/user-attachments/assets/476a370a-f04e-4e74-9a5a-73790cdc76b4)
Profile Photo updated Successfully.

- ### Post Uploading: 
Users can upload images, write captions, and add detailed descriptions to their posts.
by Clicking on this "Add New Post" button user you can upload any post (image) from local Storage.
![{0CF3A8AF-85C1-4408-B354-C312A7FD0095}](https://github.com/user-attachments/assets/7044e9f9-8931-45c3-8e70-11d0bcef55d1)
Adding post with a Caption and a Description(optional)
![{5D857AAA-C716-41EB-9302-474AB5F7DC12}](https://github.com/user-attachments/assets/55d14d14-baef-4163-bdeb-31ab6ecf3084)
All uploaded posts from your id/Account: 
![{E3A2A7C5-D422-4E5E-8708-ED0A4E2EEECB}](https://github.com/user-attachments/assets/7942d715-261b-408b-83ef-4c2bcdd7fb02)

- ### Explore Posts: 
All users can scroll through and view images shared by others, creating a social, visual experience.
Go to "Feed" to view all Posts from other users.
![{B33F0FB5-8AF2-4EFA-9286-4B1E23443C56}](https://github.com/user-attachments/assets/03a0dfda-71e6-49f9-a11a-1a2a9e472884)
Your Feed with user name and caption
![{5514BA35-F96B-4915-A353-FAF4D9562BC2}](https://github.com/user-attachments/assets/08c68733-382a-4f24-810d-63695028b4af)

- ### Fixed Navbar: 
A clean and responsive navigation bar stays fixed at the top, giving quick access to the Profile and Logout options.
![{BB103B47-76F1-440E-A427-DE9DF7949BC4}](https://github.com/user-attachments/assets/cd1e030a-d1fb-4897-86d7-87df9908b573)

# Getting Started
Follow these steps to run the project on your local machine:

### Clone the Repository
```
git clone https://github.com/Sakshimehra072/Image-Sharing-Platform
```
cd image-sharing-platform

### Install Dependencies
Make sure you have Node.js installed, then run:

```
npm install
```
### Set Up MongoDB

Create a MongoDB Atlas account (or use local MongoDB).

Generate your MongoDB connection URI.

Create a .env file in the root directory and add:

```
MONGODB_URI=your_mongodb_connection_string
```
### Start the Server
```
npx nodemon
```
Open in Browser
Navigate to http://localhost:3000 in your web browser.

