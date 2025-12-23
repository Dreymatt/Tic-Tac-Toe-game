

window.onload = function() {
  const request = new XMLHttpRequest();

  request.open('GET', 'https://api.thecatapi.com/v1/images/search?limit=10', false);

  request.send();

  const response = JSON.parse(request.responseText);

  const container = document.getElementById('container');

  container.innerHTML = `
    ${response.map((cat) => {
      return `<img src="${cat.url}" />`
  })}
  `;
}
