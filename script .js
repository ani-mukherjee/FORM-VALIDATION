const validate=()=>{
    let uname = document.querySelector("#uName").value;
    let email = document.querySelector("#email").value;
    let psw = document.querySelector("#password").value;
    let pwd = document.querySelector("#pwd").value;
    let num = document.querySelector("#num").value;

    // Username validation
    if(!uname){
        document.getElementById("text1").innerHTML="**Required";
        return false;
    }
    if(uname.length<4){
        document.getElementById("text1").innerHTML="**Must be 4 characters";
        return false;
    }

    //Email validation
    if(!email){
        document.getElementById("text5").innerHTML="**Required";
        return false;
    }
    if(email.length<6){
        document.getElementById("text5").innerHTML="**Must be 6 characters";
        return false;
    }
    if(email.search(/[A-Z]/)!=-1){
        document.getElementById("text5").innerHTML="**email id must be in small letters";
        return false;
    }
    if(email.search(/[@]/)==-1){
        document.getElementById("text5").innerHTML="**please include @ ";
        return false;
    }
    if(email.search(/[.]/)==-1){
        document.getElementById("text5").innerHTML="**please include dot(.)";
        return false;
    }
    if((email.indexOf("@")<=0) || (email.indexOf("@")== email.length-1)){
        document.getElementById("text5").innerHTML="**don't include @ as a first letter/last letter";
        return false;
    }
    if((email.indexOf(".")<=0) || (email.indexOf(".")== email.length-1)){
        document.getElementById("text5").innerHTML="**don't include dot(.) as a first letter/last letter";
        return false;
    }
    if((email.charAt(email.length-4)!=".") && (email.charAt(email.length-3)!=".")){
        document.getElementById("text5").innerHTML="**invalid dot(.) position";
        return false;
    }

    //Password validation
    if(!psw){
        document.getElementById("text2").innerHTML="**Required";
        return false;
    }
    if(psw.length<6){
        document.getElementById("text2").innerHTML="**Must be 6 characters";
        return false;
    }
    if(psw.search(/[0-9]/)==-1){  // using regex (Regular expression)
        document.getElementById("text2").innerHTML="**Atleast one number required";
        return false;
    }
    if(psw.search(/[A-Z]/)==-1){
        document.getElementById("text2").innerHTML="**Atleast one uppercase required";
        return false;
    }
    if(psw.search(/[a-z]/)==-1){
        document.getElementById("text2").innerHTML="**Atleast one lowercase required";
        return false;
    }
    if(psw.search(/[@/$/#/_/&/*/%]/)==-1){
        document.getElementById("text2").innerHTML="**Atleast one symbol required";
        return false;
    }

    // Confirm password validation
    if(!pwd){
        document.getElementById("text4").innerHTML="**Required";
        return false;
    }
    if(pwd!== psw){
        document.getElementById("text4").innerHTML="**Password do not match";
        return false;
    }

    // Mobile number validation
    if(!num){
        document.getElementById("text3").innerHTML="**Required";
        return false;
    }
    if(isNaN(num)){
        document.getElementById("text3").innerHTML="**Only numbers are allowed";
        return false;
    }
    if(num.length!=10){
        document.getElementById("text3").innerHTML="**Contact number must be 10 digits";
        return false;
    }
    if(num[0].search(/[6-9]/)==-1){
        document.getElementById("text3").innerHTML="**Contact number starts with (9/8/7/6)";
        return false;
    }
}

// Display Password

const showpwd=()=>{
    let pswd= document.querySelector("#password");
    if(pswd.type=="password"){
        pswd.type="text";
    }
    else{
        pswd.type="password";
    }
}


