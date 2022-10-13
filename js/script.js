let menu = document.querySelector('#menu-bars');
let header = document.querySelector('header');

menu.onclick =() =>{
    menu.classList.toggle('fa-times');
    header.classList.toggle('active');
}


window.onscroll =() =>{
    menu.classList.remove('fa-times');
    header.classList.remove('active');
}


let cursor1 = document.querySelector('.cursor-1')
let cursor2 = document.querySelector('.cursor-2')


window.onmousemove = (e) =>{
    cursor1.style.top = e.pageY + 'px';
    cursor1.style.left = e.pageX + 'px';
    cursor2.style.top = e.pageY + 'px';
    cursor2.style.left = e.pageX + 'px';
}

let links = document.querySelectorAll('a').forEach(links =>{

    links.onmouseenter = () =>{
        cursor1.classList.add('active');
        cursor2.classList.add('active');
    }

    links.onmouseleave = () =>{
        cursor1.classList.remove('active');
        cursor2.classList.remove('active');
    }

});

const firebaseConfig = {
    apiKey: "AIzaSyA5UnWihlRlZSYR9FVhjc4varNPlitpu9U",
    authDomain: "personal-website-cb97d.firebaseapp.com",
    databaseURL: "https://personal-website-cb97d-default-rtdb.firebaseio.com",
    projectId: "personal-website-cb97d",
    storageBucket: "personal-website-cb97d.appspot.com",
    messagingSenderId: "45529020178",
    appId: "1:45529020178:web:037f06dfa4ddb81f0a65cb"
  };

  firebase.initializeApp(firebaseConfig);

  var contactFormDB = firebase.database().ref('contactForm');

  document.getElementById('contactForm').addEventListener('submit',submitForm);

  function submitForm(e){
    e.preventDefault();

    var name = getElementVal('name');
    var emailid = getElementVal('emailid');
    var number = getElementVal('number');
    var msgContent = getElementVal('msgContent');

    saveMessages(name, emailid, number, msgContent);

        document.querySelector('.alert').style.display = "block";

        setTimeout(() => {
            document.querySelector('.alert').style.display = "none";
        }, 2000);

        document.getElementById('contactForm').reset()

  }

  const saveMessages = (name, emailid, number, msgContent) => {
    var newContactForm = contactFormDB.push();

    newContactForm.set({
        name : name,
        emailid : emailid,
        number : number,
        msgContent : msgContent,
    })
  }

  const getElementVal = (id) => {
    return document.getElementById(id).value;
  }