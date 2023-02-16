const lengthInput = document.getElementById('length');
const includeNumbersInput = document.getElementById('include-numbers');
const includeSymbolsInput = document.getElementById('include-symbols');
const generateButton = document.getElementById('generate-button');
const passwordInput = document.getElementById('password');
const copyButton = document.getElementById('copy-button');

const generatePassword = () => {
  const length = lengthInput.value;
  const includeNumbers = includeNumbersInput.checked;
  const includeSymbols = includeSymbolsInput.checked;
  const letters = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ';
  const numbers = '0123456789';
  const symbols = '!@#$%^&*()_+~`|}{[]\:;?><,./-=';

  let validChars = letters;

  if (includeNumbers) {
    validChars += numbers;
  }

  if (includeSymbols) {
    validChars += symbols;
  }

  let password = '';

  for (let i = 0; i < length; i++) {
    const randomIndex = Math.floor(Math.random() * validChars.length);
    password += validChars[randomIndex];
  }

  return password;
};

generateButton.addEventListener('click', () => {
  const password = generatePassword();
  passwordInput.value = password;
});

copyButton.addEventListener('click', () => {
  passwordInput.select();
  document.execCommand('copy');
  alert('Password copied to clipboard');
});
