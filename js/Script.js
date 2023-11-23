document.addEventListener('DOMContentLoaded',function(){
    var menu = document.querySelector('.nav');
    var ul = document.querySelectorAll('.okeMau');
    
    document.addEventListener('scroll',function(){
        if(window.pageYOffset > 120 ){
            menu.classList.add('codinh');
            ul.classList.add('mauUL');
        }
        else if(window.pageYOffset < 260 ){
            menu.classList.remove('codinh');
            ul.classList.remove('mauUL');
        }
    },false)
},false)

var i = 1;
var N=4;
function next(){
    if(i<N){
        i+=1;
    }
    else
        i=1;
    document.getElementById("slider").setAttribute("src",i+".jpg")
}
function back(){
    if(i>1){
        i-=1;
    }
    else
        i=N;
    document.getElementById("slider").setAttribute("src",i+".jpg")
}
function autoplay(){
    setInterval(next,3000);
}

