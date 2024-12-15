function verif() {
    var pass = document.getElementById("pass").value;
    var cpass = document.getElementById("cpass").value;
    var cnf = document.getElementById("cnf");
    var mf = document.getElementById("mf").value;
    var cmf = document.getElementById("cmf");
    if (mf!=""){
        if(mf.length<12){
            cmf.textContent="1matricul fiscal exemple | 123456/A/A/A 000|";
            cmf.style.color="red";
            return false;
     } else if(isNaN(mf.substr(0,6))){
        cmf.textContent="2matricul fiscal exemple | 123456/A/A/A 000|";
        cmf.style.color="red";
        return false;
     }else if(mf.indexOF("/")==-1||mf.indexOF("/")<6){
        cmf.textContent="3matricul fiscal exemple | 123456/A/A/A[ 000]|";
        cmf.style.color="red";
        return false;
     }
     else if(mf.charAt(6)!="/"){
        cmf.textContent="4matricul fiscal exemple | 123456/A/A/A 000|";
        cmf.style.color="red";
        return false;
     }
     else if(mf.charAt(7)<"A"||mf.charAt(7)>"Z"){
        cmf.textContent="5matricul fiscal exemple | 123456/A/A/A 000|";
        cmf.style.color="red";
        return false;
     }
     else if(mf.charAt(8)!="/"){
        cmf.textContent="6matricul fiscal exemple | 123456/A/A/A 000|";
        cmf.style.color="red";
        return false;
     }
     else if(mf.charAt(9)<"A"||mf.charAt(9)>"Z"){
        cmf.textContent="7matricul fiscal exemple | 123456/A/A/A 000|";
        cmf.style.color="red";
        return false;
     }
     else if(mf.charAt(10)!="/"){
        cmf.textContent="8matricul fiscal exemple | 123456/A/A/A 000|";
        cmf.style.color="red";
        return false;
     }
     else if(mf.charAt(11)<"A"||mf.charAt(11)>"Z"){
        cmf.textContent="9matricul fiscal exemple | 123456/A/A/A 000|";
        cmf.style.color="red";
        return false;
     }
     


    }
    
    if (
        pass !=
        cpass
    ) {
        cnf.textContent="Password not match";
        cnf.style.color="red";
        return false;
    }
    
}
function vide(){
    var cnf = document.getElementById("cnf");
    cnf.textContent="";
}
function vide1(){
    var cmf = document.getElementById("cmf");
    cmf.textContent="";
}
