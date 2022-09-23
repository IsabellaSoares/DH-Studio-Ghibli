window.onload = () => {
  getUser();
  getFilms();
};

function getUser () {
  // 1. Pegar as informações do usuário logado
  // 2. Guardar essas informações no browser
  // 3. Usar o código abaixo para dar boas-vindas ao usuário

  // document.getElementById(
  //   "boas-vindas"
  // ).textContent = `Bem-vinda, ${primeiro_nome_do_usuario} ${segundo_nome_do_usuario}!`;
}

function getFilms () {
  // 1. Pegar a lista de filmes na API do Studio Ghibli (https://ghibliapi.herokuapp.com/films)
  // 2. Criar a lista de cards
  // 3. Inserir a lista na div "conteudo"
}

function createCards() {
  // Esse é o card de um filme, lembre-se de inserir as informações necessárias

  return `
  <div class="col-sm-4">
    <div class="card">
    <div class="card-header">
      <Nome do filme>
    </div>
    <img class="card-img-top" src="imagem_do_filme" alt="Card image cap">
      <div class="card-body">
        <p class="card-text"><Descrição do filme></p>
      </div>
    </div>
  </div>`;
}
