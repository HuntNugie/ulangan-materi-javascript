// Dom manipulation merupakan istilah untuk memanipulasi node atau element html yang telah di seleksi

// innerHTML
// berfungsi untuk merubah isi dari element html bukan hanya untuk text tetapi bisa menambahkan script html di dalamnya
const judul = document.getElementById("judul") //menseleksi yang akan di manipulasi element nya
judul.innerHTML = "<i>Nugie kurniawan</i>"

// style.propertie
// berfungsi untuk menambahkan styling css di element html dan akan di tambahkan secara inline css
judul.style.color = "lime"
judul.style.backgroundColor = "darkgreen"

// attribute
// berfungsi untuk memanipulasi attribute yang berada di dalam element html

// setAttribute
// berfungsi untuk menambahkan attribute baru jika di dalam element html itu tidak ada attribute yang di set dan jika sudah mempunyai attribute tersebut maka akan menggantikan/menimpa value nya
judul.setAttribute("class","judul")

// getAttribute
// berfungsi untuk mendapatkan nilai atau value dari attribute yang berada di dalam element html tersebut
console.log(judul.getAttribute("class"))

// removeAttribute
// berfungsi untuk menghapus attribute yang beraada di dalam element html
judul.removeAttribute("class")

// classList.method()
// classList berfungsi dikhususkan untuk memanipulasi class yang ada di dalam element html

// add()
// berfungsi untuk menambahkan class baru di dalam class yang ada di element html
const link = document.querySelector("section#a a")
link.classList.add("biru-muda")

// remove()
// berfungsi untuk menghapus class yang ada di dalam class di element html tersebut
link.classList.remove("biru-muda")

// toggle()
// berfungsi untuk menmbahkan class jikaa class yang di set tidak ada di dalam class yang ada di element html dan jika ada class nya maka akan di hapus class yang ada di element html
link.classList.toggle("biru-muda")

// item()
// berfungsi untuk mendapatkan nilai value dari class menggunakan indexing seperti array yang di mulai dari 0
console.log(link.classList.item(0))

// contains()
// berfungsi untuk mengecek apakah suatu class terdapat di sebuah class di element html
// akan menghasilkan nilai boolean true or false
console.log(link.classList.contains("ungu"))

// replace()
// berfungsi untuk menggantikan class yang ada di element html dengan class yang di set
link.classList.replace("biru-muda","ungu")

// createElement()
// berfungsi untuk membuat element/node baru 
const pBaru = document.createElement("p")

// createTextNode()
// berfungsi untuk membuat textNode baru
const teks = document.createTextNode("Ini adalah paragraph baru")
// beberapa alternative modern untuk menambahkan text atau node ke dalam element baru/menambahkan text atau node pada element yang sudah ada
// pBaru.textContent = "Ini adalah paragraph baru"
// pBaru.append("Ini adalah paragraph baru")

// parentNode.appendChild()
// berfungsi untuk menambahkan node child ke dalam parent child yang jadi root node nya
// jika di dalam parent node sudah ada child node maka node yang terbaru akan di tambahkan di paling bawah dari parent Node nya
const sectionA = document.getElementById("a")
pBaru.appendChild(teks)
sectionA.append(pBaru) //append sebenernya mirip dengan appenChild hnya saja lebih modern dna baru dan bisa menambahkan teks langsung jika ingin tambah text sebagai child node ataupun menambahkan node baru ke dalam parent node nya

// insertBefore()
// berfungsi untuk menambahkan node ke dalam parent node sebelum child node nya
const ul = document.querySelector("section#b ul")
const li2 = ul.querySelector("li:nth-child(2)")
const liBaru = document.createElement("li")
liBaru.append("Ini adalah li baru")
ul.insertBefore(liBaru,li2)

// removeChild()
// berfungsi untuk menghapus child node yang ada di parent node
sectionA.removeChild(sectionA.querySelector("a"))
// document.querySelector(".p2").remove() // alternatif untuk menghapus langsung child ny

// replaceChild()
// berfungsi untuk mengganti node child yang ada di dalam element html dengan node child lain yang di set
const sectionB = document.getElementById("b")
const h2Baru = document.createElement("h2")
h2Baru.append("ini adalah judul baru")
const p4 = sectionB.querySelector("p")
sectionB.replaceChild(h2Baru,p4)

