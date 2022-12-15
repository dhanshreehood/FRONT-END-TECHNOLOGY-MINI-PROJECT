let logIn = (e) => {
  e.preventDefault();
  let url = "http://localhost:3000/user/";

  let email = $("#email").val();
  console.log(email);

  let password = $("#password").val();
  console.log(password);

  $.getJSON(url, (res, status, req) => {
    console.log("REsponse: " + res);

    for (let i = 0; i < res.length; i++) {
      if (res[i].email == email && res[i].password == password) {
        //adding key to the given Storage object, or update that key's value if it already exists.         
        localStorage.setItem("first_name", res[i].first_name);

        //returns the href (URL) of the current page
        window.location.href = "/Team4_Angular/html/selectLanguage.html";

      }
    }

    console.log(status);
    console.log(req);
  })
}