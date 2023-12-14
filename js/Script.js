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

$(document).ready(function(){
           
    // $("#buy").click(function(){
    //     $("#cart_go")[0].click();
    // })
    var amount = Number(sessionStorage.getItem(amount));
    var listP="";
    // $("#buy").click(function(){
        
    //     if (amount != null)
    //         amount += 1;
            
        
    //     else
    //         amount = 1;
        
    //     $(".amount").text(amount);
    //     $(".amount").show();
    //     sessionStorage.setItem("amount", amount);

    //     var pImg= $(".item").find(".item_img").attr("src");
    //     var pName= $(".item").parent().find(".item_name").text();
    //     var pPrice= $(".item").parent().find(".gs").text();
    //     // var pImg= $(this).parent().find(".product-img").attr("src");
    //     // var pName= $(this).parent().find(".product-name").text();
    //     // var pPrice= $(this).parent().find(".sale-price").text();
    //     var product = {
    //         "img": pImg,
    //         "name": pName,
    //         "price": pPrice,
    //     }
    //     var cart = sessionStorage.getItem("cart");
        
    //     if (cart != null)
    //         listP = cart +","+ JSON.stringify(product);
        
    //     else
    //         listP = JSON.stringify(product);
        
    //     sessionStorage.setItem("cart",listP);
    // })
})