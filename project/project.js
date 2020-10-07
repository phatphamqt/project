const url = "https://5f771bd2d5c9cb0016236aca.mockapi.io/api/user"
let sp = document.getElementById("sp")
async function getData(){
    const response = await fetch(url)
    data = await response.json()
    console.log(data)
    // sp.insertAdjacentHTML('beforeend',`
    // <img src="${data[0].image}">
    
    // `)
}

getData()


async function postproduct(product) {
    await fetch(url, {
        method: 'POST',
        body: JSON.stringify(product),
        headers: {
            'Content-type': 'application/json'
        }
    });
}

let product = {
    id : 1,
    image : "https://hondamotor.vn/upload/hinhanh/x-adv-750178c.jpg",
    color : "black,white",
    price : 120500000,    
    name : "Honda ADV"
}

// postproduct(product)

// Header
