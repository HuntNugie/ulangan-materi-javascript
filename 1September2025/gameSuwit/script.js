// game suwit jawa
// gajah kalah sama semut,semut kalah sama orang,orang kalah sama gajah
// tankap pilihan user
const user = document.querySelectorAll("li img")
const info = document.querySelector(".info")
const imageComp = document.querySelector(".img-komputer")

// tangkap pilihan komputer
let pilcomp = function(){
    let comp = Math.floor(Math.random()*3)+1
    switch(comp){
        case 1:
            comp = "gajah"
        break;
        case 2:
            comp = "semut"
        break;
        case 3:
            comp = "orang"
        break;
    }
    return comp
}


// rules
let tanding = function(user,comp){
    if(user == comp) return "SERI"
    if(user == "gajah") return (comp == "semut") ? "kalah" : "menang"
    if(user == "semut") return (comp == "orang") ? "kalah" : "menang"
    if(user == "orang") return (comp == "gajah") ? "kalah" : "menang"
}

let ubahImage = function(pil){
    imageComp.setAttribute("src",`img/${pil}.png`)
}

let putar = function(){
    let counter = 0
    let berhenti = false
    setTimeout(()=>{
        berhenti = true
    },1500)
    setInterval(()=>{
        if(berhenti){
            clearInterval()
            return
        }
        let gambar = user[counter++].className
        ubahImage(gambar)
        
        if(counter >= user.length){
            counter = 0
        }
    },100)
}

user.forEach((e) => {
    e.addEventListener("click",function(el){
        let user = el.target.className
        let comp = pilcomp()
        putar()
        setTimeout(()=>{
        ubahImage(comp)
        let hasil = tanding(user,comp)
        info.textContent = hasil
        },1500)
    })  
})