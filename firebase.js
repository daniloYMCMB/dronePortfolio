import * as firebase from 'firebase';
import firestore from 'firebase/firestore';

const settings = {timestampsInSnapshots: false};

const config = {
	apiKey: "AIzaSyANEVgK9gfjKQfqn_RopgWhAB8MP3CgkZc",
	authDomain: "daniloviacava-40daf.firebaseapp.com",
	databaseURL: "https://daniloviacava-40daf.firebaseio.com",
	projectId: "daniloviacava-40daf",
	storageBucket: "daniloviacava-40daf.appspot.com",
	messagingSenderId: "107745328618",
	appId: "1:107745328618:web:ca20c18f454da06d"
};

// firebase.firestore().settings(settings);

export default !firebase.apps.length ? firebase.initializeApp(config) : firebase.app();