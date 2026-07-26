const firebaseConfig = {
  apiKey: "AIzaSyA0UouPDup3Lxj_SIaNHiA12k3os2m6Hn4",
  authDomain: "smsfollower-dbba0.firebaseapp.com",
  projectId: "smsfollower-dbba0",
  storageBucket: "smsfollower-dbba0.firebasestorage.app",
  messagingSenderId: "955571965943",
  appId: "1:955571965943:web:f2e9a3814270d75c9028f2",
  measurementId: "G-10NXR4N66C"
};

firebase.initializeApp(firebaseConfig);
window.firebaseAuth = firebase.auth();
window.firebaseDb = firebase.firestore();
window.firebasePersistence = window.firebaseAuth.setPersistence(firebase.auth.Auth.Persistence.LOCAL);

window.getUserRole = async function (uid) {
  const snapshot = await firebaseDb.collection("users").doc(uid).get();
  return snapshot.exists ? snapshot.data().role || "user" : "user";
};
