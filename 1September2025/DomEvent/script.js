// event merupakan kejadian yang di lakukan oleh user seperti ketikan keyboard atau gerakan mouse dan lain lain
// kita dapat menghandle event tersebut agar website kita menjadi lebih interaktif

// ada dua cara untuk menghandle event dengan event handler dan addEventListener

// event handler
// terbagi menjadi dua dengan inline html dan element method

// inline html
const p1 = document.querySelector(".p1")
function ubahWarna() {
    p1.style.backgroundColor = "red"
}

// menggunakan element method
const p2 = document.querySelector(".p2")
p2.onclick = function(){
    p2.style.backgroundColor = "blue"
}

// menggunakan addEventListener
const p3 = document.querySelector(".p3")
p3.addEventListener("click",function(){
    p3.style.backgroundColor = "green"
})