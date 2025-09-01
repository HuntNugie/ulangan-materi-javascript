// preventDefault merupakan sebuah method di event yang berfungsi sebagai pencegah aksi default dari apapun seperti element html,os,browser saat event di jalankan

document.querySelectorAll(".close").forEach((e) =>{
    e.style.textDecoration = "none"
    e.addEventListener("click",(event)=>{
        event.preventDefault()
        event.target.parentElement.remove()
    })
})