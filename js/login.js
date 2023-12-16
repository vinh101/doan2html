
var list = JSON.parse(localStorage.getItem('Customer')) || [];

$("#lginKH").submit(function (event) {
    var taikhoan = $('#tk').val();
    var matkhau = $('#mk').val();
    for (x of list) {
        if (taikhoan == x.sdtkh && matkhau == x.mkkh) {
            var user = {
                makh: x.makh,
                tenkh: x.tenkh,
                sdtkh: x.sdtkh,
                emailkh: x.emailkh,
                diachikh: x.diachikh,
                mkkh: x.mkkh
            };
            localStorage.setItem('userKH', JSON.stringify(user));
            window.location.href = `index.html?kt=ok&tk=${x.tenkh}`;
        }
        else if (taikhoan != x.sdtkh && matkhau != x.mkkh) {
            alert("Tên đăng nhập hoặc mật khẩu sai! Vui lòng nhập lại!");
            break;
        }
    }
    event.preventDefault();
});

function ok() {
    const urlParams = new URLSearchParams(window.location.search);
    const kt = urlParams.get('kt');
    const ten = urlParams.get('tk');
    if(kt == 'ok'){
        document.getElementById("account").style.opacity=0;
        document.getElementById("tenkhachhang").innerHTML=ten;
        document.getElementById("tenkhachhang").style.opacity=1;
        document.getElementById("box-b").style.opacity=1;
    }
    else{
        return;
    }
}

function LogOut(){
    window.location.href = `index.html`;
}