// product list
document.getElementById('js-trial').addEventListener('click',
    function(){
    document.querySelector('.bg-modal').style.display= 'block';
});

document.querySelector('#close-popup').addEventListener('click',
    function(){
    document.querySelector('.bg-modal').style.display= 'none';
});