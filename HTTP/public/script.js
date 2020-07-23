console.log('Script working');
async function loadUrls() {
  const result = await fetch("http://localhost:3000/").then(data => data.json());
  console.log('> result.urls:', result.urls);

  result.urls.map(({ name, url }) => addUrl({ name, url }));
}

function addUrl({ name, url }) {
  const body = document.querySelector('body');
  const a = document.createElement('a');

  body.appendChild(a);

  a.innerHTML = name;
  a.target = '_black';
  a.href = url;
}

loadUrls();