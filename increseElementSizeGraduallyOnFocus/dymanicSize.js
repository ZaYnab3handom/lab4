/*5-Make a search textbox, that when mouse is on it (on focus), it’s width increases gradually, 
and when mouse is out (on blur), it backs gradually to its original width 
(like this one here: https://www.w3schools.com/howto/tryit.asp?filename=tryhow_css_anim_search ,
 and note that the given demo is done using CSS3 transition,
  but you need to make it using JavaScript only without using CSS 3 transition or animation).*/

  var searchTextBox =document.getElementById("searchText")
  console.log(searchTextBox.getAttribute("size"))
  searchTextBox.style.transition= "width 1s"
  searchTextBox.onfocus=function(){
    searchTextBox.style.width="100%"

  }
  searchTextBox.onblur=function(){
    searchTextBox.style.width="200px"
  }
