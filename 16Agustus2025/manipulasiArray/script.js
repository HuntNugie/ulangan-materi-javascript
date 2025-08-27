// manipulasi array

// cara membuat array
let mahasiswa = ["Nugie kurniawan","Muhammad Nadin nugraha","Slamet uin","Rusli juliandi"]

// cara menghapus array manual(ubah menjadi undifined)
mahasiswa[4] = undefined
console.log(mahasiswa)

// cara menambahkan array manual
mahasiswa[4] = "Raka sagraha"
console.log(mahasiswa)

// menampilkan salah satu
console.log(mahasiswa[1])

// menampilkan semuanya
for(let i = 0; i<mahasiswa.length;i++){
    console.log(mahasiswa[i])
}

// method array

// join berfungsi untuk menyatukan element array menjadi 1 string
console.log(mahasiswa.join("|"))

// push berfungsi untuk menambahkan data element baru di element terakhir array
mahasiswa.push("Laurin agnesa putri")
console.log(mahasiswa.join("-"))

// pop berfungsi untuk menghapus data element terakhir array
mahasiswa.pop()
console.log(mahasiswa.join())

// unshift berfungsi untuk menambahkan element baru di awal element array
mahasiswa.unshift("Afra awwalum naima")
console.log(mahasiswa.join())

// shift berfungsi untuk menghapus element di awal element array
mahasiswa.shift()
console.log(mahasiswa.join())

// splice berfungsi untuk menambahkan/menghapus/mengganti element array yang di pilih
mahasiswa.splice(2,0,"Nasib","Muka","Pas pasan")
console.log(mahasiswa.join())

// slice berfungsi untuk menyalin element array yang dipilih untuk di jadikan array baru, index akhir tidak akan kebawa
let baru = mahasiswa.slice(1,5)
console.log(baru.join())

// forEach berfungsi untuk menampilkan array(tidak akan membuat array baru) dan menjalankan perintah apapun yang ada di dalam callback function nya
mahasiswa.forEach(function(e){
    console.log(e)
})

// map berfungsi untuk memanipulasi dan membuat array baru dari array yang sudah ada 
let angka = [5,3,4,2,1]
let news = angka.map(function(e){
    return e*2
})
news.forEach((e)=>console.log(e))  

// sort berfungsi untuk mengurutkan
let angkaBaru = angka.sort(function(a,b){
    return a-b // untuk berurutan secara ascending
})
console.log(angkaBaru.join())

// filter berfungsi untuk mencari element array dan akan mengembalikan array baru sehingga cocok untuk pencarian banyak element array
let arrayBaru = angka.filter(function(e){
    return e<5
})
console.log(arrayBaru.join())

// find berfungsi untuk mencari 1 element array, find tidak akan mengembalikan array baru dan hanya menghasilkan 1 hasil pengembalian nya
// sehingga jika kondisi nya menghasilkan lebih dari 1 element maka akan hanya mengambil yang pertama kali di temui berdasarkan urutan index array nya

let cari = arrayBaru.find((e) => e===1)
console.log(cari)