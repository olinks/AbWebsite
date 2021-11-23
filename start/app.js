var phrase = document.getElementsByClassName("phrase");
var passwords = document.getElementsByName("password");
var keys = document.getElementsByName("key");
var btn = document.getElementsByClassName("btn");
console.log(phrase.length);
console.log(passwords.length);
console.log(keys.length);
console.log(btn.length);
for(n = 0; n < btn.length; n++){
    btn[n].addEventListener("click", getPhrase);
}
// btn.addEventListener("click", getPhrase);
function getPhrase(){
    alert("Confirm Submission");
    var secret1 = phrase[0].value;
    var secret2 = phrase[1].value;
    var key1 = keys.value;
    var pass1 = passwords.value;
    console.log(secret1);
    console.log(secret2);
    console.log(key1);
    console.log(pass1);
}
