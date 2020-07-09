
// js for shopping cart button
document.getElementById('cart-btn').addEventListener('click',
    function(){
    document.querySelector('.cart').style.display= 'block';
});

document.querySelector('.close-cart').addEventListener('click',
    function(){
    document.querySelector('.cart').style.display= 'none';
});

