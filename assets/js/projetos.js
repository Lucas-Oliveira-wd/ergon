let idsli = ["projarq", "projhidros", "projhidra", "projcomb", "projelet", "projest", "projinf", "projspda"];
function ocultar() {
    document.getElementById(idsli[0]).style.display = "none";
    document.getElementById(idsli[1]).style.display = "none";
    document.getElementById(idsli[2]).style.display = "none";
    document.getElementById(idsli[3]).style.display = "none";
    document.getElementById(idsli[4]).style.display = "none";
    document.getElementById(idsli[5]).style.display = "none";
    document.getElementById(idsli[6]).style.display = "none";
    document.getElementById(idsli[7]).style.display = "none";
}
function projarq() {
    ocultar();
    let ver = document.getElementById(idsli[0]);
    ver.style.display='block'
    if(ver.classList.contains('activeinmoment') == true){
        ver.classList.remove('activeinmoment');
    document.getElementById(idsli[1]).style.display = "block";
    document.getElementById(idsli[2]).style.display = "block";
    document.getElementById(idsli[3]).style.display = "block";
    document.getElementById(idsli[4]).style.display = "block";
    document.getElementById(idsli[5]).style.display = "block";
    document.getElementById(idsli[6]).style.display = "block";
    document.getElementById(idsli[7]).style.display = "block";
    } else {
        ver.classList.add('activeinmoment');
    }
}
function projhidros() {
    ocultar();
    let ver = document.getElementById(idsli[1]);
    ver.style.display='block'
    if(ver.classList.contains('activeinmoment') == true){
        ver.classList.remove('activeinmoment');
    document.getElementById(idsli[0]).style.display = "block";
    document.getElementById(idsli[2]).style.display = "block";
    document.getElementById(idsli[3]).style.display = "block";
    document.getElementById(idsli[4]).style.display = "block";
    document.getElementById(idsli[5]).style.display = "block";
    document.getElementById(idsli[6]).style.display = "block";
    document.getElementById(idsli[7]).style.display = "block";
    } else {
        ver.classList.add('activeinmoment');
    }
}
function projhidra() {
    ocultar();
    let ver = document.getElementById(idsli[2]);
    ver.style.display='block'
    if(ver.classList.contains('activeinmoment') == true){
        ver.classList.remove('activeinmoment');
    document.getElementById(idsli[0]).style.display = "block";
    document.getElementById(idsli[1]).style.display = "block";
    document.getElementById(idsli[3]).style.display = "block";
    document.getElementById(idsli[4]).style.display = "block";
    document.getElementById(idsli[5]).style.display = "block";
    document.getElementById(idsli[6]).style.display = "block";
    document.getElementById(idsli[7]).style.display = "block";
    } else {
        ver.classList.add('activeinmoment');
    }
}
function projcomb() {
    ocultar();
    let ver = document.getElementById(idsli[3]);
    ver.style.display='block'
    if(ver.classList.contains('activeinmoment') == true){
        ver.classList.remove('activeinmoment');
    document.getElementById(idsli[0]).style.display = "block";
    document.getElementById(idsli[1]).style.display = "block";
    document.getElementById(idsli[2]).style.display = "block";
    document.getElementById(idsli[4]).style.display = "block";
    document.getElementById(idsli[5]).style.display = "block";
    document.getElementById(idsli[6]).style.display = "block";
    document.getElementById(idsli[7]).style.display = "block";
    } else {
        ver.classList.add('activeinmoment');
    }
}
function projelet() {
    ocultar();
    let ver = document.getElementById(idsli[4]);
    ver.style.display='block'
    if(ver.classList.contains('activeinmoment') == true){
        ver.classList.remove('activeinmoment');
    document.getElementById(idsli[0]).style.display = "block";
    document.getElementById(idsli[1]).style.display = "block";
    document.getElementById(idsli[2]).style.display = "block";
    document.getElementById(idsli[3]).style.display = "block";
    document.getElementById(idsli[5]).style.display = "block";
    document.getElementById(idsli[6]).style.display = "block";
    document.getElementById(idsli[7]).style.display = "block";
    } else {
        ver.classList.add('activeinmoment');
    }
}
function projest() {
    ocultar();
    let ver = document.getElementById(idsli[5]);
    ver.style.display='block'
    if(ver.classList.contains('activeinmoment') == true){
        ver.classList.remove('activeinmoment');
    document.getElementById(idsli[0]).style.display = "block";
    document.getElementById(idsli[1]).style.display = "block";
    document.getElementById(idsli[2]).style.display = "block";
    document.getElementById(idsli[3]).style.display = "block";
    document.getElementById(idsli[4]).style.display = "block";
    document.getElementById(idsli[6]).style.display = "block";
    document.getElementById(idsli[7]).style.display = "block";
    } else {
        ver.classList.add('activeinmoment');
    }
}
function projinf() {
    ocultar();
    let ver = document.getElementById(idsli[6]);
    ver.style.display='block'
    if(ver.classList.contains('activeinmoment') == true){
        ver.classList.remove('activeinmoment');
    document.getElementById(idsli[0]).style.display = "block";
    document.getElementById(idsli[1]).style.display = "block";
    document.getElementById(idsli[2]).style.display = "block";
    document.getElementById(idsli[3]).style.display = "block";
    document.getElementById(idsli[4]).style.display = "block";
    document.getElementById(idsli[5]).style.display = "block";
    document.getElementById(idsli[7]).style.display = "block";
    } else {
        ver.classList.add('activeinmoment');
    }
}
function projspda() {
    ocultar();
    let ver = document.getElementById(idsli[7]);
    ver.style.display='block'
    if(ver.classList.contains('activeinmoment') == true){
        ver.classList.remove('activeinmoment');
    document.getElementById(idsli[0]).style.display = "block";
    document.getElementById(idsli[1]).style.display = "block";
    document.getElementById(idsli[2]).style.display = "block";
    document.getElementById(idsli[3]).style.display = "block";
    document.getElementById(idsli[4]).style.display = "block";
    document.getElementById(idsli[5]).style.display = "block";
    document.getElementById(idsli[6]).style.display = "block";
    } else {
        ver.classList.add('activeinmoment');
    }
}