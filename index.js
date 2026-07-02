const btnElement = document.querySelector('.js-generate-btn');
const alertContainerEL = document.querySelector('.alert-container');
const copyIconEl = document.querySelector('.fa-copy');
const inputEl = document.getElementById('input');

btnElement.addEventListener('click', (event) => {

  createPassword();
})

copyIconEl.addEventListener('click', () => {

  if (inputEl.value) {
    copyPassword();
    alertContainerEL.classList.remove('active');

    setTimeout(() => {

      alertContainerEL.classList.add('active');
    }, 2000) 
  }


})

function createPassword() {
  const chars = 
    "0123456789abcdefghijklmnopqrstuvwxyz!@#$%^&*(){}_+=.,/:ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  
  const passwordLength = 14;
  let password = '';

  for (let index = 0; index < passwordLength; index++) {
    const randomNum = Math.floor(Math.random() * chars.length);
    
    password += chars.substring(randomNum, randomNum + 1);
  }

  inputEl.value = password;

  alertContainerEL.innerText = password + " copied!";
}

function copyPassword() {

  inputEl.select();
  inputEl.setSelectionRange(0, 9999);
  navigator.clipboard.writeText(inputEl.value);


}