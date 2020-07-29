async function loadUrls() {
  const result = await fetch("http://localhost:3000/").then(data => data.json());
  result.urls.map(({ name, url }) => addUrlCard({ name, url }));
  removeCardFromList(result.urls);
}

async function addUrl(name, url) {
  await fetch(`http://localhost:3000/?name=${name.value}&url=${url.value}`);
}

async function removeUrl(name , url) {
  await fetch(`http://localhost:3000/?name=${name}&url=${url}&del=1`);
}

function addUrlCard({ name, url }) {
  const ul = document.querySelector('.list-url');
  const card = document.createElement('li');

  card.classList.add('card');
  card.innerHTML = `
    <div class="panel-card">
      <h3>name: ${name}</h3>
      <h4>url: <a href="${url}" target="_black">${url}</a></h4>  
    </div>
    <button class="remove-card">-</button>
  `;

  ul.appendChild(card);
}

function handleValues() {
  const buttonSubmit = document.querySelector('#button-more-card');

  buttonSubmit.addEventListener('click', event => {
    const nameInput = document.querySelector('#input-name');
    const urlInput = document.querySelector('#input-url');

    if (nameInput.value && urlInput.value) addUrl(nameInput, urlInput);
  });
} 

function removeCardFromList(urls) {
  const buttons = document.querySelectorAll('.remove-card');

  buttons.forEach((button, index) => {
    button.addEventListener('click', event => {
      const nameDelete = urls[index].name;
      const urlDelete = urls[index].url;

      removeUrl(nameDelete, urlDelete);
    });
  });
}

loadUrls();

handleValues();