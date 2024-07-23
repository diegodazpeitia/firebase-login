import firebase from "firebase/compat/app";
import "firebase/auth"

// Function to register a user
const register = async ({ email, password }) => {
    try {
      const response = await firebase.auth().createUserWithEmailAndPassword(email, password);
      console.log('User registered successfully:', response.user);
      return response.user;
    } catch (error) {
      console.error('Error registering user:', error.message);
      throw error;
    }
  };
  
  // Function to login a user
  const login = async ({ email, password }) => {
    try {
      const response = await firebase.auth().signInWithEmailAndPassword(email, password);
      console.log('User logged in successfully:', response.user);
      return response.user;
    } catch (error) {
      console.error('Error logging in user:', error.message);
      throw error;
    }
  };
  
  // Export functions as default
  export default {
    register,
    login
  };