const cardNumber = document.getElementById("number");
const numberInput = document.getElementById("card_number");
let flag=false;

////////////////////////////////////////////////////////////////////////////

function isNumber(num) {
  // if (validateNumber(num)) {
  //   num = removeFunction(num);
  //   num = removeAlpha(num);
  //   num = parseInt(num, 10);
  // }

  // return num;

  if(isNumeric(num)===false)
    {
      //input contains alpha numerics\
      flag=false;
      
    }
    else{
      //input contains only numeric characters
      flag=true;

    }
   return flag;
}

function isNumeric(str) {
  // Regular expression to match numeric characters only
  const regex = /^[0-9]+$/;
  return regex.test(str);
}

// // const numInp=parseInt(numberInput,10);

// //remove non alpha-numeric chars,keeps only alpha numerics
// function removeFunction(inputString) {
//   return inputString.replace(/[^a-zA-Z0-9]/g, "");
// }

// //remove alpha chars,keeps only numbers
// function removeAlpha(inpStr) {
//   return inpStr.replace(/[^0-9]/g, "");
// }

////////////////////////////////////////////////////////////////////////////////////

const cardName = document.getElementById("name");
const nameInput = document.getElementById("card_name");

const cardMonth = document.getElementById("month_info");
const monthInput = document.getElementById("card_month");

const cardYear = document.getElementById("year_info");
const yearInput = document.getElementById("card_year");

const cardCvc = document.getElementById("cvc");
const cvcInput = document.getElementById("card_cvc");

const submitBtn = document.getElementById("submit_btn");
const completed = document.querySelector(".thank");

const form = document.querySelector("form");

const continueBtn = document.querySelector(".continue");

function setCardNumber(e) {
  cardNumber.innerText = format(e.target.value);
}

function format(s) {
  return s.toString().replace(/\d{4}(?=)/g, "$&");
}

function setCardName(e) {
  cardName.innerText = e.target.value;
}

function setCardMonth(e) {
  cardMonth.innerText = e.target.value;
}

function setCardYear(e) {
  cardYear.innerText = e.target.value;
}

function setCardCvc(e) {
  cardCvc.innerText = e.target.value;
}

function handleSubmit(e) {
  e.preventDefault();
  if (!nameInput.value) {
    nameInput.classList.add("error");
    nameInput.parentElement.classList.add("error_message");
  } else {
    nameInput.classList.remove("error");
    nameInput.parentElement.classList.remove("error_message");
  }

  if (!numberInput.value) {
    numberInput.classList.add("error");
    numberInput.parentElement.classList.add("error_message");
  } else {
    numberInput.classList.remove("error");
    numberInput.parentElement.classList.remove("error_message");
  }

  if (isNumber(numberInput.value) === false) {
    numberInput.classList.add("error");
    numberInput.parentElement.classList.add("format_error");
  } else {
    numberInput.classList.remove("error");
    numberInput.parentElement.classList.remove("format_error");
  }

  if (!monthInput.value) {
    monthInput.classList.add("error");
    monthInput.parentElement.classList.add("error_message");
  } else {
    monthInput.classList.remove("error");
    monthInput.parentElement.classList.remove("error_message");
  }

  if (!yearInput.value) {
    yearInput.classList.add("error");
    yearInput.parentElement.classList.add("error_message");
  } else {
    yearInput.classList.remove("error");
    yearInput.parentElement.classList.remove("error_message");
  }

  if (!cvcInput.value) {
    cvcInput.classList.add("error");
    cvcInput.parentElement.classList.add("error_message");
  } else {
    cvcInput.classList.remove("error");
    cvcInput.parentElement.classList.remove("error_message");
  }

  if (
    nameInput.value &&
    numberInput.value &&
    monthInput.value &&
    yearInput.value &&
    cvcInput.value &&
    isNumber(numberInput.value) === true
  ) {
    completed.classList.remove("hidden");
    form.classList.add("hidden");
  }
}

function handleContinue(e) {
  e.preventDefault();
  window.location.href = "index.html";
}

numberInput.addEventListener("keyup", setCardNumber);
nameInput.addEventListener("keyup", setCardName);
monthInput.addEventListener("keyup", setCardMonth);
yearInput.addEventListener("keyup", setCardYear);
cvcInput.addEventListener("keyup", setCardCvc);
submitBtn.addEventListener("click", handleSubmit);
continueBtn.addEventListener("click", handleContinue);
