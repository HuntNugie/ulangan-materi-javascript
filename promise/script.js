// promise itu adalah objek yang mempresentasikan berhasil atau tidak nya sebuah asynchronus
/*
fullfiled -> resolve -> then (berhasil)
rejected -> reject -> catch (gagal)
pending -> menunggu hasil
finally -> akan di jalankan setelah resolve atau reject selesai
*/

// mendapatkan api dan tampilkan
// https://bukuacak-9bdcb4ef2605.herokuapp.com/api/v1/book?page=1&year=2023&genre=Self-Improvement&keyword=Berani

// membuat function nya

function getData(link){
    return new Promise((resolve,reject)=>{
        // menggunakan ajax untuk mendapatkan data apinya
        const xhr = new XMLHttpRequest()
        // jika dalam 1 kali load 
        xhr.onload = ()=>{
            // jika status link nya ok dapat di ambil
            if(xhr.status == 200){
                // maka ambil dan kirimkan
                resolve(xhr.response)
            }else{
                // jika tidak bisa di ambil
                reject("Tidak bisa bro")
            }
        }
        // open link nya
        xhr.open("GET",link)
        xhr.send()
    })
}

const janji = getData("https://bukuacak-9bdcb4ef2605.herokuapp.com/api/v1/book?page=1&year=2023&genre=Self-Improvement&keyword=Berani")

janji
    .finally(()=>{
        console.log("ngges atuh")
    })
    .then(response=>JSON.parse(response))
    .then(({books,...sesa})=>{
        let rsp = books.map(el=>{
            return `<li>${el.title}</li>`
        }).join("")
        document.body.innerHTML = `<ol>
            ${rsp}
        </ol>`
        console.log(sesa)
    }).catch(response=>console.log(response))