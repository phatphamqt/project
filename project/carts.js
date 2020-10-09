// Header
const url_member = "https://5f794a3ee402340016f93000.mockapi.io/api/members"
async function getMember(){
    const response = await fetch(url_member)
    mem = await response.json()
    console.log(mem)
    let btn_sign_in = document.getElementById("btn_sign_in")
    let btn_admin = document.getElementById("admin")
    btn_sign_in.addEventListener ('click', function(){
    let username=prompt("Enter your name")
    for(let i = 0 ; i<mem.length ; i++){
        if(mem[i].name == username){
            console.log(1)
            btn_admin.style.display = "block";
            break
        }
        else{console.log(2)}
    }
    // btn_admin.addEventListener('click', function(){
        
    // })
})
}
getMember()

// content
const url_api = "https://5f771bd2d5c9cb0016236aca.mockapi.io/api/user";
const cover = document.getElementById('cover');
const container = document.getElementById('container');
const checkout = document.getElementById('checkout');

const urlParams = new URLSearchParams(window.location.search);
const myParam = urlParams.get('id');

async function getProductById(url_api, id) {
    const res = await fetch(`${url_api}/${id}`);
    const user = await res.json();
    // console.log(user);
    createImage(user);
    createContainer(user)
    createCheckout(user)
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
        <div class="column">
            <h2>Your order from HonDa Shop:</h2>

            <ul class="order_items">
                <li id="order_item">
                    <span class="product" id="name" >${user.name}</span>
                    <div class="product" id="price" >Price: ${user.price}</div>
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

        </div>
            
        <div class="column">
            <h2>Your info:</h2>
            <div class="form">
                
                <div class="form-control" >
                    <label for="name">Your Name: </label>
                    <input class="inputform" type="text" id="name" placeholder="Phan Minh Khoa">
                </div>
                <div class="form-control" >
                    <label for="phone">Your Phone: </label>
                    <input class="inputform" type="text" id="phone" placeholder="0903333456">
                </div>
                <div class="form-control" >
                    <label for="address">Your Address: </label>
                    <input class="inputform" type="text" id="address" placeholder="253 Điện Biên Phủ">
                </div>

            </div>
        </div>
    
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


function createCheckout (){
    const checkoutinnerHTML = `
    <button id="btn_check_out"><a href="project.html">Check out</a></button>
    `;
    checkout.insertAdjacentHTML('beforeend',checkoutinnerHTML)

    let btn_check_out = document.getElementById("btn_check_out")

    btn_check_out.addEventListener('click',function(){
    alert("Congratulations on your successful order, your order will be shipped as soon as possible")
    
})
}

