const banner = document.querySelector('#banner'); // constante que seleciona o banner

document.querySelector('.banneroptions .fa-times').addEventListener('click',function(){
    const bannerClasses = ['show-more-company','show-more-mission','show-valores','show-nos']; // array com as classes do banner
    for(let i in bannerClasses){//vamos percorrer esse array
        banner.classList.remove(bannerClasses[i]); //vamos remover todas as classes
    }woToTeam() ; // fução que subistitui "Quem somos" por "Nosso Time"
});

function woToTeam(){
    const b6Title = document.querySelector('.banner:nth-child(5) .bannertitle');
    if(banner.classList.contains('show-nos')===true)
    b6Title.innerHTML = 'Nosso Time';
    else b6Title.innerHTML = 'Quem somos';
}


//          show-more-company
document.querySelector('#button-more-as-company').addEventListener('click',function(){
    banner.classList.toggle("show-more-company");
});

//          show-more-mission
document.querySelector('#button-more-misson').addEventListener('click',function(){
    banner.classList.toggle('show-more-mission');
})

//          show-valores
document.querySelector('#button-more-vail').addEventListener('click',function(){
    banner.classList.toggle('show-valores');
})

//          show-quem-somos
document.querySelector('#button-more-we').addEventListener('click',function(){
    banner.classList.toggle('show-nos');
    woToTeam(); // fução que subistitui "Quem somos" por "Nosso Time"
})