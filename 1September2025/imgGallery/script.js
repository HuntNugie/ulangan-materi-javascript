// image gallery

const pilihan = document.querySelectorAll("#pilihan div img")
const gambarUtama = document.getElementById("utama")

pilihan.forEach((e)=>{
    e.addEventListener("click",function(event){ 
        gambarUtama.setAttribute("src",event.target.getAttribute("src"))
        // membuat jika terpilih maka opacity-50
        pilihan.forEach((e)=>{
            e.parentElement.classList.remove("opacity-50")
            
        })
        event.target.parentElement.classList.add("opacity-50")
    })

})