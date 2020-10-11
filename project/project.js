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
const url = "https://5f771bd2d5c9cb0016236aca.mockapi.io/api/user"
let sp = document.getElementById("sp")
async function getData(){
    const response = await fetch(url)
    data = await response.json()
    console.log(data)

    for(i=0;i<data.length;i++){
        sp.insertAdjacentHTML('beforeend',`
        <div class="products">
        <img class="picture" src="${data[i].colorr1}">
        <a class="info" href="./info.html?id=${data[i].id}">Show info</a>
        <p class="price">${data[i].price}</p>
        <button id="buy"> <a class="carts" href="./carts.html?id=${data[i].id}">BUY</a></button>
        </div>
        
        `)
    }
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

let post = document.getElementById("post")


// postproduct(product)
post.addEventListener('click',function(){
    let namep = prompt("Enter name of new product")
    let pricep = prompt("Enter price:")
    let colorp = prompt("Enter color avalable(separated by space):")
    let coverp = prompt("Enter cover url:")
    let imagep = prompt("Enter image url of product")
    let dacdiem11 = prompt("Enter dac diem1:")
    let dacdiem11inf = prompt("Enter dac diem 1 info:")
    let typep = prompt("Enter type:")
    let des11= prompt("Enter des1 picture url:")
    let des11inf= prompt("Enter des1inf:")
    let des11det= prompt("Enter des1det:")
    let des22= prompt("Enter des2 picture url:")
    let des22inf= prompt("Enter des2inf:")
    let des22det= prompt("Enter des2det:")
    let enginep= prompt("Enter engine picture url:")
    let engine11inf= prompt("Enter engineinf:")
    let engine11det= prompt("Enter enginedet:")
    let benefit11=prompt("Enter benefit1 url:")
    let benefit11inf=prompt("Enter benefit1inf:")
    let benefit11det=prompt("Enter benefit1det:")
    let benefit22=prompt("Enter benefit2 url:")
    let benefit22inf=prompt("Enter benefit2inf:")
    let benefit22det=prompt("Enter benefit2det:")
    let para1=prompt("para1:")
    let para2=prompt("para2:")
    let para3=prompt("para3:")
    let para4=prompt("para4:")
    let para5=prompt("para5:")
    let para6=prompt("para6:")
    let para7=prompt("para7:")
    let para8=prompt("para8:")
    let para9=prompt("para9:")
    let para10=prompt("para10:")
    let para11=prompt("para11:")
    let para12=prompt("para12:")
    let para13=prompt("para13:")
    let para14=prompt("para14:")
    let para15=prompt("para15:")
    let para16=prompt("para16:")
    let para17=prompt("para17:")
    let para18=prompt("para18:")
    let color1=prompt("color1 url:")
    let color2=prompt("color2 url:")
    let color3=prompt("color3 url:")
    let color4=prompt("color4 url:")
    let color5=prompt("color5 url:")
        let product = {
        name: namep,
        price: pricep,
        color: colorp,
        cover: coverp,
        image: imagep,
        type: typep,
        dacdiem1: dacdiem11,
        dacdiem1inf: dacdiem11inf,
        des1: des11,
        des1inf: des11inf,
        des1det: des11det,
        des2: des22,
        des2inf: des22inf,
        des2det: des22det,
        engine: enginep,
        engine1inf: engine11inf,
        engine1det: engine11det,
        benefit1: benefit11,
        benefit1inf: benefit11inf,
        benefit1det: benefit11det,
        benefit2: benefit22,
        benefit2inf: benefit22inf,
        benefit2det: benefit22det,
        paraa1: para1,
        paraa2: para2,
        paraa3: para3,
        paraa4: para4,
        paraa5: para5,
        paraa6: para6,
        paraa7: para7,
        paraa8: para8,
        paraa9: para9,
        paraa10: para10,
        paraa11: para11,
        paraa12: para12,
        paraa13: para13,
        paraa14: para14,
        paraa15: para15,
        paraa16: para16,
        paraa17: para17,
        paraa18: para18,
        colorr1: color1,
        colorr2: color2,
        colorr3: color3,
        colorr4: color4,
        colorr5: color5,
        }
    postproduct(product)
})

let btn_buy = document.getElementById("btn_buy")

