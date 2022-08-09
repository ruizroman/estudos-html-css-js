function start() {
  var buttonCalcImc = document.querySelector('#button-calc-imc');
  buttonCalcImc.addEventListener('click', handleButtonClick);

  //tornando a troca dos inputs dinamica
  var inputWeight = document.querySelector('#input-weight');
  var inputHeight = document.querySelector('#input-height');

  inputWeight.addEventListener('input', handleButtonClick);
  inputHeight.addEventListener('input', handleButtonClick);

  handleButtonClick();
}

function calculateImc(weight, height) {
  return weight / (height * height);
}

function classificaImc(imcValue) {
  if (imcValue > 40) {
    return 'Obesidade Grau III';
  } else if (35 <= imcValue && imcValue < 40) {
    return 'Obesidade Grau II';
  } else if (30 <= imcValue && imcValue < 35) {
    return 'Obesidade Grau I';
  } else if (25 <= imcValue && imcValue < 30) {
    return 'Acima do Peso';
  } else if (18.5 <= imcValue && imcValue < 25) {
    return 'Peso Normal';
  } else if (17 <= imcValue && imcValue < 18.5) {
    return 'Abaixo do Peso';
  } else if (16 <= imcValue && imcValue < 17) {
    return 'Muito Abaixo do Peso';
  } else {
    return 'Inválido!';
  }
}

function handleButtonClick() {
  var inputWeight = document.querySelector('#input-weight');
  var inputHeight = document.querySelector('#input-height');
  var imcResult = document.querySelector('#imc-result');
  var imcClassification = document.querySelector('#imc-classification');

  var weight = Number(inputWeight.value);
  var height = Number(inputHeight.value);

  var imc = calculateImc(weight, height);
  var imcClassificate = classificaImc(imc);
  var formattedImc = imc.toFixed(2).replace('.', ',');

  imcResult.textContent = formattedImc;
  imcClassification.textContent = imcClassificate;
}

start();
