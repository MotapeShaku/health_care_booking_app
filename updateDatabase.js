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
//Buttons
var DELETE = document.querySelector("#delbT");
var VIEW = document.querySelector("#viebT");
var UPDATE = document.querySelector("#updbT");

const firebaseRef = firebase.database().ref('Patients');

//Updating the existing data
UPDATE.addEventListener('click',(e)=>{
    e.preventDefault();
    firebaseRef.child(ID.value).update({
       first_name : FNAME.value,
       middle_Name : MNAME.value,
       last_Name : LNAME.value,
       date_Of_Birth: DOB.value,
       gender : GEN.value,
       address : ADDRESS.value,
       city: CITYN.value,
       province: PROVI.value,
       postal: POSTAL.value,
       email : EMAIL.value,
       phone_Number : PNO.value,
       time_Slot: TIME.value,
       symptoms : SYMP.value
    })
    alert("Updated");
},false)

//Deleting booking
DELETE.addEventListener('click',(e)=>{
    e.preventDefault();
    firebaseRef.child(ID.value).remove();
    alert("Booking deleted");
},false)

//View stored data
VIEW.addEventListener('click',(e)=>{
    e.preventDefault();
    firebaseRef.child(ID.value).on('value',function(snapshot){
        FNAME.value = snapshot.val().first_name;
        LNAME.value = snapshot.val().last_Name;
        MNAME.value = snapshot.val().middle_Name;
        ADDRESS.value = snapshot.val().address;
        DOB.value = snapshot.val().date_Of_Birth;
        CITYN.value = snapshot.val().city;
        PROVI.value = snapshot.val().province;
        POSTAL.value = snapshot.val().postal;
        EMAIL.value = snapshot.val().email;
        PNO.value = snapshot.val().phone_Number;
        TIME.value = snapshot.val().time_Slot;
        SYMP.value = snapshot.val().symptoms;
        GEN.value = snapshot.val().gender;
    })
},false)