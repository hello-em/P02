
// js for product list: click "Add to cart" button,
// change text and show effect of selected

var detailCart = document.querySelector('.detail-btn');

detailCart.addEventListener('click', function(){
    detailCart.textContent= "Added to cart";
    detailCart.classList.add('detail-btn-selected');
});