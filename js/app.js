

/*window.onload = function() {
  const request = new XMLHttpRequest();

  request.open('GET', 'https://api.unsplash.com/photos/random?count=10&client_id=j43GRwJ8IAvxsJ06oftve4bgyd2E3hsJIjJX3sPYpxA', false);

  request.send();

  const response = JSON.parse(request.responseText);
  console.log(response)
  const container = document.getElementById('container');

  container.innerHTML = `
    ${response.map((cat) => {
      return `<img src="${cat.url}" />`
  })}
  `;
}*/
const container = document.getElementById('container');
const noOfImages = document.getElementById('noOfImages');
const btn = document.getElementById('btn');

async function getPicture() {
  try {
    const response = await fetch('https://api.thecatapi.com/v1/images/search?limit=' + noOfImages.value);
    const catPicture = response.json();
    console.log(catPicture)
    container.innerHTML = `${`<img src="${catPicture.url}"/>`}`;
  } catch (err) {
    console.log(err);
  }
}

btn.addEventListener('click', getPicture)
