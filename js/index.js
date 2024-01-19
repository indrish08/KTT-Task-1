var body = document.querySelector('body')
var header = document.querySelector('header')

var nav_item_1 = document.querySelector('.nav-item-1 a')
var nav_item_2 = document.querySelector('.nav-item-2 a')
var nav_item_3 = document.querySelector('.nav-item-3 a')
var nav_item_4 = document.querySelector('.nav-item-4 a')
var nav_item_5 = document.querySelector('.nav-item-5 a')

var page_1 = document.querySelector('.page-1')
var page_2 = document.querySelector('.page-2')
var page_3 = document.querySelector('.page-3')
var page_4 = document.querySelector('.page-4')
var page_5 = document.querySelector('.page-5')

var header_color_1 = '#D6EEF7';
var header_color_2 = '#F7E0DF';
var header_color_3 = '#F7EDD9';
var header_color_4 = '#D1EEEA';
var header_color_5 = '#DBE5F2';

var body_color_1 = '#77C5E3';
var body_color_2 = '#E78883';
var body_color_3 = '#E5B964';
var body_color_4 = '#62C4B9';
var body_color_5 = '#7EA3D1';

var current_nav = nav_item_1
var current_page = page_1

nav_item_1.addEventListener('click', function(){
    if(current_nav != this){
        select(this)
        display(page_1, header_color_1, body_color_1)
    }
})

nav_item_2.addEventListener('click', function(){
    if(current_nav != this){
        select(this)
        display(page_2, header_color_2, body_color_2)
    }
})

nav_item_3.addEventListener('click', function(){
    if(current_nav != this){
        select(this)
        display(page_3, header_color_3, body_color_3)
    }
})

nav_item_4.addEventListener('click', ()=>{
    if(current_nav != nav_item_4){
        select(nav_item_4)
        display(page_4, header_color_4, body_color_4)
    }
})

nav_item_5.addEventListener('click', ()=>{
    if(current_nav != nav_item_5){
        select(nav_item_5)
        display(page_5, header_color_5, body_color_5)
    }
})

function select(nav_item){
    current_nav.classList.toggle('selected')
    nav_item.classList.toggle('selected')
    current_nav = nav_item
}

function display(page, header_color, body_color){
    current_page.classList.toggle('active')
    page.classList.toggle('active')
    current_page = page
    header.style.backgroundColor = header_color
    body.style.backgroundColor = body_color
}