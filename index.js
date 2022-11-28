let Names = ["Guadalupe", "Ollie", "Aki"]
let message = "surprise"
function writeCards(myName,message){
    let messages=[]
    for(let i=0;i<myName.length;i++){
        messages.push(`Thank you, ${myName[i]}, for the wonderful ${message} gift!`)
    }
    console.log(messages)
     return messages
}
writeCards(myName, message);

function countDown(number){
for(let i = number; i >= 0; i--){
console.log(i)
}
}
countDown(10);