var listperson=JSON.parse(localStorage.getItem('register')) || [];
var listuser=JSON.parse(localStorage.getItem('user')) || [];
$(document).ready(function(){
  var d=0;
  for(x of listperson)
  {
      d=d+1;
      if(listuser.tailkhoan==x.username && listuser.matkhau==x.password)
      {
        $('#txt_hdem').val(x.name);
         $('#txt_email').val(x.email);
         $('#txt_diachi').val(x.address);
         $('#txt_sdt').val(x.phone);
        $('#txt_tinh').val(x.tinh);
      }

  }
})
function addCart(item){
  item.quantity =1;
  var list;
  if(localStorage.getItem('Cart')==null)
  {
    list=[item];
  }
  else
  {
    list=JSON.parse(localStorage.getItem('Cart')) || [];
    let ok=true;
    for(let x of list)
    {
      if(x.id == item.id)
      {
        x.quantity += 1;
        ok=false;
        break;
      }
    }
    if(ok)
    {
      list.push(item);
    }
  }
  localStorage.setItem("Cart",JSON.stringify(list));
  alert("Thêm vào giỏ hàng thành công");
  location.reload();
}
var listcart=JSON.parse(localStorage.getItem('Cart')) || [];
function ADDung(){
  var km=$('.CTKM').val();
  var t=0;
  var kmt;
  var ten="";
  for(x of listcart){
    t += x.price * x.quantity;}
  if(km =="20-11")
   {
     ten="10%"
     kmt=Math.round((t*0.9)*1.1);
   }
   else
   {
     ten="0%"
     kmt=Math.round(t*1.1);
    
   }
   var totall={km:ten,total:kmt}
   localStorage.setItem("Discount",JSON.stringify(totall));
  location.reload();
}
var listcart=JSON.parse(localStorage.getItem('Cart')) || [];
var listdiscount=JSON.parse(localStorage.getItem('Discount')) || [];
var listbill=JSON.parse(localStorage.getItem('bill')) || [];
function LoadData(){
  var str="";
  var tt="";
  var n=0;
  var t=0;
  var str2=""
  for(x of listcart){
    n=n+x.quantity
    t += x.price * x.quantity;
    str += `<div class="Cart-product">
    <div class="cart-item cart-column">
        <img class="Cart-img" src="`+x.image+`">
        <span class="Cart-infor">`+x.name+`</span>
    </div>
    <span class="cart-price price-product cart-column">`+x.price+`đ</span>
    <div class="cart-quantity cart-quantity-ca cart-column">
        <input style="width:50% ;text-align:center;line-height: 30px;border-radius: 5px;
        border: 1px solid #56CCF2;background-color: #eee;color: #333;
        padding-left: 5px;" id="q_`+Number(x.id)+`" onchange="updateQuantity(`+ x.id + `)" type="number" value="`+ x.quantity + `">
        <button onclick="Remove(`+ x.id + `)" class="Cart-xoa" type="button">Xóa</button>
    </div>
    </div>
    `;
      str2 += `<div class="Cart-product">
      <div class="cart-item cart-column">
          <img class="Cart-img" src="`+x.image+`">
          <span class="Cart-infor">`+x.name+`</span>
      </div>
      <span class="cart-price price-product cart-column">`+x.price+`đ</span>
      <div class="cart-quantity cart-quantity-ca cart-column">
          <input style="width:50% ;text-align:center;line-height: 30px;border-radius: 5px;
          border: 1px solid #56CCF2;background-color: #eee;color: #333;
          padding-left: 5px;" id="q2_`+Number(x.id)+`" onchange="updateQuantity2(`+Number(x.id)+ `)" type="number" value="`+ x.quantity + `">
          <button onclick="Remove2(`+Number(x.id)+ `)" class="Cart-xoa" type="button">Xóa</button>
      </div>
      </div>
      `;
    tt += `<div class="Infoder1"> 
    <img src="` + x.image+`" width="100%" >
    <div>
        <span> `+x.name+`</span><br>
        <span > Số lượng : `+x.quantity+`</span>
    </div>
    </div>`;
  }
  if( listdiscount.km=="10%")
  {
    listdiscount.total=Math.round(((t)*0.9)*1.1) ;
    $('.CTKM').val("20-11");
    listdiscount.km="10%";
  }
  else
  {
    listdiscount.km="0%";
    listdiscount.total=Math.round((t)*1.1) ;
  }
  var totall={km:listdiscount.km,total:listdiscount.total}
  localStorage.setItem("Discount",JSON.stringify(totall));
  if(n==0)
  {
    $('.cart-total-price4').text("0đ")
    listdiscount=[]
  }
  $('.Infoder11').html(tt);
  $('.over-cart').html(str);
  $('.over-cart2').html(str2);
  $('.cart-total-price').text(t+"đ");
  $('#Soluong').text("("+n+") sản phẩm");
  $('.OnCart').text("("+n+")");
  $('.cart-total-price2').text(listdiscount.km);
  if(listdiscount != "")
  {
    $('.cart-total-price4').text(listdiscount.total+"đ")
  }
  else
  {
    $('.cart-total-price4').text("0đ")
  }
 
}
LoadData();
function Paying(){
  window.location.href="InformationCS.html";
}
function RemoveCart(){
  localStorage.setItem('Cart',null);
  location.reload();
}
function Remove(id){
  var index=listcart.findIndex( x => x.id == id);debugger
  if(index >=0 ){
    listcart.splice(index,1);
  }
  LoadData();
}
function Remove2(id){
  var index=listcart.findIndex( x => x.id == id);debugger
  if(index >=0 ){
    listcart.splice(index,1);
  }
  LoadData();
}
function UpdateCart(){
  localStorage.setItem('Cart',JSON.stringify(listcart));
  localStorage.setItem('Discount',JSON.stringify(listdiscount));
  alert("Bạn đã cập nhập thành công giỏ hàng");
}
function updateQuantity(id) {
  var quantity = Number($('#q_'+id).val());
  var index = listcart.findIndex(x => x.id == id);
  if (index >= 0 && quantity >=1) {
    listcart[index].quantity = quantity; 
  }
  LoadData();
}
function updateQuantity2(id) {
  var quantity = Number($('#q2_'+id).val());
  var index = listcart.findIndex(x => x.id == id);
  if (index >= 0 && quantity >=1) {
    listcart[index].quantity = quantity; 
  }
  LoadData();
}
function validateEmail(email) {
  const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return re.test(String(email).toLowerCase());
}
function validatePhone(Phone) {
  var filter = /^[0-9-+]+$/;
  if (filter.test(Phone)) {
      return true;
  }
  else {
      return false;
  }
}

function DatHang() {
let d = new Date();
let year = d.getFullYear(); 
let month = d.getMonth() + 1;
let day = d.getDate();
let dayofweek = d.getDay();
const dayname = ['CN','T2','T3','T4','T5','T6','T7'];

  var hoten = $('#txt_hdem').val();
  var email = $('#txt_email').val();
  var address = $('#txt_diachi').val();
  var sdt = $('#txt_sdt').val();
  var tinh=$('#txt_tinh').val();
  if (hoten == null || hoten == '' || hoten.length > 50) {
      $('#s_hdem').html('Sai định dạng họ đệm');
  } 
  else {
      $('#s_hdem').html('*');
      {
        if ( !validateEmail(email) && email != '' ) 
        {
            $('#s_email').html('Sai định dạng email');
        } 
        else 
        {
          if(email == '')
          {
            $('#s_email').html('Email không được để trống');
          }
          else
          {
            $('#s_email').html('*');
            {
                //
                if (address == null || address=='') {
                  $('#s_diachi').html('Địa chỉ không được để rỗng !');
                  } 
                  else 
                  {
                  $('#s_diachi').html('*');
                  {
                    if (sdt == ''   && (validatePhone(sdt)==false)) {
                      $('#s_sdt').html('Sai định dạng điện thoại');
                  } else {
                    if(sdt.length !=10)
                    {
                      $('#s_sdt').html('Sai định dạng điện thoại');
                    }
                    else
                    {
                      $('#s_sdt').html('*');
                      alert("Đặt hàng thành công!");
                           //Print
                            var str = `
                            <section style="text-align: center;">
                                <h1>HÓA ĐƠN</h1>
                            </section>
                            <div style="font-style: italic;">`+
                            dayname[dayofweek] + ' ngày '+ day + '/' + month+ '/'+ year    
                            +`</div>
                            <div class="donvi">Tên đơn vị bán hàng: Công ty bán đồng hồ ABC</div>
                            <div>Người mua hàng : `+hoten+`</div>
                            <div>Số điện thoại : `+sdt+`</div>
                            <div>Email : `+email+`</div>
                            <div>Địa chỉ : `+ address +` - Tỉnh  `+ tinh +`</div>
                            <table style="width: 100%;text-align:left">
                                <tr>
                                    <th>STT</th>
                                    <th>Tên hàng</th>
                                    <th>Số lượng</th>
                                    <th>Thành tiên</th>
                                    </tr>        
                          `;
                          var n = 0;
                         
                          var bill2 = [];
                          for (x of listcart) {
                            bill2.push({
                              "Masp" : x.id,
                              "tensp" : x.name,
                              "soluong" : x.quantity,
                              "Tongtien" : (x.price * x.quantity)
                            }) 
                            str += `
                            <tr >
                                <td>`+(++n)+`</td>
                                <td >`+x.name+`</td>
                                <td >`+x.quantity+`</td>
                                <td>`+ (x.price * x.quantity) +` đ</td>
                            </tr>
                            `;
                          }
                          bill2.push({
                            "giamgia":listdiscount.km,
                            "thanhtoan":listdiscount.total,
                            "thu":dayname[dayofweek],
                            "day":day,
                             "thang":month,
                             "nam":year,
                             "sdt":sdt
                          }) 
                          if(listbill==null)
                          {
                            listbill=bill2
                          }
                          else
                          {
                            listbill.push(bill2);
                          }
                          
                          localStorage.setItem("bill",JSON.stringify(listbill));
                          str += `<div>Giảm giá : <span>`+listdiscount.km+`</span></div>
                          <div>Tổng tiền : <span>`+listdiscount.total+`đ</span></div></table>`
                          str += 
                          //  ` <img style="margin-top:30px;margin-left:10%" src="image/uy tín.jpg">
                          // `;
                          printHtml(str);
                          localStorage.setItem('Discount',null);
                          localStorage.setItem('Cart',null);
                          location.reload();
                    }
                  }
                  }
                  }
            }
          }
        }
      }
  }
} 
function printHtml(data) {
  let popupWin = window.open('', '_blank', 'top=0,left=0,height=100%,width=auto');
  popupWin.document.write(`
      <html>
          <head>
          <title>Hóa đơn</title>
          <style>
              * {
                  margin: 0;
                  padding: 0;
              }
              table {
                  width: 100%;
              }
              .donvi {
                  font-size: 14px;
                  font-weight: bold;
              }
              body {
                  width: 1000px;
                  margin: 0 auto;
              }
          </style>
          </head>
      <body onload="window.print();window.close()">${data}</body>
      </html>`
  );
  popupWin.document.close();
}
function muangay(item)
{
  // var listprice=document.getElementsByClassName("display_content")
  // if (listprice[0].style.display != 'none')
  // {
  //   item.price=11090000
  // }
  // if (listprice[1].style.display != 'none')
  // {
  //   item.price=11500000
  //   item.id = item.id+1
  // }
  // if (listprice[2].style.display != 'none')
  // {
  //   item.price=15500000
  //   item.id = item.id+2
  // }
  // item.quantity =1;
  // var list;
  if(localStorage.getItem('Cart')==null)
  {
    list=[item];
  }
  else
  {
    list=JSON.parse(localStorage.getItem('Cart')) || [];
    let ok=true;
    for(let x of list)
    {
      if(x.id == item.id && x.price == item.price)
      {
        x.quantity += 1;
        ok=false;
        break;
      }
    }
    if(ok)
    {
      list.push(item);
    }
  }
  localStorage.setItem("Cart",JSON.stringify(list));
  LoadData()
  ADDung();
  window.location.href = "./Paying.html";
 
}