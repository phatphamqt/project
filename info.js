const containerEl = document.getElementById('container');
const url_api = "https://5f771bd2d5c9cb0016236aca.mockapi.io/api/user";

const urlParams = new URLSearchParams(window.location.search);
const myParam = urlParams.get('id');
console.log(myParam);

async function getUserById(url_api, id) {
    const res = await fetch(`${url_api}&id=${id}`);
    const products = await res.json();
    console.log(products);
    createUser(products);
}

function createUser(products) {
    const userInnerHtml = `
    <img src="${data[0].image}">
    <a href="./info.html?id=${product.id}">Show info</a>
    `;
    containerEl.insertAdjacentHTML('beforeend', userInnerHtml);
}

getUserById(url_api, myParam);