// Initialize Firebase with your own configuration
const firebaseConfig = {
    apiKey: "YOUR_API_KEY",
    authDomain: "YOUR_AUTH_DOMAIN",
    projectId: "YOUR_PROJECT_ID",
    storageBucket: "YOUR_STORAGE_BUCKET",
    messagingSenderId: "YOUR_MESSAGING_SENDER_ID",
    appId: "YOUR_APP_ID"
};

firebase.initializeApp(firebaseConfig);

const auth = firebase.auth();

document.getElementById('login').addEventListener('submit', function (e) {
    e.preventDefault();
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    auth.signInWithEmailAndPassword(username, password)
        .then(() => {
            alert('Logged in successfully!');
        })
        .catch(error => {
            alert(error.message);
        });
});

document.getElementById('register').addEventListener('submit', function (e) {
    e.preventDefault();
    const newUsername = document.getElementById('newUsername').value;
    const newPassword = document.getElementById('newPassword').value;

    auth.createUserWithEmailAndPassword(newUsername, newPassword)
        .then(() => {
            alert('Registered successfully!');
        })
        .catch(error => {
            alert(error.message);
        });
});

document.getElementById('googleSignIn').addEventListener('click', function () {
    const provider = new firebase.auth.GoogleAuthProvider();

    auth.signInWithPopup(provider)
        .then(() => {
            alert('Logged in with Google successfully!');
        })
        .catch(error => {
            alert(error.message);
        });
});
