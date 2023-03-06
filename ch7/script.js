let img = document.getElementById("myImage")
let wid = img.width
console.log(wid + typeof(wid))
function change(){
    alert("hi")
if(wid === 146){
    document.getElementById("myImage").setAttribute("width",233)
    return
}
else if(wid === 233){
    document.getElementById("myImage").setAttribute("width",146)

}
else{
    document.getElementById("myImage").setAttribute("width",10)

}
}

