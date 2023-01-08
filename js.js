/*
1-	Create a new page that has a textbox, and alert the code of key pressed on a textbox,
 and which mouse button clicked on it.
*/ 
/*function keyMuouseclicked(event){
    alert(event.key)

}*/

function keyClicked(event){
    alert(event.key)

}
function muouseClicked(event){
    console.log(event.button)
}

/*2-On the same page, Make a button (Start clock),
 that displays clock with current time in local format (time only without date) in a textbox updated every second.

 a.	Handle the onclick event of the (start clock) button using JavaScript (Not in the input tag).

 */
 var time 
 var item =document.getElementById('showtime')
 function updateTime(){
    time =new Date().toLocaleTimeString();
    item.innerHTML=time
}
//b.Use addEventListner method to add another handler to the button on click event,to show alert saying: “Clock started!”.
 //document.getElementById("btnclock").addEventListener("click", ()=>setInterval(updateTime, 1000))
 var timer
 function fun(){
     timer=setInterval(updateTime, 1000);
    alert("Clock started!")
}
document.getElementById("btnclock").addEventListener("click",fun);

 //c.Stop the clock when user clicks (alt + w) letter.

 
document.addEventListener("keypress", function (e){
    console.log(e)
    if (e.altKey == true && e.key == "w")
        {clearInterval(timer)
        console.log("gfhjhfgbbbbbbbbbbbbbbbbbb")}
})

 
/*var time="";
var timer;
function startTimer(){
  timer = setInterval(updateTime, 1000);
}
function stopTimer(){
  clearInterval(timer)
}
function updateTime(){
  time = new Date().toLocaleTimeString();
  document.getElementById('showtime').innerHTML=time
}
document.getElementById("start-clock").addEventListener("click", startTimer);
document.getElementById("stop-clock").addEventListener("click", stopTimer);*/


