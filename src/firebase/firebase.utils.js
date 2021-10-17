import firebase from'firebase/compat/app';
import 'firebase/compat/firestore';
import 'firebase/compat/auth';


const config = {
      apiKey: "AIzaSyC0ackV2Om5QvYF__Gkuw4b6df9VDTnTUg",
      authDomain: "crown-db-775ce.firebaseapp.com",
      projectId: "crown-db-775ce",
      storageBucket: "crown-db-775ce.appspot.com",
      messagingSenderId: "373492039615",
      appId: "1:373492039615:web:78fb88c8ebbb639a97ab0a",
      measurementId: "G-Q5QL585VM7"
    };

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({prompt: 'select_account'});

export const signInWithGoogle = () => auth.signInWithPopup(provider).catch(()=>{})

export default firebase;

