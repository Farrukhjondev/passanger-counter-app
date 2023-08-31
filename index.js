// document.getElementById('count').innerText = 5;
// // new variable
let saveEl=document.getElementById('save-el')
let countEl=document.getElementById('count-el')
let count = 0;



function increment() {
  count += 1;
  countEl.innerText = count;
} 

function save() {
  let counteStr = ' '+ count + ' - ';
  saveEl.innerText += counteStr
  console.log(count)
}