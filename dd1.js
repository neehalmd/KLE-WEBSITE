let sname;
let standard;
let rolling;
let subject;
document.getElementById("btn").onclick = function(){
    console.log("button is pressed")
    sname=document.getElementById("uname").value;
    standard=document.getElementById("std").value;
    rolling=document.getElementById("roll").value;
    subject=document.getElementById("sub").value;
    
     
    document.getElementById("info").innerHTML=" HELLO MR/MISS "  + sname + " YOU ARE A BRIGHT STUDENT OF KLE SOCIETY . YOUR REGISTRATION NUMBER IS " +rolling+ " THE SELECTED STREAM IS " +subject+ " YOU ARE " +standard+ " STANDARD STUDENT ";
}