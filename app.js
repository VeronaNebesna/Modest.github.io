let contMessageBtn = document.querySelector('.contact_message');// Шукаємо кнопку зв'язку
// console.log(sendMessageBtn);

let modalWind = document.querySelector('.modal');// шукаємо вікно
// console.log(modalWind);

let closeBtn=document.querySelector('.close');// шукаємо хрестик
// console.log(closeBtn);

let sendMesBtn = document.querySelector(".send_message")// шукаємо кнопку відправки форми
// console.log(sendMesBtn) 

contMessageBtn.addEventListener("click",function(){ // показується вікно при натисканні на кнопку зв'язку
    modalWind.classList.add("show")
})

closeBtn.addEventListener("click",closeModalWind);// задання події і виклик функції при кліку на хрестик
sendMesBtn.addEventListener("click",closeModalWind);// і на кнопку відправки форми

function closeModalWind(){
    modalWind.classList.remove("show") //видаляє клас для якого display:block
    modalWind.classList.add("hide")//назначає клас для якого display:hide
}


// Закривання вікна при кліку за межами форми
// modalWind.addEventListener("click", function(e){
//     let target = e.target
//     if(target === modalWind){
//         closeModalWind()
//     }
// })


let heightWind = document.body.scrollHeight;
// console.log(heightWind)
let halfHeight = heightWind/2;


let modal_wind_sub = document.querySelector('.modal_wind');

let closeBtnWind = document.querySelector('.btn-close');

window.addEventListener('scroll',displayModal);

let showModalWind = true;

function displayModal (){
    if(window.pageYOffset >= halfHeight && showModalWind){
    modal_wind_sub.classList.add("show");
    showModalWind = false;
}
}

function closeModalWindows(){
    modal_wind_sub.classList.remove('show');
    modal_wind_sub.classList.add('hide')
}

closeBtnWind.addEventListener("click",closeModalWindows);
modal_wind_sub.addEventListener('click',function(e){
    let target=e.target;
    if(target == modal_wind_sub){
        closeModalWindows()
    }
});


// $(document).ready(function(){
//     $('.main-slider').bxSlider({
//         mode:'horizontal',
//     });
//   });


$(document).ready(function(){
    $('.slider').bxSlider({
        controls: false,
        minSlides: 3,
        maxSlides: 3,
        slideMargin:100,
    });
  });