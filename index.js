let checkBtn = document.getElementById('check');
let inputData = document.getElementById('input-el');
let outputResult = document.querySelector('.result');

function calcAge(){
   let birthYear = +inputData.value;
   let finalResult =  2022 - birthYear ;
  let content = `You are  ${finalResult} years old.`;
  outputResult.textContent = content;
}
checkBtn.addEventListener("click", ()=>{
  calcAge();
})