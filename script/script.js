// Função para converter um número decimal para binário
function decimalToBinary(decimal) {
    return decimal.toString(2);
  }

  // Função para converter um número decimal para hexadecimal
  function decimalToHexadecimal(decimal) {
    return decimal.toString(16);
  }

  // Função para converter um número binário para decimal
  function binaryToDecimal(binary) {
    return parseInt(binary, 2);
  }

  // Função para converter um número binário para hexadecimal
  function binaryToHexadecimal(binary) {
    const decimal = binaryToDecimal(binary);
    return decimalToHexadecimal(decimal);
  }

  // Função para converter um número hexadecimal para decimal
  function hexadecimalToDecimal(hexadecimal) {
    return parseInt(hexadecimal, 16);
  }

  // Função para converter um número hexadecimal para binário
  function hexadecimalToBinary(hexadecimal) {
    const decimal = hexadecimalToDecimal(hexadecimal);
    return decimalToBinary(decimal);
  }

  // Função para exibir o resultado das conversões
  function showResult(decimal, binary, hexadecimal) {
    const resultDiv = document.getElementById("result");
    resultDiv.innerHTML = `
      <p><strong>Decimal:</strong> ${decimal}</p>
      <p><strong>Binário:</strong> ${binary}</p>
      <p><strong>Hexadecimal:</strong> ${hexadecimal}</p>
    `;
  }

  // Função para exibir os resultados das conversões entre as bases
  function showConversionResults(binary, decimal, hexadecimal) {
    const conversionResultsDiv = document.getElementById("conversion-results");
    conversionResultsDiv.innerHTML = `
      <p><strong>Binário:</strong> ${binary}</p>
      <p><strong>Decimal:</strong> ${decimal}</p>
      <p><strong>Hexadecimal:</strong> ${hexadecimal}</p>
    `;
  }

  // Função para copiar o resultado da conversão para a área de transferência
  function copyToClipboard() {
    const conversionResultsDiv = document.getElementById("conversion-results");
    const textToCopy = conversionResultsDiv.innerText;

    navigator.clipboard.writeText(textToCopy)
      .then(() => {
        alert("Resultado copiado para a área de transferência!");
      })
      .catch((error) => {
        console.error("Erro ao copiar o resultado:", error);
      });
  }

  // Função para lidar com o envio do formulário decimal
  function handleDecimalFormSubmit(event) {
    event.preventDefault();

    const decimalInput = document.getElementById("decimal-input");
    const decimal = parseInt(decimalInput.value);

    const binary = decimalToBinary(decimal);
    const hexadecimal = decimalToHexadecimal(decimal);

    showResult(decimal, binary, hexadecimal);
  }

  // Função para lidar com a alteração do número a ser convertido
  function handleConverterInputChange() {
    const converterInput = document.getElementById("converter-input");
    const baseSelect = document.getElementById("converter-base");
    const number = converterInput.value;
    const base = baseSelect.value;

    let decimal, binary, hexadecimal;

    switch (base) {
      case "bin":
        decimal = binaryToDecimal(number);
        hexadecimal = binaryToHexadecimal(number);
        showConversionResults(number, decimal, hexadecimal);
        break;
      case "dec":
        binary = decimalToBinary(number);
        hexadecimal = decimalToHexadecimal(number);
        showConversionResults(binary, number, hexadecimal);
        break;
      case "hex":
        binary = hexadecimalToBinary(number);
        decimal = hexadecimalToDecimal(number);
        showConversionResults(binary, decimal, number);
        break;
    }
  }

  // Adicionando os event listeners aos elementos do formulário decimal
  const decimalForm = document.getElementById("decimal-form");
  decimalForm.addEventListener("submit", handleDecimalFormSubmit);

  // Adicionando o event listener ao input do conversor
  const converterInput = document.getElementById("converter-input");
  converterInput.addEventListener("input", handleConverterInputChange);

  // Adicionando o event listener ao botão de cópia
  const copyButton = document.getElementById("copy-button");
  copyButton.addEventListener("click", copyToClipboard);