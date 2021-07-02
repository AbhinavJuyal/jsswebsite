let logout__options = document.querySelector("#logout__options");
let lPageLink = document.querySelector("#lPageLink");
let userName = document.querySelector("#userName");

document.querySelectorAll(".list").forEach((e) => {
  e.addEventListener("mouseover", () => {
    console.log(10);
    e.children[1].classList.toggle("hidden");
  });
  e.addEventListener("mouseout", () => {
    console.log(10);
    e.children[1].classList.toggle("hidden");
  });
});

document.querySelector("#lPageLink").addEventListener("click", () => {
  window.location.replace("./login/login.html");
});

firebase.auth().onAuthStateChanged((user) => {
  console.log(10);
  if (user) {
    logout__options.classList.remove("hidden");
    lPageLink.classList.add("hidden");
    if (user.displayName) userName.innerHTML = user.displayName;
    else userName.innerHTML = user.email;
  }
});

function logout() {
  firebase
    .auth()
    .signOut()
    .then(() => {
      console.log("logout here");
      logout__options.classList.add("hidden");
      lPageLink.classList.remove("hidden");
      userName.innerHTML = "";
      window.alert("logout successfull.");
      window.location.reload();
      
    })
    .catch((error) => {
      // An error happened
      console.log(error);
    });
}

document.querySelector(".fa-bars").addEventListener("click", () => {
  document.querySelector(".alt-nav").classList.toggle("translate");
});

document.querySelector("#backBtn").addEventListener("click", () => {
  document.querySelector(".alt-nav").classList.toggle("translate");
});
