let navbar = document.querySelector('.navbar');

document.querySelector('#menu-btn').onclick = () =>{
    navbar.classList.toggle('active');
    searchForm.classList.remove('active');
    cartItem.classList.remove('active');
}

let searchForm = document.querySelector('.search-form');


document.querySelector('#search-btn').onclick = () =>{
    searchForm.classList.toggle('active');
    searchForm.classList.remove('active');
    cartItem.classList.remove('active');
}

let cartItem = document.querySelector('.cart-items-container');


document.querySelector('#cart-btn').onclick = () =>{
    cartItem.classList.toggle('active');
}
window.onscroll = () =>{
    navbar.classlist.remove('active');
    searchForm.classList.remove('active');
    cartItem.classList.remove('active');
}

