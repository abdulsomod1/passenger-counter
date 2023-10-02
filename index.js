let saveEl = document.getElementById('entry');
console.log(saveEl);
let countNumber = document.getElementById('demo');
let count = 0;

function counting() {
  count = count + 1;
  countNumber.innerHTML = count;
}
function save() {
  let countNo = count + ' - ';
  saveEl.textContent += countNo;
  countNumber.textContent = 0;
  count = 0;
}

document.getElementById('count').addEventListener('click', counting);
document.getElementById('save').addEventListener('click', save);
