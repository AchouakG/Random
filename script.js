const adviceContainer = document.getElementById("wise");
const btn = document.getElementById("button0");
const url = "https://api.adviceslip.com/advice";

let getAdvice=()=>{
    adviceContainer.classList.remove("fade");
    fetch(`${url}?t=${new Date().getTime()}`)
    //a query parameter with the current timestamp ensures a new response each time the fetch request is made, preventing cached responses.
    .then(response => response.json())
    .then(data => {
        adviceContainer.textContent = data.slip.advice;
        adviceContainer.classList.add("fade");
    })
    .catch((err) => {
        console.log(err);
    });
}
btn.addEventListener("click", getAdvice);
getAdvice();
