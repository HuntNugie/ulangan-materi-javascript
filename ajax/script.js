// ajax

function getData(url,callbackSuccess,callbackError){
    const xhr = new XMLHttpRequest()
    xhr.onreadystatechange = function(){
        if(xhr.readyState == 4 && xhr.status == 200){
            callbackSuccess(JSON.parse(xhr.response))
        }else{
            callbackError();
        }
    }
    xhr.open("GET",url);
    xhr.send()
}

getData("https://api-sekolah-indonesia.vercel.app/sekolah?page=1&perPage=5",data=>{
    data.dataSekolah.forEach(({sekolah})=>{
        console.log(sekolah)
    })
},()=>{})