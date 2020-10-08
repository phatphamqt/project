const containerEl = document.getElementById('container');
const cover = document.getElementById('cover');
const parameter = document.getElementById('parameter')
const colortable = document.getElementById('colortable')
const url_api = "https://5f771bd2d5c9cb0016236aca.mockapi.io/api/user";

const urlParams = new URLSearchParams(window.location.search);
const myParam = urlParams.get('id');
console.log(myParam);


async function getProductById(url_api, id) {
    const res = await fetch(`${url_api}/${id}`);
    const user = await res.json();
    console.log(user);
    createProduct(user);
    
}

function createProduct(user) {
    
    const coverinnerHTML = `
    <img src="${user.cover}">
    `;
    const productInnerHtml = `
    <div id = "main">
    <img id="mainimg" src="${user.image}">
    <p>${user.dacdiem1}<br>${user.dacdiem1inf}</p>
    </div>
    <div id ="info">
        <div id="name">${user.name}</div>
        <div id="price">Giá từ:${user.price}</div>
        <button class="accordion">THIẾT KÊ</button>
            <div class="panel">
            <img class="panelimg" src="${user.des1}" alt="des1">
            <p>${user.des1inf}<br>${user.des1det}</p>
            <img class="panelimg" src="${user.des2}" alt="des2">
            <p>${user.des2inf}<br>${user.des2det}</p>
            </div>
        <button class="accordion">ĐỘNG CƠ-CÔNG NGHỆ</button>
            <div class="panel">
            <img class="panelimg" src="${user.engine}" alt"engine">
            <p>${user.engine1inf}<br>${user.engine1det}</p>
            </div>
        <button class="accordion">TIỆN ÍCH-AN TOÀN</button>
            <div class="panel">
            <img class="panelimg" src="${user.benefit1}" alt="benefit1">
            <p>${user.benefit1inf}<br>${user.benefit1det}</p>
            <img class="panelimg" src="${user.benefit2}" alt="benefit2">
            <p>${user.benefit2inf}<br>${user.benefit2det}</p>
            </div>
    </div>`
    const parameterHtml=`
    <div id="thongso">
        <h2>Thông số kĩ thuật</h2>
        <hr width="100%" size="5px" color="red" align="center"/>
        
        <table>
        <tr><td>Khối lượng bản thân</td><td>${user.paraa1}</td></tr>
        <tr><td>Dài x Rộng x Cao</td><td>${user.paraa2}</td></tr>
        <tr><td>Khoảng cách trục bánh xe</td><td>${user.paraa3}</td></tr>
        <tr><td>Độ cao yên</td><td>${user.paraa4}</td></tr>
        <tr><td>Khoảng sáng gầm xe</td><td>${user.paraa5}</td></tr>
        <tr><td>Dung tích bình xăng</td><td>${user.paraa6}</td></tr>
        <tr><td>Kích cỡ lớp trước/ sau</td><td>${user.paraa7}</td></tr>
        <tr><td>Phuộc trước</td><td>${user.paraa8}</td></tr>
        <tr><td>Phuộc sau</td><td>${user.paraa9}</td></tr>
        <tr><td>Loại động cơ</td><td>${user.paraa10}</td></tr>
        <tr><td>Công suất tối đa</td><td>${user.paraa11}</td></tr>
        <tr><td>Dung tích nhớt máy</td><td>${user.paraa12}</td></tr>
        <tr><td>Hộp số</td><td>${user.paraa13}</td></tr>
        <tr><td>Hệ thống khởi động</td><td>${user.paraa14}</td></tr>
        <tr><td>Moment cực đại</td><td>${user.paraa15}</td></tr>
        <tr><td>Dung tích xy-lanh</td><td>${user.paraa16}</td></tr>
        <tr><td>Đường kính x Hành trình pít tông</td><td>${user.paraa17}</td></tr>
        <tr><td>Tỷ số nén</td><td>${user.paraa18}</td></tr>
        </table>
    </div>`;
    const colortableinnerHtml =`
    <div id="bangmau">
        <h2>Bảng màu</h2>
        <hr width="100%" size="5px" color="red" align="center"/>
        <img id="maincolor" src="${user.image}">
        <img class="colorpanel" src="${user.colorr1}" alt="mau1">
        <img class="colorpanel" src="${user.colorr2}" alt="mau2">
        <img class="colorpanel" src="${user.colorr3}" alt="mau3">
        <img class="colorpanel" src="${user.colorr4}" alt="mau4">
        <img class="colorpanel" src="${user.colorr5}" alt="mau5">
    `
    
    cover.insertAdjacentHTML('beforeend',coverinnerHTML)
    containerEl.insertAdjacentHTML('beforeend',productInnerHtml);
    parameter.insertAdjacentHTML('beforeend',parameterHtml);
    colortable.insertAdjacentHTML('beforeend',colortableinnerHtml)
    var acc = document.getElementsByClassName("accordion");
    let mainimg = document.getElementById("mainimg");
    let panelimg = document.getElementsByClassName("panelimg");
    let maincolor = document.getElementById("maincolor");
    let colorpanel = document.getElementsByClassName("colorpanel");
    console.log(colorpanel)
    for(let i=0;i<5;i++){
        panelimg[i].addEventListener('click',function(){
            mainimg.src=panelimg[i].src
        })
    }

    for (i = 0; i < acc.length; i++) {
        acc[i].addEventListener("click", function() {
        this.classList.toggle("active");
        var panel = this.nextElementSibling;
            if (panel.style.display === "block") {
                panel.style.display = "none";
            } else {
                panel.style.display = "block";
            }
        });
        }
    for(let i=0;i<5;i++){
        colorpanel[i].addEventListener('click',function(){
            maincolor.src=colorpanel[i].src
        })
    }    
}

getProductById(url_api, myParam);

