/*4-Make a page that contains an empty star image (provided in the lab files),
 and changes as following (like star rating control):
    a.	When mouse over it, it converts to filled star (like rating stars control, 
        but you can try it on one star only in the beginning, then change it to 5 stars).
    b.	When mouse move away from it, it changes back to empty star.
    c.	When mouse over it, and it clicked, make it fixed on the filled star (
        don’t changes again when mouse move away from it).
    d.	When re-clicked again (after it was fixed from first click), it backs to empty star when mouse is out.
    
*/
var img = document.getElementById("img")
img.onmouseover=function (){
    img.setAttribute("src","imgs/Filled_star.png")
    console.log(img.getAttribute("src"))
    // return true

}
img.onmouseout=function (){
    if (  x==true   ){
        console.log(x)
    }
    else{
        img.setAttribute("src","imgs/empty_star.png")
    }
}

var x 
img.onclick = function(event) {
    if (x==true){
        x=false
        console.log(x)
    }
    else{
        x=true
        console.log(x)
    }
    
  }

 // if (img.getAttribute("src")=="imgs/Filled_star.png") {
    //     console.log(event)
    //     mouseOut=false
    // }
    // else{
    //     console.log("ggggggggggggggggggggg")
    //     img.setAttribute("src","imgs/empty_star.png")
    // } 
// function onClick(){
//     if (img.getAttribute("src")=="imgs/Filled_star.png"){
//         img.setAttribute("src","imgs/Filled_star.png")
//     }
//     else{
//         img.setAttribute("src","imgs/Filled_star.png")
//     }
// }
