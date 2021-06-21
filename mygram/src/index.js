import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';


ReactDOM.render(<App/>, document.getElementById('root'));

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