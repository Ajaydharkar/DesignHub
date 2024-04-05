// JavaScript source code
const firebaseConfig = {
    apiKey: "AIzaSyBeRjIUKNW7AFXUiCZYGmzwZTS7zg_O-kA",
    authDomain: "designhub-ba3ec.firebaseapp.com",
    databaseURL: "https://designhub-ba3ec-default-rtdb.firebaseio.com",
    projectId: "designhub-ba3ec",
    storageBucket: "designhub-ba3ec.appspot.com",
    messagingSenderId: "111160856204",
    appId: "1:111160856204:web:65d6d121c79db1dcee35a9"
};

firebase.initializeApp(firebaseConfig);

var designhubDB = firebase.database().ref('designhub');
document.getElementById('form').addEventListener('submit', submitform);


function submitform(e) {
    e.preventDefault();

    var name = getelementval('name');
    var email = getelementval('email');
    var number = getelementval('number');
    var feedback = getelementval('feedback')

    savemessage(name, email, number, feedback);
}
const savemessage = (name, email, number, feedback) => {
    var newcontactform = designhubDB.push();

    newcontactform.set({
        name: name,
        email: email,
        number: number,
        feedback: feedback,
    });
};

function getelementval(id) {
    return document.getElementById(id).value;
}





