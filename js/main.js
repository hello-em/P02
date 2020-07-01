
// js for shopping cart button
// document.getElementById('cart-btn').addEventListener('click',
//     function(){
//     document.querySelector('.cart').style.display= 'block';
// });

// document.querySelector('.close-cart').addEventListener('click',
//     function(){
//     document.querySelector('.cart').style.display= 'none';
// });



// document.querySelector('#close-popup').addEventListener('click',
//     function(){
//     document.querySelector('.bg-modal').style.display= 'none';
// });


// address page js
// var checkbox= document.getElementsByClassName('address-checkbox');
// console.log(checkbox);

// for(var i=0; i<checkbox.length;i++){
//     this.addEventListener('click', 
//     function(e){
//         e.target.parentNode.classList.toggle('selected-block');
//         console.log("click");
//     });
// }




// js for pop up when clicking "add to cart"

//close pop up
var closeBtn= document.querySelector('#close');
var confirmBtn= document.querySelector('#confirm-btn');

closeBtn.addEventListener('click', 
    function(){
        document.querySelector('.cart-popup').style.display= 'none';
});
confirmBtn.addEventListener('click', 
    function(){
        document.querySelector('.cart-popup').style.display= 'none';
});

// open pop up
var addCartBtn= document.getElementsByClassName('add-to-cart');
for(var i=0; i<addCartBtn.length; i++){
    addCartBtn[i].addEventListener('click', function(){
        document.querySelector('.cart-popup').style.display= 'flex';
    });
}

