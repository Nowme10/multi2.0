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
const handleSubmit = () => {
        const userAns = +inputEl.value
    if(userAns === correctAns){
        score = score + 1;
        updateLocalStorage()
    }else{
        score = score - 1;
        updateLocalStorage()
    }
}
formEl.addEventListener("submit", handleSubmit);

function updateLocalStorage(){
    localStorage.setItem("score", JSON. stringify(score))
}

 