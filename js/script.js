let loginForm = document.querySelector('.header .login-form');

document.querySelector('#login-btn').onclick = () => {
    loginForm.classList.toggle('active');
    navbar.classList.remove('active');
}

let navbar = document.querySelector('.header .navbar');

document.querySelector('#menu-btn').onclick = () => {
    navbar.classList.toggle('active');
    loginForm.classList.remove('active');
}

window.onscroll = () => {
    loginForm.classList.remove("active");
    navbar.classList.remove("active");

    if (window.scrollY > 0) {
        document.querySelector(".header").classList.add("active");
    } else {
        document.querySelector(".header").classList.remove("active");
    }
}

window.onload = () => {
    if (window.scrollY > 0) {
        document.querySelector(".header").classList.add("active");
    } else {
        document.querySelector(".header").classList.remove("active");
    }
}

// shop section

let eyeIcons = document.querySelectorAll(".shop .box .fa-eye");
let overlayImg = document.querySelector(".shop .overlay-img");
let closeImg = document.querySelector(".shop .overlay-img .close");

eyeIcons.forEach(eye => {
    eye.addEventListener('click', (e) => {
        overlayImg.classList.add("active");
        let parentCurrent = e.currentTarget.parentElement.parentElement;
        let imgCurrent = parentCurrent.querySelector(".image img").src;
        overlayImg.querySelector(".image img").src = imgCurrent;
    })
    closeImg.addEventListener('click', () => {
        overlayImg.classList.remove("active");
    })
});

let heartIcons = document.querySelectorAll(".shop .box .fa-heart");
let messageHeart = document.querySelector(".shop .message-heart");

heartIcons.forEach(heart => {
    heart.addEventListener("click", (e) => {
        e.currentTarget.classList.toggle("active");
        messageHeart.classList.add("active");
        setTimeout(() => {
            messageHeart.classList.remove("active");
        }, 5000);
    })
})

// services section 

let serviceBtn = document.querySelectorAll(".services .btn");
let serviceBox = document.querySelector(".services .box");

serviceBtn.forEach(btn => {
    btn.addEventListener("click", (e) => {
        let parentBtn = e.currentTarget.parentElement;
        let paraCurrent = parentBtn.querySelector("p");
        paraCurrent.classList.toggle("active");
        parentBtn.classList.toggle("boxRadius");
    })
})

// shop page 
let shopPage = document.querySelector(".shop-page");
let shopIcon = document.querySelector(".header .icons .fa-shopping-cart");
let closePage = document.querySelector(".shop-page .close-page");

shopIcon.onclick = function () {
    shopPage.classList.add("active");
}

closePage.onclick = function () {
    shopPage.classList.remove("active");
}

let shopingCartIcons = document.querySelectorAll(".shop .box .fa-shopping-cart")
let numberShop = document.querySelector(".header .icons .number-shop");
let trashs = document.querySelectorAll(".trash");
let mycarts = document.querySelectorAll(".cart");

trashs.forEach(trash => {
    trash.addEventListener('click', (e) => {
        e.currentTarget.parentElement.remove();
        numberShop.innerHTML--;
    })
})

shopingCartIcons.forEach(icon => {
    icon.addEventListener('click', (e) => {
        numberShop.innerHTML++;
        
        let boxParent = e.currentTarget.parentElement.parentElement;
        let imgbox = boxParent.querySelector(".image img").src;
        let title = boxParent.querySelector(".content h3").innerHTML;
        let price = boxParent.querySelector(".content .amount").innerHTML;
        setProduct(imgbox, title, price);
    })
})

// const boxes = document.querySelectorAll(".boxes");
// boxes.forEach(box => {
//     box.addEventListener('click', (e) => {
//         console.log(e.target);
//     })
// })

// shopPage.innerHTML += `
//     <div class="cart">
//     <img src="${imgbox}" alt="">
//     <div class="info">
//     <div class="title">${title}</div>
//     <input type="number" value="1">
//     <div class="price">${price}</div>
//     </div>
//     <i class="fas fa-trash trash"></i>
//     </div>
//     `