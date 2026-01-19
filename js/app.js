const container = document.getElementById('container');
const noOfImages = document.getElementById('noOfImages');
const btn = document.getElementById('btn');

 function getPicture() {
  const request = new XMLHttpRequest();

  request.open('GET',`https://api.thecatapi.com/v1/images/search?limit=${noOfImages.value}`, false);

  request.send();

  const response = JSON.parse(request.responseText);
  console.log(response)
  const container = document.getElementById('container');

  container.innerHTML = `
    ${response.map((cat) => {
      return `<img src="${cat.url}" />`
  })}
  `;
}
// const container = document.getElementById('container');
// const noOfImages = document.getElementById('noOfImages');
// const btn = document.getElementById('btn');

// async function getPicture() {
//   try {
//     const response = await fetch(`https://api.thecatapi.com/v1/images/search?api_key=live_u670Pzg1bwPwNHOOQqJVNs3721S8Y4sB4M8Kvlp0skF4LDbQf3Bu69DP0jjzkPWE&limit=${noOfImages.value}`);
//     const catPicture = response.json;
//     console.log(catPicture)
//     container.innerHTML =  `${`<img src = "${catPicture.url}"`}`;
//   } catch (err) {
//     console.log(err);
//   }
// }

btn.addEventListener('click', getPicture)
window.onclick = function(){
  console.log("Window was interacted with");
};

