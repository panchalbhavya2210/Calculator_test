const numBtns = document.querySelectorAll('.btn-txt');
let answer = document.getElementById("answer");
let delBtn = document.getElementById("delBtn");
let dot = document.getElementById("dot");

const operators = document.querySelectorAll('.operator');

for (const btn of numBtns) {
  btn.addEventListener('click', () => {
    btn.classList.add("animate");
    setTimeout(()=>{
      btn.classList.remove("animate");
    },300)
    let inpOneScoped = document.getElementById("dataOne");
    let inpSecScoped = document.getElementById("dataSec");
    let inpOpScoped = document.getElementById("dataOp");
    
    if (inpOpScoped.value.length == 0) {
      inpOneScoped.focus();
      inpOneScoped.value += btn.innerHTML;

      let dotCheck = inpOneScoped.value.includes(".");
      inpOneScoped.classList.remove("inpOneMove");
      let dot = document.getElementById("dot");

      if (dotCheck) {
        dot.disabled = true;
      }
      else {
        dot.disabled = false;
      }

      delBtn.onclick = function() {
        let str = inpOneScoped.value;
        let finalOneVal = str.slice(0, -1);
        inpOneScoped.value = finalOneVal;
      }
    }
    else {
      let dot = document.getElementById("dot");

      inpSecScoped.focus();

      inpSecScoped.value += btn.innerHTML;

      let dotCheck = inpSecScoped.value.includes(".");

      inpOneScoped.classList.add("inpOneMove");
      if (dotCheck) {
        dot.disabled = true;
      }
      else {
        dot.disabled = false;
      }

      delBtn.onclick = function() {
        let str = inpSecScoped.value;
        let finalSecVal = str.slice(0, -1);
        inpSecScoped.value = finalSecVal;
      }
    }
  })
}

for (const ops of operators) {
  ops.addEventListener('click', () => {
    let inpOneScoped = document.getElementById("dataOne");
    let inpSecScoped = document.getElementById("dataSec");

    let inpOpScoped = document.getElementById("dataOp");

    inpOpScoped.value = ops.innerHTML;
    /*  if (answer.innerHTML != 0) {
        inpOneScoped.value = answer.innerHTML;
        inpSecScoped.value = "";
        inpSecScoped.focus();
      }*/
  })
}


let equal = document.getElementById("equal");

equal.addEventListener('click', () => {
  let dataOp = document.getElementById("dataOp");
  let dataOne = Number(document.getElementById("dataOne").value);
  let dataSec = Number(document.getElementById("dataSec").value);
  let a;

  if (dataOp.value == "+") {
    a = dataOne + dataSec;
    answer.innerHTML = a;
  }
  else if (dataOp.value == "-") {
    a = dataOne - dataSec;
    answer.innerHTML = a;
  }
  else if (dataOp.value == "×") {
    a = dataOne * dataSec;
    answer.innerHTML = a;
  }
  else if (dataOp.value == "/") {
    a = dataOne / dataSec;
    answer.innerHTML = a;
  }
})

const ac = document.getElementById("acBtn");

ac.addEventListener('click', () => {
  let inpOneScoped = document.getElementById("dataOne");
  let inpSecScoped = document.getElementById("dataSec");
  let inpOpScoped = document.getElementById("dataOp");

  inpOneScoped.value = "";
  inpSecScoped.value = "";
  inpOpScoped.value = "";
  answer.innerHTML = "00";
})
