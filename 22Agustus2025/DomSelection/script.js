// belajar dom
// dom merupakan singkatan dari Document object model dimana DOM adalah mempresentasikan element element html menjadi dom tree yaitu dimana di dalamnya banyak node yang dimana node tersebut dapat kita manipulasi

// root node merupakan sumber atau akar dimana node itu berasal secara default nya adalah document
// nodelist merupakan kumpulan banyak node node campuran mau itu jenis nya element html, text dll
// htmlCollection merupakan kumpulan banyak node seperti nodelist hanya saja hanya untuk element html saja

// dom selection
// dom selection berfungsi untuk mendapatkan/menseleksi element html(node) yang membuat kita bisa memanipulasi node tersebut

// getElementById() -> element
// berfungsi untuk menseleksi/mencari/mendapatkan elemnt html berdasarkan attribute id yang sesuai dan hanya akan menghasilkan 1 element html saja

const judul = document.getElementById("judul")
judul.style.color = "lightBlue"
judul.style.backgroundColor = "blue"
judul.innerHTML = "Ini adalah perubahan judul"

// getElementsByTagName() -> htmlCollection
// berfungsi untuk menseleksi/mencari/mendapatkan element html berdasarkan tag html yang sesuai dan akan mengembalikan htmlCollection yang berupa array like object(bukan array asli)
const paragraph = document.getElementsByTagName("p")
// jika ingin mendapatkan element yang pertama maka menggunakan index[]
paragraph[0].innerHTML  = "Ini adalah paragraph pertama dan di rubah"
// jika ingin semuanya berubah secara bersamaan ada 2 cara
// menggunakan konversi menjadi array agar bisa menggunakan method method array
Array.from(paragraph).forEach((e) => {
    e.style.color = "lime"
})
// menggunakan looping bisa
for(let i = 0; i<paragraph.length;i++){
    paragraph[i].style.backgroundColor = "darkGreen"
}

// getElementsByClssName()
// berfungsi untuk menseleksi/mencari/mendapatkan element html berdasarkan class yang sesuai dan akan menghasilkan htmlCollection
// walaupun hanya ada 1 yang di dapatkan akan tetap menghasilkan htmlCollection
const paragraph1 = document.getElementsByClassName('p4')[0]
paragraph1.innerHTML = "Ini di ubah dari javascript dan mengambil element pertama"
