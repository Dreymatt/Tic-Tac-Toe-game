// const container = document.getElementById('container');
// const noOfImages = document.getElementById('noOfImages');
// const btn = document.getElementById('btn');
// const Breed = document.getElementById('Breed');

//  function getPicture() {
//   const request = new XMLHttpRequest();

//   request.open('GET',`https://api.thecatapi.com/v1/images/search?limit=${noOfImages.value}&category_id=${Breed.value}&api_key=live_u670Pzg1bwPwNHOOQgJVNs3721S8Y4sB4M8kvlp0skF4LDbQf3Bu69DP0jjzkPWE`, false);

//   request.send();

//   const response = JSON.parse(request.responseText);
//   console.log(response)
//   const container = document.getElementById('container');

//   container.innerHTML = `
//   ${response.map((cat) => {
//     return `<img alt="${cat.width}" src="${cat.url}" />`
//   }).join("")}
//   `;
// }
const container = document.getElementById('container');
const noOfImages = document.getElementById('noOfImages');
const btn = document.getElementById('btn');
const Breed = document.getElementById('Breed');

async function getPicture() {
  try {
    const myResponse = await fetch(`https://api.thecatapi.com/v1/images/search?limit=${noOfImages.value}&breed_id=${Breed.value}&api_key=live_u670Pzg1bwPwNHOOQgJVNs3721S8Y4sB4M8kvlp0skF4LDbQf3Bu69DP0jjzkPWE`);
    const catPicture = await myResponse.json();
    console.log(typeof catPicture);
    container.innerHTML = `
    ${catPicture.map((cat) => {
      return `<img src="${cat.url}" />`
  }).join("")}
  `;
  } catch (err) {
    console.log(err);
  }
}

btn.addEventListener('click', getPicture)

