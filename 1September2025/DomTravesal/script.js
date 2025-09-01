// Dom travesal itu merupakan istilah kita untuk menelusuri element element lain dari element yang kita seleksi


// menghapus element parent dari child nya
document.querySelectorAll(".close").forEach((e)=>{
    e.addEventListener("click",(event)=>{
        // mendapatkan element parent dan menghapus nya
        event.target.parentElement.remove()
    })
})