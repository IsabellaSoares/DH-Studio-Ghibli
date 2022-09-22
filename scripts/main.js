window.onload = () => {
  fetch("https://ghibliapi.herokuapp.com/films", {
    method: "get",
  })
    .then(function (response) {
      return response.json();
    })
    .then(function (data) {
      console.log(data);

      const cards = data.map((filme) => createCards(filme));

      document.getElementById("conteudo").innerHTML = cards.join('');
    })
    .catch(function (err) {
      console.log(err);
    });

  // https://ctd-fe2-todo-v2.herokuapp.com/v1/
};

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
