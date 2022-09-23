function login (event) {
    event.preventDefault();

    const email = document.getElementById("email").value
    const password = document.getElementById("password").value

    const data = {
        email, password
    }

    fetch("https://ctd-fe2-todo-v2.herokuapp.com/v1/users/login", {
        method: "post",
        headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify(data)
      })
        .then(function (response) {
          return response.json();
        })
        .then(function (data) {
          console.log(data);
          localStorage.setItem('token', data.jwt);
          window.location.href = 'list.html';
        })
        .catch(function (err) {
          console.log(err);
        });
}

function signup (event) {
    event.preventDefault();

    const firstName = document.getElementById("firstName").value
    const lastName = document.getElementById("lastName").value
    const email = document.getElementById("email").value
    const password = document.getElementById("password").value

    const data = {
        firstName, lastName, email, password
    }

    fetch("https://ctd-fe2-todo-v2.herokuapp.com/v1/users", {
    method: "post",
    headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(data)
  })
    .then(function (response) {
      return response.json();
    })
    .then(function () {
      window.location.href = 'index.html';
    })
    .catch(function (err) {
      console.log(err);
    });
}