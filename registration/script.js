
const auth = firebase.auth();
const login = document.getElementById('login');
const signup = document.getElementById('register');
//login
login.addEventListener('click', e=> {
  const log = auth.signInWithEmailAndPassword(document.getElementById('email').value, document.getElementById('pass').value); //login
  log.catch(e => console.log(e.message)); //catch errors
});
signup.addEventListener('click', e=> {
  
  const log = auth.createUserWithEmailAndPassword(document.getElementById('email').value, document.getElementById('pass').value); //login
  log.catch(e => console.log(e.message)); //catch errors
});
