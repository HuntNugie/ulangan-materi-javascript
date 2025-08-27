// Dom manipulation merupakan istilah untuk memanipulasi node atau element html yang telah di seleksi

// innerHTML
// berfungsi untuk merubah isi dari element html bukan hanya untuk text tetapi bisa menambahkan script html di dalamnya
const judul = document.getElementById("judul") //menseleksi yang akan di manipulasi element nya
judul.innerHTML = "<i>Nugie kurniawan</i>"

