//ADDING INPUT DATA TO THE DATABASE
var FNAME = document.querySelector("#fName");
var MNAME = document.querySelector("#mName");
var LNAME = document.querySelector("#lName");
var DOB = document.querySelector("#dob");
var ID = document.querySelector("#id");
var GEN = document.querySelector("#gen");
var ADDRESS = document.querySelector("#address");
var CITYN = document.querySelector("#cityName");
var PROVI = document.querySelector("#provice");
var POSTAL = document.querySelector("#postal");
var EMAIL = document.querySelector("#email");
var PNO = document.querySelector("#pNo");
var SYMP = document.querySelector("#symp");
var TIME = document.querySelector("#ts");
var BTN = document.querySelector("#subT");

let firebaseRef = firebase.database().ref('Patients');

BTN.addEventListener('click',(e)=>{
    e.preventDefault();
    if(localStorage.clickcount >= 1){
        
        firebaseRef.child(ID.value).set({
           first_name: FNAME.value,
           id: ID.value,
           middle_Name: MNAME.value,
           last_Name: LNAME.value,
           date_Of_Birth: DOB.value,
           gender: GEN.value,
           address: ADDRESS.value,
           city: CITYN.value,
           province: PROVI.value,
           postal: POSTAL.value,
           email: EMAIL.value,
           phone_Number: PNO.value,
           time_Slot: TIME.value,
           symptoms: SYMP.value
    });
        alert("Successfully booked!!!");
    }

},false);