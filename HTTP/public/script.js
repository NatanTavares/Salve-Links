console.log('Script working');

async function loadUrls() {
  const result = await fetch("http://localhost:3000/").then(data => data.json());
  result.urls.map(({ name, url }) => addUrlCard({ name, url }));
}

async function addUrls(name, url) {
  await fetch(`http://localhost:3000/?name=${name.value}&url=${url.value}`)
  .then(message => console.log(String(message)));

  console.log('> passou addUrl');
}

function addUrlCard({ name, url }) {
  const ul = document.querySelector('.list-url');
  const a = document.createElement('a')
  const card = document.createElement('li');

  card.classList.add('card');
  card.innerHTML = `
    <h3>name: ${name}</h3>
    <h4>url: <a href="${url}" target="_black">${url}</a></h4>
  `;

  ul.appendChild(card);

  a.innerHTML = url;
  a.target = '_black';
  a.href = url;
}

loadUrls();

function handleValues() {
  const buttonSubmit = document.querySelector('#button-more-card');
  buttonSubmit.addEventListener('click', event => {

    const nameInput = document.querySelector('#input-name');
    const urlInput = document.querySelector('#input-url');
    
    if (nameInput.value && urlInput.value) addUrls(nameInput, urlInput);
  });
} 

handleValues();