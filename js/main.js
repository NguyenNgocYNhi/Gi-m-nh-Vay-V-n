
function solver() {


var thuNhapThang = document.getElementById("thuNhapThang").value;
var canVay = document.getElementById("canVay").value;
var laiSuat = document.getElementById("laiSuat").value;
var thoiHan = document.getElementById("thoiHan").value;

thuNhapThang = Number(thuNhapThang);
canVay = Number(canVay);
laiSuat = Number(laiSuat);
thoiHan = Number(thoiHan);

// console.log(thuNhapThang)
// console.log(canVay)
// console.log(laiSuat)
// console.log(thoiHan)

var soTienCoThe = (thuNhapThang * 0.6)
console.log(soTienCoThe)
var soTienPhaiTra = (canVay * (1+ ((laiSuat/100)/12)))/ thoiHan;
console.log(soTienPhaiTra)

var ketQua

if (soTienCoThe > soTienPhaiTra) {
    ketQua = document.getElementById("ketQua").textContent = "Đủ Điều Kiện Vay Vốn";
    ketQua =  document.getElementById("ketQua").style.backgroundColor = "green";
}
else {
    ketQua = document.getElementById("ketQua").textContent = "Không Đủ Điều Kiện Vay Vốn";
    ketQua =  document.getElementById("ketQua").style.backgroundColor = "red";
}

ketQua =  document.getElementById("ketQua").style.display = "block";


}


function reset() {
    document.getElementById("thuNhapThang").value = "";
    document.getElementById("canVay").value = "";
    document.getElementById("laiSuat").value = "";
    document.getElementById("thoiHan").value = "";
    document.getElementById("ketQua").style.display = "none";

}