# React Firebase Authentication Demo

This is a simple React application demonstrating user registration and login using Firebase Authentication.

## Features

- **User Registration**: Allows users to register with their email and password.
- **User Login**: Allows registered users to log in with their credentials.
- **Routing**: Uses React Router for navigation between registration and login pages.

## Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/diegodazpeitia/firebase-login.git
   cd firebase-login
   ```

2. Install dependencies:

   ```bash
   npm install
   ```

3. Set up Firebase Configuration:

   - Create a Firebase project at [Firebase Console](https://console.firebase.google.com/).
   - Obtain your Firebase configuration object from the Firebase console.
   - Replace the configuration object in `src/auth.js` and `src/App.js` with your Firebase project's configuration.

4. Run the application:

   ```bash
   npm start
   ```

   Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

## Usage

### Registration

- Navigate to `/register` route to access the registration form.
- Enter your email and password, then submit the form to register a new user.

### Login

- Navigate to `/login` route to access the login form.
- Enter your registered email and password, then submit the form to log in.

## Folder Structure

- **`src/App.js`**: Main component handling routing between registration and login.
- **`src/register.js`**: Component for user registration form.
- **`src/login.js`**: Component for user login form.
- **`src/auth.js`**: Firebase setup and authentication functions (`register` and `login`).

## Dependencies

- **React**: Frontend library for building user interfaces.
- **React Router**: Declarative routing for React applications.
- **Firebase**: Backend-as-a-Service platform for building web and mobile applications.

# What you will experience 

<img width="508" alt="Captura de pantalla 2024-07-24 a la(s) 14 48 36" src="https://github.com/user-attachments/assets/defe03c6-45c7-4136-ba3d-9de31911cb1f">


## Notes

- This project is intended as a demonstration and may require additional configuration and error handling for production use.
- Customize and extend functionalities as per your project requirements.
