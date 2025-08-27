// belajar object pada javascript
// object merupakan struktur data yang berpasangan key dan value mirip dengan array tetapi memiliki key yang dapat di buat custom
// variable di dalam object disebut properti 
// function di dalam object disebut method

let mhs = {
    nama : "Nugie kurniawan",
    kelas : "A2024",
    prodi : "Teknik informatika D3",
    alamat : {
        kec : "Tanjungsari ",
        kab : "Kab sumedang ",
        provinsi : "jawa barat"
    },
    ips : [3.67,4.0],
    ipkAkumulatif(){
        let hasil = 0
        this.ips.forEach((e) => {
            hasil += e
        })
        return hasil / this.ips.length
    }
}
console.log(`nama : ${mhs.nama} \nprodi : ${mhs.prodi} \nAlamat : ${mhs.alamat.kec + mhs.alamat.kab + mhs.alamat.provinsi} \nipk : ${mhs.ipkAkumulatif()} `)