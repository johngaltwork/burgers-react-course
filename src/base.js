import Rebase from 're-base';
import firebase from 'firebase/app';
require('firebase/database');

const firebaseApp = firebase.initializeApp({
  apiKey: 'AIzaSyCbEt5_j1XRibk_KLsqbDdmfhvP-F1T458',
  authDomain: 'very-hot-burgers-97f2e.firebaseapp.com',
  databaseURL: 'https://very-hot-burgers-97f2e-default-rtdb.firebaseio.com',
});

const base = Rebase.createClass(firebaseApp.database());

export { firebaseApp };
export default base;
