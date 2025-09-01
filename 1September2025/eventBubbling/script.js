// event bubbling merupakan istilah dimana event yang terjadi di child node itu bisa ke atas(bubble) dan event parent nya bisa di  jalankan setelah event dari child node jika menghit event child node

document.querySelectorAll(".card").forEach((e)=>{
    e.onclick = function(el){
        alert(el.target.className)
    }
})
document.querySelectorAll(".close").forEach((e)=>{
    e.addEventListener("click",(event)=>{
        event.preventDefault()
        event.target.parentElement.remove()
        event.stopPropagation() //berfungsi untuk menghentikan event setelah event ini maksudnya untuk menghentikan event dari parent element sehingga hanya event ini saja yang berjalan
    
    })
})