
// js for shopping cart button
document.getElementById('cart-btn').addEventListener('click',
    function(){
    document.querySelector('.cart').style.display= 'block';
});

document.querySelector('.close-cart').addEventListener('click',
    function(){
    document.querySelector('.cart').style.display= 'none';
});



// document.querySelector('#close-popup').addEventListener('click',
//     function(){
//     document.querySelector('.bg-modal').style.display= 'none';
// });
