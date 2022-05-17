type _Config = {
	apiKey: string;
	authDomain: string;
	databaseURL: string;
	projectId: string;
	storageBucket: string;
	messagingSenderId: string;
	appId: string;
};

const firebaseConfig:_Config = {
  apiKey: process.env.REACT_APP_FIREBASE_APIKEY || "",
	authDomain: process.env.REACT_APP_FIREBASE_DOMAIN || "",
	databaseURL: process.env.REACT_APP_FIREBASE_DATABASE || "",
	projectId: process.env.REACT_APP_FIREBASE_PROJECT_ID || "",
	storageBucket: process.env.REACT_APP_FIREBASE_STORAGE_BUCKET || "",
	messagingSenderId: process.env.REACT_APP_FIREBASE_SENDER_ID || "",
	appId: process.env.REACT_APP_FIREBASE_APP_ID || "",
};

export default firebaseConfig;
