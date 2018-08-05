import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './containers/App';
import registerServiceWorker from './registerServiceWorker';
import firebase from 'firebase';

// Initialize Firebase for Balam App
var config = {
   apiKey: "AIzaSyDR3tX2BvjTwBM-UjddS-17EZxHY4KlzH0",
   authDomain: "balam-app.firebaseapp.com",
   databaseURL: "https://balam-app.firebaseio.com",
   projectId: "balam-app",
   storageBucket: "",
   messagingSenderId: "13431631508"
};
firebase.initializeApp(config);

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
