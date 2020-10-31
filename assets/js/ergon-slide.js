/*====================================================================================================
=====                                                                                          =======
=====               Este site foi feito por "Lucas Oliveira"                                   =======
=====               Telefone (Whatsapp): (82) 98878-5978                                       =======
=====               Instagram: @lucasoliveirawd                                                =======
=====               E-mail: lukasforever02@gmail.com                                           =======
=====                                                                                          =======
=====================================================================================================*/

var slclasses= [];
for(let i = 1; i <= 10; i++) {
    slclasses.push('show-sl'+i);
};

const sbody = document.querySelector('body');

var sec = [];

function slideClean(){
    for(let i in slclasses){
        sbody.classList.remove(slclasses[i]);
        sec = [];
    }
}

function slideFixRig(){
    const int = 700;
        if(sbody.classList.contains(slclasses[0])){
            //removendo left e right do slide 1
            document.querySelector('.slide-wrapper:nth-child(1)').classList.remove('transl-right');
            document.querySelector('.slide-wrapper:nth-child(1)').classList.remove('transl-left');
            //removendo left e adicionando right no slide 2
            setTimeout(function(){document.querySelector('.slide-wrapper:nth-child(2)').classList.add('transl-right')},int);
            setTimeout(function(){document.querySelector('.slide-wrapper:nth-child(2)').classList.remove('transl-left')},int);
            //removendo right e adicionando left no slide 4
            document.querySelector('.slide-wrapper:nth-child(4)').classList.remove('transl-right');
            document.querySelector('.slide-wrapper:nth-child(4)').classList.add('transl-left');

        } else if (sbody.classList.contains(slclasses[1])) {
            //removendo left e right do slide 2
            document.querySelector('.slide-wrapper:nth-child(2)').classList.remove('transl-right');
            document.querySelector('.slide-wrapper:nth-child(2)').classList.remove('transl-left');
            //removendo left e adicionando right no slide 3
            setTimeout(function(){document.querySelector('.slide-wrapper:nth-child(3)').classList.add('transl-right')},int);
            setTimeout(function(){document.querySelector('.slide-wrapper:nth-child(3)').classList.remove('transl-left')},int);
            //removendo right e adicionando left no slide 1
            document.querySelector('.slide-wrapper:nth-child(1)').classList.remove('transl-right');
            document.querySelector('.slide-wrapper:nth-child(1)').classList.add('transl-left');
        }
        else if (sbody.classList.contains(slclasses[2])){
            //removendo left e right do slide 3
            document.querySelector('.slide-wrapper:nth-child(3)').classList.remove('transl-right');
            document.querySelector('.slide-wrapper:nth-child(3)').classList.remove('transl-left');
            //removendo left e adicionando right no slide 4
            setTimeout(function(){document.querySelector('.slide-wrapper:nth-child(4)').classList.add('transl-right')},int);
            setTimeout(function(){document.querySelector('.slide-wrapper:nth-child(4)').classList.remove('transl-left')},int);
            //removendo right e adicionando left no slide 2
            document.querySelector('.slide-wrapper:nth-child(2)').classList.remove('transl-right');
            document.querySelector('.slide-wrapper:nth-child(2)').classList.add('transl-left');
        }
        else if (sbody.classList.contains(slclasses[3])){
            //removendo left e right do slide 4
            document.querySelector('.slide-wrapper:nth-child(4)').classList.remove('transl-right');
            document.querySelector('.slide-wrapper:nth-child(4)').classList.remove('transl-left');
            //removendo left e adicionando right no slide 1
            setTimeout(function(){document.querySelector('.slide-wrapper:nth-child(1)').classList.add('transl-right')},int);
            setTimeout(function(){document.querySelector('.slide-wrapper:nth-child(1)').classList.remove('transl-left')},int);
            //removendo right e adicionando left no slide 3
            document.querySelector('.slide-wrapper:nth-child(3)').classList.remove('transl-right');
            document.querySelector('.slide-wrapper:nth-child(3)').classList.add('transl-left');
        }
}

function slideFixLef(){
    const int = 700;
    if(sbody.classList.contains(slclasses[0])){
        //removendo left e right do slide 1
        document.querySelector('.slide-wrapper:nth-child(1)').classList.remove('transl-right');
        document.querySelector('.slide-wrapper:nth-child(1)').classList.remove('transl-left');
        //removendo left e adicionando right no slide 2
        document.querySelector('.slide-wrapper:nth-child(2)').classList.add('transl-right');
        document.querySelector('.slide-wrapper:nth-child(2)').classList.remove('transl-left');
        //removendo right e adicionando left no slide 8
        setTimeout(function(){document.querySelector('.slide-wrapper:nth-child(4)').classList.remove('transl-right')},int);
        setTimeout(function(){document.querySelector('.slide-wrapper:nth-child(4)').classList.add('transl-left')},int);

    } else if (sbody.classList.contains(slclasses[1])) {
        //removendo left e right do slide 2
        document.querySelector('.slide-wrapper:nth-child(2)').classList.remove('transl-right');
        document.querySelector('.slide-wrapper:nth-child(2)').classList.remove('transl-left');
        //removendo left e adicionando right no slide 3
        document.querySelector('.slide-wrapper:nth-child(3)').classList.add('transl-right');
        document.querySelector('.slide-wrapper:nth-child(3)').classList.remove('transl-left');
        //removendo right e adicionando left no slide 1
        setTimeout(function(){document.querySelector('.slide-wrapper:nth-child(1)').classList.remove('transl-right')},int);
        setTimeout(function(){document.querySelector('.slide-wrapper:nth-child(1)').classList.add('transl-left')},int);
    }
    else if (sbody.classList.contains(slclasses[2])){
        //removendo left e right do slide 3
        document.querySelector('.slide-wrapper:nth-child(3)').classList.remove('transl-right');
        document.querySelector('.slide-wrapper:nth-child(3)').classList.remove('transl-left');
        //removendo left e adicionando right no slide 4
        document.querySelector('.slide-wrapper:nth-child(4)').classList.add('transl-right');
        document.querySelector('.slide-wrapper:nth-child(4)').classList.remove('transl-left');
        //removendo right e adicionando left no slide 3
        setTimeout(function(){document.querySelector('.slide-wrapper:nth-child(2)').classList.remove('transl-right')},int);
        setTimeout(function(){document.querySelector('.slide-wrapper:nth-child(2)').classList.add('transl-left')},int);
    }
    else if (sbody.classList.contains(slclasses[3])){
        //removendo left e right do slide 4
        document.querySelector('.slide-wrapper:nth-child(4)').classList.remove('transl-right');
        document.querySelector('.slide-wrapper:nth-child(4)').classList.remove('transl-left');
        //removendo left e adicionando right no slide 1
        document.querySelector('.slide-wrapper:nth-child(1)').classList.add('transl-right');
        document.querySelector('.slide-wrapper:nth-child(1)').classList.remove('transl-left');
        //removendo right e adicionando left no slide 3
        setTimeout(function(){document.querySelector('.slide-wrapper:nth-child(3)').classList.remove('transl-right')},int);
        setTimeout(function(){document.querySelector('.slide-wrapper:nth-child(3)').classList.add('transl-left')},int);
    }
}

function swapSlidRight(){
        if(sbody.classList.contains(slclasses[0]) === true){
            sbody.classList.remove(slclasses[0]);
            sbody.classList.add(slclasses[1]);
        } else if (sbody.classList.contains(slclasses[1]) === true){
            sbody.classList.remove(slclasses[1]);
            sbody.classList.add(slclasses[2]);
        } else if (sbody.classList.contains(slclasses[2]) === true){
            sbody.classList.remove(slclasses[2]);
            sbody.classList.add(slclasses[3]);
        } else if (sbody.classList.contains(slclasses[3]) === true){
            sbody.classList.remove(slclasses[3]);
            sbody.classList.add(slclasses[0]);
        }
        sec = [];
        slideFixRig();
}

function swapSlidLeft(){
        if(sbody.classList.contains(slclasses[0]) === true){
            sbody.classList.remove(slclasses[0]);
            sbody.classList.add(slclasses[3]);
        } else if (sbody.classList.contains(slclasses[1]) === true){
            sbody.classList.remove(slclasses[1]);
            sbody.classList.add(slclasses[0]);
        } else if (sbody.classList.contains(slclasses[2]) === true){
            sbody.classList.remove(slclasses[2]);
            sbody.classList.add(slclasses[1]);
        } else if (sbody.classList.contains(slclasses[3]) === true){
            sbody.classList.remove(slclasses[3]);
            sbody.classList.add(slclasses[2]);
        }
        sec = [];
        slideFixLef();
}

/*              PASSANDO O SLIDE ATRAVÉS DO MARCADOR                */
document.querySelector('.slide-marker-content:nth-child(1)').addEventListener('click',function(){
    slideClean();
    sbody.classList.add('show-sl1');
    slideFix()
});
document.querySelector('.slide-marker-content:nth-child(2)').addEventListener('click',function(){
    slideClean();
    sbody.classList.add('show-sl2');
    slideFix()
});
document.querySelector('.slide-marker-content:nth-child(3)').addEventListener('click',function(){
    slideClean();
    sbody.classList.add('show-sl3');
    slideFix()
});
document.querySelector('.slide-marker-content:nth-child(4)').addEventListener('click',function(){
    slideClean();
    sbody.classList.add('show-sl4');
    slideFix()
});
document.querySelector('.slide-marker-content:nth-child(5)').addEventListener('click',function(){
    slideClean();
    sbody.classList.add('show-sl5');
    slideFix()
});
document.querySelector('.slide-marker-content:nth-child(6)').addEventListener('click',function(){
    slideClean();
    sbody.classList.add('show-sl6');
    slideFix()
});
document.querySelector('.slide-marker-content:nth-child(7)').addEventListener('click',function(){
    slideClean();
    sbody.classList.add('show-sl7');
    slideFix()
});
document.querySelector('.slide-marker-content:nth-child(8)').addEventListener('click',function(){
    slideClean();
    sbody.classList.add('show-sl8');
    slideFix()
});

function slideAuto(){
    if(sec.length < 4) { 
    sec.push('a');
    } else{
        swapSlidRight();
    }
}

setInterval(slideAuto,1000);