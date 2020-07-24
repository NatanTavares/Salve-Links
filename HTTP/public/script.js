console.log('Script working');
async function loadUrls() {
  const result = await fetch("http://localhost:3000/").then(data => data.json());
  result.urls.map(({ name, url }) => addUrl({ name, url }));
}

function addUrl({ name, url }) {
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

  // <li class="card">
  //   <h3>name: Contato</h3>
  //   <h4>url: <a href="https://linktr.ee/NatanTavares" target="_black">https://linktr.ee/NatanTavares</a></h4>
  // </li>
}

loadUrls();