function connect(){
const user="Sabaa Khenissi"
const password="AqwZsx24!?"
var usr=document.getElementById("usn").value;
var pass= document.getElementById("pass").value;
var us=document.getElementById("us");
var pas=document.getElementById("ps");
if(user!=usr||password!=pass){
    if(user!=usr){
        us.textContent="incorrect Username";
        us.style.color="red";
        
    }
    if(password!=pass){
        pas.textContent="incorrect Password";
        pas.style.color="red";
            
    }return false;
}


}
function vide(){
    var us=document.getElementById("us");
    
    us.textContent="";
    
}
function vide1(){
    var pas=document.getElementById("ps");
    pas.textContent="";
}