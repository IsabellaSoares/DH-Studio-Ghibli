window.onload = () => {
  getUser();
  getFilms();
};

function getUser() {
  fetch("https://ctd-fe2-todo-v2.herokuapp.com/v1/users/getMe", {
    method: "get",
    headers: {
      Authorization: `${localStorage.getItem("token")}`,
    },
  })
    .then(function (response) {
      return response.json();
    })
    .then(function (data) {
      localStorage.setItem("usuario", JSON.stringify(data));
      const usuario = JSON.parse(localStorage.getItem("usuario"));

      document.getElementById(
        "boas-vindas"
      ).textContent = `Bem-vinda, ${usuario.firstName} ${usuario.lastName}!`;
    })
    .catch(function (err) {
      console.log(err);
    });
}

function getFilms() {
  fetch("https://ghibliapi.herokuapp.com/films", {
    method: "get",
  })
    .then(function (response) {
      return response.json();
    })
    .then(function (data) {
      const cards = data.map((filme) => createCards(filme));

      document.getElementById("conteudo").innerHTML = cards.join("");
    })
    .catch(function (err) {
      console.log(err);
    });
}

function createCards(filme) {
  return `
  <div class="col-sm-4">
    <div class="card">
    <div class="card-header">
      ${filme.title}
    </div>
    <img class="card-img-top" src=${filme.movie_banner} alt="Card image cap">
      <div class="card-body">
        <p class="card-text">${filme.description}</p>
      </div>
    </div>
  </div>`;
}
