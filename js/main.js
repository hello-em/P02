'use strick'


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

//Filter for mobile to show up and close
function filterPopup() {
  var x = document.getElementById("filter");
  if (x.style.display === "block") {
    x.style.display = "none";
  } else {
    x.style.display = "block";
  }
}