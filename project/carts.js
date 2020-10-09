const url_api = "https://5f771bd2d5c9cb0016236aca.mockapi.io/api/user";
const cover = document.getElementById('cover');
const container = document.getElementById('container');

const urlParams = new URLSearchParams(window.location.search);
const myParam = urlParams.get('id');

async function getProductById(url_api, id) {
    const res = await fetch(`${url_api}/${id}`);
    const user = await res.json();
    // console.log(user);
    createImage(user);
    createContainer(user)
}

getProductById(url_api, myParam);

function createImage(user){
    const imageinnerHTML = `
    <img src="${user.image}">
    `;
    cover.insertAdjacentHTML('beforeend',imageinnerHTML)
}


function createContainer(user){
    const containerinnerHTML = `
    <div class="order">
            <h2>Your order from HonDa Shop:</h2>
            <ul class="order_items">
                <li id="order_item">
                    <span>${user.name}</span>
                    <div id="price" >Price: ${user.price}</div>

                    <span class="quantity">
                        <button id="btn_down">-</button>
                        <input id="carts_input" type="number" value ="0">
                        <button id="btn_up"">+</button>
                    </span>
    
                    
                </li>
            </ul>
   
            <div class="sum">
                <p style="font-size:25px">TOTAL: <span id="total">0 VNĐ</span></p>
            </div>
    
            <button id="btn_check_out">Check out</button>
        </div>
    `;
    container.insertAdjacentHTML('beforeend',containerinnerHTML)

    let total = document.getElementById("total")
    let btn_up = document.getElementById("btn_up")
    let btn_down = document.getElementById("btn_down")
    let carts_input = document.getElementById("carts_input")
    let price = document.getElementById("price")
    let priceup = user.price
    priceup = priceup.split(" ")
    let a = priceup[0]
    let d = 0
    let b = a.split('.')
    const c = Number(b.join("")) 
    
    function Createprice(btn,cc,input){
    btn.addEventListener('click',function(){
        let carts_input_value = Number(carts_input.value)
        carts_input_value += input
        d += cc  // number
        d = d.toString()
        d = d.split("")  // array
        let ii = 1
        for (let i = d.length - 1; i > 0; i--) {
            if (ii % 3 == 0) {
                d.splice(i, 0, ".")
            }
            ii += 1
        }
        d = d.join("")  // string

        document.getElementById("carts_input").value = carts_input_value
        document.getElementById("total").textContent = d +" VNĐ"
        d = d.split('.')  //array
        d = Number(d.join(""))  
    })
}

Createprice(btn_up,c,1)
Createprice(btn_down,-c,-1)    


}





