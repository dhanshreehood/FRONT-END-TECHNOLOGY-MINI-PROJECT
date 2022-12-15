let register = (e) => {
    e.preventDefault(); //default action that belongs to the event will not occur.
    e.stopPropagation(); //preventing further propagation of the current event in the capturing and bubbling phases

    let url = "http://localhost:3000/user/";

    if ($("#password").val() == $("#confirm-password").val()) {
      let body = {
        first_name: $("#first-name").val(),
        last_name: $("#last-name").val(),
        email: $("#email").val(),
        password: $("#password").val(),
        mobile: $("#phone").val(),
      }
      console.log("body: "+body);

      $.post(url, body, (response) => {
        console.log(response);
        
        $("form").submit();
      })
            
    } else {
      alert("password does not match");
    }

  }