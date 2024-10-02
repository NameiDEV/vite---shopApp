import { initializeApp } from 'firebase/app';

  // TODO: Add SDKs for Firebase products that you want to use
  // https://firebase.google.com/docs/web/setup#available-libraries

  // Your web app's Firebase configuration
  // For Firebase JS SDK v7.20.0 and later, measurementId is optional
  const firebaseConfig = {
    apiKey: "AIzaSyD4CT422dq4PTzkpisXW2-7sATyt3IHYto",
    authDomain: "react-shoppingapp-df5c6.firebaseapp.com",
    projectId: "react-shoppingapp-df5c6",
    storageBucket: "react-shoppingapp-df5c6.appspot.com",
    messagingSenderId: "201841717889",
    appId: "1:201841717889:web:372de17b63cd14e372d380",
    measurementId: "G-SJF2X5C7HP"
  };

  // Initialize Firebase
  const app = initializeApp(firebaseConfig);
  

export default app