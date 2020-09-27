/*====================================================================================================
=====                                                                                          =======
=====               Este site foi feito por "Lucas Oliveira"                                   =======
=====               Telefone (Whatsapp): (82) 98878-5978                                       =======
=====               Instagram: @lucasoliveirawd                                                =======
=====               E-mail: lukasforever02@gmail.com                                           =======
=====                                                                                          =======
=====================================================================================================*/

const body = document.querySelector('body');

// array com as classes para mostra os projetos
let listClProj = ['show-proj-arq','show-proj-hidro','show-proj-hidra','show-proj-combinc',
'show-proj-elet','show-proj-est','show-proj-inf','show-proj-spda'];

/*==========================================================================================
                        desta linha para baixo é para mostrar os projetos
=========================================================================================== */

// arquitetônico

function sArquit (){
    for(let i in listClProj){
        if (listClProj[i] === listClProj[0] && body.classList.contains(listClProj[0]) === true)
        body.classList.remove(listClProj[0]);

        else if (listClProj[i] === listClProj[0] && body.classList.contains(listClProj[0])!==true)
        body.classList.add(listClProj[0]);

        else body.classList.remove(listClProj[i]);
    }
}

// hidrossanitario

function sHidro(){
    for(let i in listClProj){
        if (listClProj[i] === listClProj[1] && body.classList.contains(listClProj[1]) === true)
        body.classList.remove(listClProj[1]);

        else if (listClProj[i] === listClProj[1] && body.classList.contains(listClProj[1])!==true)
        body.classList.add(listClProj[1]);

        else body.classList.remove(listClProj[i]);
    }
}

// hidraulico

function sHidra(){
    for(let i in listClProj){
        if (listClProj[i] === listClProj[2] && body.classList.contains(listClProj[2]) === true)
        body.classList.remove(listClProj[2]);

        else if (listClProj[i] === listClProj[2] && body.classList.contains(listClProj[2])!==true)
        body.classList.add(listClProj[2]);

        else body.classList.remove(listClProj[i]);
    }
}

// Combate a incendio

function sCombInc(){
    for(let i in listClProj){
        if (listClProj[i] === listClProj[3] && body.classList.contains(listClProj[3]) === true)
        body.classList.remove(listClProj[3]);

        else if (listClProj[i] === listClProj[3] && body.classList.contains(listClProj[3])!==true)
        body.classList.add(listClProj[3]);

        else body.classList.remove(listClProj[i]);
    }
}

// eletrico

function sElet(){
    for(let i in listClProj){
        if (listClProj[i] === listClProj[4] && body.classList.contains(listClProj[4]) === true)
        body.classList.remove(listClProj[4]);

        else if (listClProj[i] === listClProj[4] && body.classList.contains(listClProj[4])!==true)
        body.classList.add(listClProj[4]);

        else body.classList.remove(listClProj[i]);
    }
}

// Estrutural

function sEst(){
    for(let i in listClProj){
        if (listClProj[i] === listClProj[5] && body.classList.contains(listClProj[5]) === true)
        body.classList.remove(listClProj[5]);

        else if (listClProj[i] === listClProj[5] && body.classList.contains(listClProj[5])!==true)
        body.classList.add(listClProj[5]);

        else body.classList.remove(listClProj[i]);
    }
}

// Inferiores

function sInf(){
    for(let i in listClProj){
        if (listClProj[i] === listClProj[6] && body.classList.contains(listClProj[6]) === true)
        body.classList.remove(listClProj[6]);

        else if (listClProj[i] === listClProj[6] && body.classList.contains(listClProj[6])!==true)
        body.classList.add(listClProj[6]);

        else body.classList.remove(listClProj[i]);
    }
}

// SPDA

function sSPDA(){
    for(let i in listClProj){
        if (listClProj[i] === listClProj[7] && body.classList.contains(listClProj[7]) === true)
        body.classList.remove(listClProj[7]);

        else if (listClProj[i] === listClProj[7] && body.classList.contains(listClProj[7])!==true)
        body.classList.add(listClProj[7]);

        else body.classList.remove(listClProj[i]);
    }
}


