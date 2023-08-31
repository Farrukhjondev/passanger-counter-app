// document.getElementById('count').innerText = 5;
// // new variable
let saveEl=document.getElementById('save-el')
let countEl=document.getElementById('count-el')
let count = 0;



function increment() {
  count += 1;
  countEl.textContent = count;
} 

function save() {
  let counteStr = count + ' - ';
  saveEl.textContent += counteStr
  console.log(count)
}