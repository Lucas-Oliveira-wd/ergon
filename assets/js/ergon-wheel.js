el.addEventListener(scrollY,function(){
    if(pageYOffset > 50) {
        document.querySelector('body').classList.add('menu-opac')
    };
})