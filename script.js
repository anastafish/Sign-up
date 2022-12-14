const pass = document.querySelector("#pass")
const passconf = document.querySelector("#passconf")
const form = document.querySelector('#myform')

console.log(pass)



function validation(){
    if (pass.value == passconf.value){
        return true
    }
    else{
        alert("Please make sure the password confirmation match")
        return false
    }
}
