import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import FirebaseContext from './context/firebase';
import {firebase, FieldValue } from './lib/firebase';



ReactDOM.render(
  <FirebaseContext.Provider value={{firebase, FieldValue }}>
    <App />
  </FirebaseContext.Provider>, document.getElementById('root'));

// client side rendered app: react (create)
// connect to datebase which is Firebase
// react -loading skeleton
// tailwind

// architecure (folder structure)
  // src
       // -> components, 
       // ->constants, 
       // -> context, 
       // -> helpers, 
       // -> hooks,
       // -> pages,
       // -> library (firebase is going to live in here)
       // -> services (firebase functions in here)
       // -> styles ( tailwind's folder (app/tailwind))