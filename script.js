const output = document.getElementById("output");
const buttons = document.querySelectorAll("button");

let currentInput = "";


buttons.forEach((button) => {
  button.addEventListener("click", () => {
    const value = button.textContent;

    if (value === "C") {
      currentInput = "";
      output.textContent = "0";
    } else if (value === "=") {
      try {
 
        const sanitizedInput = currentInput.replace(/X/g, "*");
        const result = eval(sanitizedInput);
        output.textContent = result;
        currentInput = result.toString(); 
      } catch {
        output.textContent = "Error";
        currentInput = "";
      }
    } else {
      currentInput += value;
      output.textContent = currentInput;
    }
  });
});
