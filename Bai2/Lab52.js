

function them(button){
    var hang = button.parentElement.parentElement.cloneNode(true);
    var Xoabtn = hang.getElementsByTagName("button")[0];
    Xoabtn.innerText = "Xóa"
    Xoabtn.setAttribute('onclick','xoa(this)');
    document.getElementById("hienthi").appendChild(hang);
    tinhtong();
}

function xoa(button){
    var hang = button.parentElement.parentElement;
    document.getElementById("hienthi").removeChild(hang);
    tinhtong();
}

function tinhtong(){
    var soluong = document.getElementById("hienthi");
    var  hang = soluong.getElementsByTagName("tr");
    var tong = 0;
    for (let i = 0; i < hang.length; i++) {
       var cot = hang[i].getElementsByTagName("td");
       var gia = cot[1].innerText.substring(1);
       tong += Number(gia);
       document.getElementById("tong").innerText = tong;
    }
}