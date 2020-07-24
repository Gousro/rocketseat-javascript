// Exercício 1
/*
var idade = parseInt(prompt('Digite sua idade: '), 10);
function checaIdade(idade) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (idade >= 18) {
        resolve()
      } else {
        reject()
      }
    }, 2000)
  })
}
checaIdade(idade)
  .then(function () {
    console.log("Maior que 18");
  })
  .catch(function () {
    console.log("Menor que 18");
  });
*/
// Exercício 2

var listElement = document.querySelector('ul');
var inputElement = document.querySelector('input');

function getRepositories(repositories) {
  listElement.innerHTML = ""; // Limpa a lista
  for (repo of repositories) {
    const repoElement = document.createTextNode(repo.name); // Vai salvar o nome do repositório
    const liElement = document.createElement('li'); // Criar a tag li

    liElement.appendChild(repoElement); // Coloca o nome do repositório dentro da tag li
    listElement.appendChild(liElement); // Coloca a tag li dentro da tag ul
  }
}

function renderListRepositories() {
  var user = inputElement.value;

  if (!user) return;

  renderLoading(); // Faz parte do exercício 3

  axios.get('https://api.github.com/users/' + user + '/repos').then((response) => {
    getRepositories(response.data)
  }).catch((error) => {
    renderError(); // Faz parte do exercício 3
    console.log(error)
  })
}

// Exercício 3
function renderLoading(loading) {
  listElement.innerHTML = ""; // Limpa a lista
  var textElement = document.createTextNode('Carregando...');
  var loadingElement = document.createElement('li');
  loadingElement.appendChild(textElement);
  listElement.appendChild(loadingElement);
}
function renderError(loading) {
  listElement.innerHTML = ""; // Limpa a lista
  var textElement = document.createTextNode('Ocorreu um error!');
  var errorElement = document.createElement('li');
  errorElement.style.color = "#F00";
  errorElement.style.fontWeight = 'bolder';
  errorElement.appendChild(textElement);
  listElement.appendChild(errorElement);
}