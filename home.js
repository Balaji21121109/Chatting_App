var user=prompt("enter your name")
var nam=document.getElementById("user")

nam.innerHTML=user;
document.getElementById("btn").addEventListener("clcik",mera())
console.log(user)

async function mera(){
await new Promise((resolve) => setTimeout(resolve,50))
user=prompt("eneter your name")
var nam=document.getElementById("user");
nam.innerHTML = user;
}



var input=document.getElementById("messageInput");
var chatDispaly=document.getElementById("chatDisp");
var typing=document.getElementById("typing")

input.addEventListener("keydown",function(){
    typing.style.visibility="visible";
})

input.addEventListener.getElementById("keyup",function(){
    typing.style.visibility="hidden";
})


var Displaychat=    document.getElementById("chatDisp")
var s=document.getElementById("#sendMessage")
s.addEventListener("click", message, false);

function message(){
    var mess=document.createElement("div")

    mess.setAttribute("class","right")

    mess.innerHTML = user + " : " + input.value

    chatDispaly.appendChild(mess)
}