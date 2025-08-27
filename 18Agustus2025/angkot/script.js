// juragan angkot 

const PENUMPANG = ["nugie",undefined,"azib"]

// membuat function tambah
let tambahPenumpang = function(nama,array){
    // jika array tersebut kosong
    if(array.length == 0){
        array.unshift(nama)
        return array
    }else{
        // jika array tidak kosong

        // cek jika undifined maka isi dulu tempat yang ksoong
        let cek = array.findIndex((e) => e == undefined)
        // mengecek nama
        let cekNama = array.find((e) => {

            return (e == nama)  ? true : false
        })
        if(array.includes(undefined) && !cekNama){
            array.splice(cek,1,nama)
            return array
        }

        // cek jika nama nya sama
        else if(cekNama){
            return `nama ${nama} sudah berada dalam angkot`
        }else{
            array.push(nama)
            return array
        }

    }
    
}