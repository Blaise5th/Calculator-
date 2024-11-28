function calc(solve) {
let a = parseInt(document.getElementById("num1").value);
let b = parseInt(document.getElementById("num2").value);

/* Basic maths */
if (isNaN(a) ||  isNaN(b)) {
  alert("please input a value");
}
else if (isNaN(a) && isNaN(b)) {
  alert("please input the values");
}
  else if (solve === "add") {
 document.getElementById("answer").value = a + b;
  }
  else if (solve === "sub") {
 document.getElementById("answer").value = a - b;
  }
  else if (solve === "mul") {
 document.getElementById("answer").value = a * b;
  }
  else if (solve === "div") {
 document.getElementById("answer").value = a / b;
  }
}

/* use first input as default */

function firstInput(solve) {
let a = parseInt(document.getElementById("num1").value);
if (isNaN(a)) {
  alert("Please input a number");
}
else if (solve === "squRoot") {
 document.getElementById("answer").value = Math.pow(a,1/2);
}
else if (solve === "cubeRoot") {
 document.getElementById("answer").value = Math.pow(a,1/3);
}
else if (solve === "squ") {
 document.getElementById("answer").value = Math.pow(a,2);
}
else if (solve === "cube") {
 document.getElementById("answer").value = Math.pow(a,3);
}
}

/* other first input */
const otherFirstInput = solve => {
let a = parseInt(document.getElementById("num1").value);
  if (isNaN(a)) {
    alert("input a number!");
  }
  else if(solve === "log") {
 document.getElementById("answer").value = Math.log10(a);
  }
  else if(solve === "antilog") {
 document.getElementById("answer").value = Math.pow(10,a);
  }
  else if(solve === "sin") {
 document.getElementById("answer").value = Math.sin(a);
  }
  else if(solve === "cos") {
 document.getElementById("answer").value = Math.cos(a);
  }
  else if(solve === "tan") {
 document.getElementById("answer").value = Math.tan(a);
}
}

/* second details */
const convert = convert => {
  const radsToDeg = parseFloat(document.getElementById("first-field").value);
  const degToRads = parseFloat(document.getElementById("second-field").value);
  const kmToMiles = parseFloat(document.getElementById("third-field").value);
  const mToFts = parseFloat(document.getElementById("forth-field").value);
  const kmhToMs = parseFloat(document.getElementById("fifth-field").value);
  let answer = document.getElementById("second-answer");
  let count = 0;
  if (!isNaN(radsToDeg) && radsToDeg !== "") count++;
  if (!isNaN(degToRads) && degToRads !== "") count++;
  if (!isNaN(kmToMiles) && kmToMiles !== "") count++;
  if (!isNaN(mToFts) && mToFts !== "") count++;
  if (!isNaN(kmhToMs) && kmhToMs !== "") count++;

  if (count > 1) {
    alert("Only input a single number!");
    document.querySelectorAll("fieldset").forEach(fieldSet => {
    fieldSet.style.border = "solid 1px red";
    fieldSet.style.borderRadius = "8px";});
    document.querySelectorAll("legend").forEach(legend => {
    legend.style.color = "red";});
    return;
  }

  if (count === 0) {
    alert("Input a number!");
    document.querySelectorAll("fieldset").forEach(fieldSet => {
    fieldSet.style.border = "solid 1px red";
    fieldSet.style.borderRadius = "8px";});
document.querySelectorAll("legend").forEach(legend => {
legend.style.color = "red";});
    return;
  }
  
document.querySelectorAll("fieldset").forEach(fieldSet => {
    fieldSet.style.border = "";
    fieldSet.style.borderRadius = "";});
    
document.querySelectorAll("legend").forEach(legend => {
legend.style.color = "";});

  if (!isNaN(radsToDeg) && radsToDeg !== "" &&  convert === "convert") {
    answer.value = (radsToDeg * (180/Math.PI)) + "°";
  }
  else if (!isNaN(degToRads) && degToRads !== "" &&  convert === "convert") {
    answer.value = (degToRads * (Math.PI/180)) + " rads";
  }
  else if (!isNaN(kmToMiles) &&  kmToMiles !== "" &&  convert === "convert") {
    answer.value = (kmToMiles * 0.621371) + " miles";
  }
  else if (!isNaN(mToFts) && mToFts !== "" &&  convert === "convert") {
    answer.value = (mToFts * 3.28084) + " feets";
  }
  else if (!isNaN(kmhToMs) &&  kmhToMs !== "" &&  convert === "convert") {
    answer.value = (kmhToMs * (10/36)) + " m/s";
  }
  
  /* event Listener */
  document.querySelectorAll("input").forEach(input => {
    input.addEventListener("keydown", event => {
    if (event.key === "Enter") {
      convert('convert');
    }
   });
  });
}

/* number checker */
function check() {
  const answer = parseFloat(document.getElementById('num-checker').value);
  const textArea = document.querySelector("textarea");

  if (isNaN(answer) || answer === "") {
    alert('Please input a number');
    return;
  }

  let result = "";

  if (Number.isInteger(answer) && answer > 0) {
    result += "Natural number, ";
  }

  if (answer % 1 === 0) {
    result += "Rational number, ";
  } else {
    result += "Irrational number, ";
  }

  if (answer % 2 === 0) {
    result += "Even number";
  } else {
    result += "Odd number";
  }

  alert(result);
  textArea.value = result;
}

/* customize */
const auto = () => {
  const body = document.querySelector("body");
  const details = document.querySelectorAll("details");
  const buttons = document.querySelectorAll("button");
  const input = document.querySelectorAll("input");
  
  body.style.backgroundColor = "";
  body.style.color = "";
  
  input.forEach(input => {
input.style.backgroundColor = "";
input.style.border = "";    input.classList.toggle("dark-mode-input");
  });

  body.classList.toggle("dark-mode");
  details.forEach(detail => {
detail.style.backgroundColor = "";
detail.style.border = ""; detail.classList.toggle("dark-mode-details");
  });
  buttons.forEach(button => {
    button.classList.toggle("dark-mode-button");
    button.classList.toggle("dark-mode");
  });
  
  localStorage.setItem("autoMode", body.classList.contains("dark-mode"));
  };
  
  window.addEventListener("load", () => {
    const autoMode = localStorage.getItem("autoMode");
    if (autoMode === "true") {
      auto();
    }
  });


const manual = () => {
  const textColor = prompt(`text-color:`);
 const backgroundColor = prompt(`background-color: `);
const body = document.querySelector("body");
const input = document.querySelectorAll("input");
const details = document.querySelectorAll("details");
const buttons = document.querySelectorAll("button");
details.forEach(details => {
  details.style.backgroundColor = `${backgroundColor}`;
  details.style.border = "solid 1px white";
});
input.forEach(input => {
  input.style.backgroundColor = "transparent";
  input.style.color = `${textColor}`;
  input.style.border = `solid 1px ${textColor}`;
});
buttons.forEach(buttons => {
  buttons.style.backgroundColor = `${backgroundColor}`;
  buttons.style.border = `solid 1px ${textColor}`;
  buttons.style.color = `${textColor}`;
});
body.style.backgroundColor = `${backgroundColor}`;
body.style.color = `${textColor}`;
if (backgroundColor === "" || textColor === "") {
  alert("Please input both values");
}

localStorage.setItem("manualMode", JSON.stringify({
  textColor,
  backgroundColor,
}));
};

window.addEventListener("load", () => {
  const autoMode = localStorage.getItem("autoMode");
  const manualMode = localStorage.getItem("manualMode");
  
  if (autoMode === true) {
    auto();
  }
  else if (manualMode) {
    const parsedManualMode = JSON.parse(manualMode);
    const body = document.querySelector("body");
const input = document.querySelectorAll("input");
const details = document.querySelectorAll("details");
const buttons = document.querySelectorAll("button");
 details.forEach(details => {
  details.style.backgroundColor = parsedManualMode.backgroundColor;
  details.style.border = "solid 1px white";
});
input.forEach(input => {
  input.style.backgroundColor = "transparent";
  input.style.color = `${parsedManualMode.textColor}`;
  input.style.border = `solid 1px ${parsedManualMode.textColor}`;
});
buttons.forEach(buttons => {
  buttons.style.backgroundColor = parsedManualMode.backgroundColor;
  buttons.style.border = `solid 1px ${parsedManualMode.textColor}`;
  buttons.style.color = parsedManualMode.textColor;
});
body.style.backgroundColor = parsedManualMode.backgroundColor;
body.style.color = parsedManualMode.textColor;
  }
})

// Save data to localStorage
function saveData() {
  const num1 = document.getElementById("num1").value;
  const num2 = document.getElementById("num2").value;
  const answer = document.getElementById("answer").value;
  const theme = document.body.classList.contains("dark-mode") ? "dark" : "light";
  const details = document.querySelectorAll("details");
  const inputs = document.querySelectorAll("input");

  const detailsState = Array.from(details).map((detail) => detail.classList.contains("dark-mode-details"));
  const inputsState = Array.from(inputs).map((input) => input.classList.contains("dark-mode-input"));

  const data = {
    num1,
    num2,
    answer,
    theme,
    detailsState,
    inputsState,
  };

  localStorage.setItem("calculatorData", JSON.stringify(data));
}

function loadData() {
  const data = localStorage.getItem("calculatorData");

  if (data) {
    const parsedData = JSON.parse(data);

    document.getElementById("num1").value = parsedData.num1;
    document.getElementById("num2").value = parsedData.num2;
    document.getElementById("answer").value = parsedData.answer;

    if (parsedData.theme === "dark") {
      document.body.classList.add("dark-mode");

      const details = document.querySelectorAll("details");
      const inputs = document.querySelectorAll("input");

      parsedData.detailsState.forEach((state, index) => {
        if (state) {
          details[index].classList.add("dark-mode-details");
        }
      });

      parsedData.inputsState.forEach((state, index) => {
        if (state) {
          inputs[index].classList.add("dark-mode-input");
        }
      });
    }
  }
   }
