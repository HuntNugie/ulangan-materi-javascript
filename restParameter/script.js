// rest parameter berfungsi untuk menampung nilai nilai yang di kirim ke paramter dan di jadikan array


function filterBy(type,...rest){
    return rest.filter(val=> typeof val == type)
}
console.log(filterBy("boolean","nugie",3,56,768,2,false,true,"Nadin"))