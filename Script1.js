// JavaScript source code
const firebaseConfig = {
    apiKey: "AIzaSyC4mjj9xTBjUAxW5haj64PEVP_7a-32Wx8",
    authDomain: "hire-a0290.firebaseapp.com",
    databaseURL: "https://hire-a0290-default-rtdb.firebaseio.com",
    projectId: "hire-a0290",
    storageBucket: "hire-a0290.appspot.com",
    messagingSenderId: "204570687708",
    appId: "1:204570687708:web:c222dfdc3b01b64dd91c19"
};
firebase.initializeApp(firebaseConfig);
var hiredb = firebase.database().ref('hire');
document.getElementById('hire').addEventListener('submit', submitform);

function submitform(e) {
    // e.preventDefault();

    var fullname = getelementval('fullname');
    var email = getelementval('email');
    var phone = getelementval('phone');
    var coverletter = getelementval('coverletter');
    

    savemessages(fullname, email, phone,coverletter);
}

const savemessages = (fullname, email, phone,coverletter) => {
    var newcontactform = hiredb.push();
    
    newcontactform.set({
        fullname: fullname,
        email: email,
        phone: phone,
        coverletter: coverletter,
    })
};

const getelementval = (id) => {
    return document.getElementById(id).value;
}

function inputchange(input) {
    const label = input.nextElementSibling;
    if(label=='')
    label= textarea.nextElementSibling;
    if (input.value!== '') {
        label.classList.add('hide-label');
    } else {
        label.classList.remove('hide-label');
    }
}