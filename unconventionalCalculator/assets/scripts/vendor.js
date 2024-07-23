const userInput = document.getElementById('input-number');
const addBtn = document.getElementById('btn-add');
const subtractBtn = document.getElementById('btn-subtract');
const multiplyBtn = document.getElementById('btn-multiply');
const divideBtn = document.getElementById('btn-divide');

const currentResultOutput = document.getElementById('current-result');
const currentCalculationOutput = document.getElementById('current-calculation');

function outputResult(result, text) {
  currentResultOutput.textContent = result;
  currentCalculationOutput.textContent = text;
}

let currentResult = 0;

const currentCalculation = (calculationType) => {
  const parsedUserInput = parseInt(userInput.value);
  let multiplicationType;
  const initialResult = currentResult;

  if (calculationType === 'multiply') {
    currentResult *= parsedUserInput;
    multiplicationType = '*';
  } else if (calculationType === 'divide') {
    currentResult /= parsedUserInput;
    multiplicationType = '/';
  } else if (calculationType === 'subtract') {
    currentResult -= parsedUserInput;
    multiplicationType = '-';
  } else {
    currentResult += parsedUserInput;
    multiplicationType = '+';
  }

  const text = initialResult  + " " + multiplicationType + " " + parsedUserInput;
  outputResult(currentResult, text);
}

addBtn.addEventListener('click', () =>currentCalculation('add'));
subtractBtn.addEventListener('click', () =>currentCalculation('subtract'));
multiplyBtn.addEventListener('click', () =>currentCalculation('multiply'));
divideBtn.addEventListener('click', () => currentCalculation('divide'));
