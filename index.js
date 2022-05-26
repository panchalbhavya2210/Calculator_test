var numBtns = document.querySelectorAll('.btn');

for(btn of numBtns) {
  btn.addEventListener('click',() => {
    alert(btn.innerHTML);
  })
}
