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
const containerEl = document.getElementById('container');
const mainside = document.getElementById('mainside');
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
    <div id="mainimg"> 
    <img src="${user.image}">
    </div>
    <div id="text">
    <p id ="text1">${user.dacdiem1}</p>
    <p id ="text2">${user.dacdiem1inf}</p>
    </div>`
    const mainsideInnerHtml=`
    <div id ="info">
        <div id="name">${user.name}</div>
        <div id="price">Giá từ:${user.price}</div>
        <button class="accordion">THIẾT KÊ</button>
            <div class="panel">
            <img class="panelimg" src="${user.des1}" alt="des1">
            <p class ="textchange1">${user.des1inf}</p>
            <p class ="textchange2">${user.des1det}</p>
            <img class="panelimg" src="${user.des2}" alt="des2">
            <p class ="textchange1">${user.des2inf}</p>
            <p class ="textchange2">${user.des2det}</p>
            </div>
        <button class="accordion">ĐỘNG CƠ-CÔNG NGHỆ</button>
            <div class="panel">
            <img class="panelimg" src="${user.engine}" alt"engine">
            <p class ="textchange1">${user.engine1inf}</p>
            <p class ="textchange2">${user.engine1det}</p>
            </div>
        <button class="accordion">TIỆN ÍCH-AN TOÀN</button>
            <div class="panel">
            <img class="panelimg" src="${user.benefit1}" alt="benefit1">
            <p class ="textchange1">${user.benefit1inf}</p>
            <p class ="textchange2">${user.benefit1det}</p>
            <img class="panelimg" src="${user.benefit2}" alt="benefit2">
            <p class ="textchange1">${user.benefit2inf}</p>
            <p class ="textchange2">${user.benefit2det}</p>
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
        <h2>Bảng màu</h2>
        <hr width="100%" size="5px" color="red" align="center"/>
        <div class="slideshow-container">
    
            <!-- Full-width images with number and caption text -->
            <div class="mySlides fade">
              <div class="numbertext">1 / 3</div>
              <img src="${user.colorr1}" style="width:100%">
              <div class="text">Caption Text</div>
            </div>
          
            <div class="mySlides fade">
              <div class="numbertext">2 / 3</div>
              <img src="${user.colorr2}" style="width:100%">
              <div class="text">Caption Two</div>
            </div>
          
            <div class="mySlides fade">
              <div class="numbertext">3 / 3</div>
              <img src="${user.colorr3}" style="width:100%">
              <div class="text">Caption Three</div>
            </div>
          
            <!-- Next and previous buttons -->
            <a class="prev" onclick="plusSlides(-1)">&#10094;</a>
            <a class="next" onclick="plusSlides(1)">&#10095;</a>
          </div>
          <br>
          
          <!-- The dots/circles -->
          <div style="text-align:center">
            <span class="dot" onclick="currentSlide(1)"></span>
            <span class="dot" onclick="currentSlide(2)"></span>
            <span class="dot" onclick="currentSlide(3)"></span>
          </div>
    `
    
    cover.insertAdjacentHTML('beforeend',coverinnerHTML);
    containerEl.insertAdjacentHTML('beforeend',productInnerHtml);
    mainside.insertAdjacentHTML('beforeend',mainsideInnerHtml);
    parameter.insertAdjacentHTML('beforeend',parameterHtml);
    colortable.insertAdjacentHTML('beforeend',colortableinnerHtml)
    var acc = document.getElementsByClassName("accordion");
    let mainimg = document.getElementById("mainimg");
    let panelimg = document.getElementsByClassName("panelimg");
    let text1= document.getElementById("text1")
    let text2= document.getElementById("text2")
    let textchange1= document.getElementsByClassName("textchange1")
    let textchange2= document.getElementsByClassName("textchange2")
    

    for(let i=0;i<5;i++){
        panelimg[i].addEventListener('click',function(){
            mainimg.src=panelimg[i].src
            text1.innerHTML =textchange1[i].innerHTML 
            text2.innerHTML =textchange2[i].innerHTML
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
           
}

getProductById(url_api, myParam);

 //
 var slideIndex = 1;
 showSlides(slideIndex);
 
 // Next/previous controls
 function plusSlides(n) {
   showSlides(slideIndex += n);
 }
 
 // Thumbnail image controls
 function currentSlide(n) {
   showSlides(slideIndex = n);
 }
 
 function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("mySlides");
  var dots = document.getElementsByClassName("dot");
  if (n > slides.length) {slideIndex = 1}    
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";  
  }
  for (i = 0; i < dots.length; i++) {
      // console.log(dot[i].className)
      dots[i].className = dots[i].className.replace("active","");
  }
  
  slides[slideIndex-1].style.display = "block";  
  dots[slideIndex-1].className += "active";
}