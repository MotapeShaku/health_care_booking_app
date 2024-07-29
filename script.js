var TEL = document.querySelector(".cell");
var COUNT = document.querySelector(".textS");
var BUTTON = document.querySelector("#subT");

localStorage.clickcount = 10;
COUNT.innerText = "Number of available space(s): "+ localStorage.clickcount;

//Number of booking space(s) available
BUTTON.addEventListener('click',(e)=>{
    
    if (localStorage.clickcount >= 1) {
        localStorage.clickcount = Number(localStorage.clickcount) - 1;
        COUNT.innerText = "Number of available space(s): " + localStorage.clickcount;
    } else {
        COUNT.innerText = "Number of available space(s): 0";
        alert("Sorry try again tomorrow");
    }
    
},false)

TEL.addEventListener("keypress",()=>{
    let telL = TEL.value.length + 1;
    
    telL > 10 ? TEL.style.outlineColor="red" : TEL.style.outlineColor="dodgerblue";
    
},false);

function popup(){
    document.getElementById("popUp-1").classList.toggle("active");
}

$(window).scroll(function(){
   var top = $(window).scrollTop();
    
    if(top >= 60)
        {
            $("header").addClass('sec');
        }
    else if($("header").hasClass('sec'))
        {
            $("header").removeClass('sec')
        }
});