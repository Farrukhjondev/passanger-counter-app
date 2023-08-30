// document.getElementById('count').innerText = 5;
// // new variable
let countEl=document.getElementById('count-el')
let count = 0;
function increment() {
  count += 1;
  countEl.innerText = count;
  console.log(count)
}