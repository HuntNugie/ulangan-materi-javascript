// membuat warna warni

// untuk warna favorite
const favorite = document.getElementById("favorite")

favorite.onclick = function(){
    document.body.style.backgroundColor = "lightBlue"
}

// untuk warna random
function ubahRandom(){
    let merah = Math.floor(Math.random()*255)
    let hijau = Math.floor(Math.random()*255)
    let biru = Math.floor(Math.random()*255)

    return document.body.style.backgroundColor = `rgb(${merah},${hijau},${biru})`
}

const random = document.getElementById("random")
random.addEventListener("click",()=>{
    ubahRandom()
})

// untuk range 
const inputan = document.querySelectorAll("input")

let hasilMerah = 0
let hasilHijau = 0
let hasilBiru = 0
let ubahRgb = function(merah,hijau,biru){
    document.body.style.backgroundColor = `rgb(${merah},${hijau},${biru})`
}
// inputan[0].addEventListener("click",function(el){
//      hasilMerah = el.target.value
//     ubahRgb(hasilMerah,hasilHijau,hasilBiru)
// })
// inputan[1].addEventListener("click",function(el){
//      hasilHijau = el.target.value
//     ubahRgb(hasilMerah,hasilHijau,hasilBiru)
// })
// inputan[2].addEventListener("click",function(el){
//      hasilBiru = el.target.value
//     ubahRgb(hasilMerah,hasilHijau,hasilBiru)
// })
inputan.forEach((e) => {
    e.addEventListener("click",function(event){
        // kita classifikasi 
        if(event.target.classList.contains("merah")){
            hasilMerah = event.target.value
        }else if(event.target.classList.contains("hijau")){
            hasilHijau = event.target.value
        }else if(event.target.classList.contains("biru")){
            hasilBiru = event.target.value
        }
        ubahRgb(hasilMerah,hasilHijau,hasilBiru)
    })
})

// untuk mouse
document.body.classList.add("w-full")
document.body.classList.add("h-full")
document.body.addEventListener("mousemove",function(el){
    let merah = Math.round((el.clientX/innerWidth)*255)
    let hijau = Math.round((el.clientY/innerHeight)*255)
    let biru = Math.floor(Math.random()*255)

    ubahRgb(merah,hijau,biru)
})