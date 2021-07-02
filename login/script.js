const DEV = "https://abhinavjuyal.github.io/jsswebsite/";
const lgLink = document.querySelector("#lLink");
const rgLink = document.querySelector("#rLink");
const head = document.querySelector("#l-head");

window.localStorage.setItem("name", null);
lgLink.addEventListener("click", () => {
  head.innerHTML = "Log In";
  document.querySelector("#regisForm").classList.add("form-hidden");
  document.querySelector("#loginForm").classList.remove("form-hidden");
  document.querySelector(".err").classList.add("form-hidden");
});

rgLink.addEventListener("click", () => {
  head.innerHTML = "Register";
  document.querySelector("#loginForm").classList.add("form-hidden");
  document.querySelector("#regisForm").classList.remove("form-hidden");
  document.querySelector(".err").classList.add("form-hidden");
});

function err(msg) {
  document.querySelector(".err").innerHTML = `${msg}`;
  document.querySelector(".err").classList.remove("form-hidden");
}

document.querySelector("#loginForm").addEventListener("submit", (e) => {
  e.preventDefault();
  let userEmail = document.querySelector("#lg-email").value;
  let userPass = document.querySelector("#lg-pass").value;
  firebase
    .auth()
    .signInWithEmailAndPassword(userEmail, userPass)
    .then((userCredential) => {
      // Signed in
      window.location.replace(DEV);
    })
    .catch((error) => {
      let errorCode = error.code;
      let errorMessage = error.message;
      err(errorMessage);
    });
});

document.querySelector("#regisForm").addEventListener("submit", (e) => {
  e.preventDefault();
  let userEmail = document.querySelector("#rg-email").value;
  let userPass = document.querySelector("#rg-pass").value;
  firebase
    .auth()
    .createUserWithEmailAndPassword(userEmail, userPass)
    .then((userCredential) => {
      window.location.replace(DEV);
    })
    .catch((error) => {
      let errorCode = error.code;
      let errorMessage = error.message;
      err(errorMessage);
    });
});


// console.log(errorMessage);
// if(errorMessage === "There is no user record corresponding to this identifier. The user may have been deleted.") {
//   console.log(1);
//   inside = "Account doesn't exist";
// } else if(errorMessage === "The password is invalid or the user does not have a password.") {
//   console.log(2);
//   inside = "Wrong Password";
// }
// if(!inside) {
//   inside = "Access to this account has been temporarily disabled due to many failed login attempts. You can immediately restore it by resetting your password or you can try again later.";
// }
