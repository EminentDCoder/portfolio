const navbar  = document.querySelector('.navbar')

window.addEventListener('scroll', ()=>{
    if(this.scrollY > 0){
        navbar.classList.add('shadow', 'py-3');
        navbar.classList.remove('py-4');
    } else{
        navbar.classList.remove('shadow', 'py-3');
        navbar.classList.add('py-4');
    }
})