const num1 = Math.ceil(Math.random()*10);
const num2 = Math.ceil(Math.random()*10);
const scoreEl = document.getElementById("score")
const questionEl = document.getElementById("question")
const formEl = document.getElementById("from")
const inputEl = document.getElementById("input")
let score = JSON.parse(localStorage.getItem("score"));

 const correctAns = num1 * num2;
 questionEl.innerText = `What is ${num1} multiply by ${num2}?`;
if(!score){
    score = 0;
}
scoreEl.innerText = `score: ${score}`;
formEl.addEventListener("submit", ()=>{
    const userAns = +inputEl.value
    if(userAns === correctAns){
        score++;
        updateLocalStorage()
    }else{
        score--;
        updateLocalStorage()
    }

})

function updateLocalStorage(){
    localStorage.setItem("score", JSON. stringify(score))
}

 