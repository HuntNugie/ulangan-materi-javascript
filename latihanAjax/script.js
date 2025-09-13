// latihan ajax

function getBuku(link,callbackSuccess){
    const xhr = new XMLHttpRequest()

    xhr.onreadystatechange = function(){
        if(xhr.readyState == 4 && xhr.status == 200){
           callbackSuccess(JSON.parse(xhr.response))
        }else{
            console.log("gagal")
        }
    }
    xhr.open("GET",link)
    xhr.send()
}
getBuku("https://bukuacak-9bdcb4ef2605.herokuapp.com/api/v1/book?page=1&year=2023",(data)=>{
    const liBaru = data.books.map(el=>`<li>${el.title}</li>`).reduce((hasil,judul)=>{
        return `${hasil}${judul}`
    },"")
    document.body.innerHTML = `<ol>
        ${liBaru}
    </ol>`
   
})