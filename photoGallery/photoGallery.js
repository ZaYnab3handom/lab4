// var searchTextBox =document.getElementById("searchText")
//   console.log(searchTextBox.getAttribute("size"))
//   searchTextBox.style.transition= "width 1s"
//   searchTextBox.onfocus=function(){
//     searchTextBox.style.width="100%"

//   }
//   searchTextBox.onblur=function(){
//     searchTextBox.style.width="200px"
//   }
/*6-Create a simple photo gallery like the following,and use opacity property to make each image fades out gradually 
(its opacity decreases to 0.3 gradually) when mouse is over it, 
and fades in gradually (its opacity increases to 1 gradually) when mouse is a way.

7-Try Insert Before , Replace, Remove “append”
 */

//use insert before
var newImg = document.createElement("img")
newImg.src="imgs/download.jpg"
var div =document.getElementById("gallery")
div.insertBefore(newImg,div.children[0])

//change opacity on mouse over and out
var imgs = document.getElementsByTagName("img")
for (const img of imgs) {
    img.onmouseout=function(){
        img.style.opacity=".3"
    }
    img.onmouseover=function(){
        img.style.opacity="1"
    }
    
}

