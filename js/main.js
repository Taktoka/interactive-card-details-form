let inputName = document.querySelector(".input-name");
let inputNum = document.querySelector(".input-num");
inputMonth = document.querySelector(".input-month");
inputYear = document.querySelector(".input-year");
inputCvc = document.querySelector(".input-cvc");
form = document.querySelector(".form");
completed = document.querySelector(".thanks");
confirmBtn = document.querySelector(".confirm");
id = document.querySelector(".id");
serial = document.querySelector(".serial");
form = document.querySelector(".form");
month = document.querySelector(".time-month");
year = document.querySelector(".time-year");
cvcNum = document.querySelector(".cvc-num");

inputName.addEventListener("input", (e) => {
  nameField = inputName.value;
  id.textContent = nameField;
  if (nameField === "") {
    id.textContent = "JANE APPLESEED";
  }
});

inputNum.addEventListener("input", (e) => {
  numField = inputNum.value;
  serial.textContent = numField;
  if (numField === "") {
    serial.textContent = "0000 0000 0000 0000";
  }
});

inputMonth.addEventListener("input", (e) => {
  monthField = inputMonth.value;
  month.textContent = monthField;
  if (monthField === "") {
    month.textContent = "00";
  }
});

inputYear.addEventListener("input", (e) => {
  yearField = inputYear.value;
  year.textContent = yearField;
  if (yearField === "") {
    year.textContent = "0000 0000 0000 0000";
  }
});

inputCvc.addEventListener("input", (e) => {
  cvcField = inputCvc.value;
  cvcNum.textContent = cvcField;
  if (cvcField === "") {
    cvcNum.textContent = "000";
  }
});

let errName = document.querySelector(".error-name");
errNum = document.querySelector(".error-num");
errMonth = document.querySelector(".error-month");
errYear = document.querySelector(".error-year");
errCv = document.querySelector(".error-cvc");

confirmBtn.addEventListener("click", (e) => {
  let cardNumValid = /\d{4}\s\d{4}\s\d{4}\s\d{4}/;
  let monthValid = /0[1-9]|1[0-2]/g;
  let yearValid = /^((0[1-9])|(1[0-9])|(2[0-9]|3[0-9]))$/;
  let cvcValid = /[0-9]{3}/;

  valid = 0;

  if (inputName.value === "") {
    errName.style.display = "block";
    inputName.style.borderColor = "var(--red)";
  } else {
    errName.style.display = "none";
  }

  if (inputNum.value === "") {
    errNum.style.display = "block";
    inputNum.style.borderColor = "var(--red)";
  } else if (cardNumValid.test(inputNum.value) === true) {
    errNum.style.display = "none";
    valid++;
  } else {
    inputNum.style.borderColor = "var(--red)";
    errNum.style.display = "block";
    errNum.innerHTML = "Wrong format";
  }

  if (inputMonth.value === "") {
    errMonth.style.display = "block";
    inputMonth.style.borderColor = "var(--red)";
  } else if (monthValid.test(inputMonth.value) === true) {
    errMonth.style.display = "none";
    inputMonth.style.borderColor = "var(--very-dark-violet)";
    valid++;
  } else {
    errMonth.style.display = "block";
    errMonth.innerHTML = "Wrong format";
    inputMonth.style.borderColor = "var(--red)";
  }

  if (inputYear.value === "") {
    errYear.style.display = "block";
    inputYear.style.borderColor = "var(--red)";
  } else if (yearValid.test(inputYear.value) === true) {
    errYear.style.display = "none";
    inputYear.style.borderColor = "var(--very-dark-violet)";
    valid++;
  } else {
    errYear.style.display = "block";
    errYear.innerHTML = "Wrong format";
    inputYear.style.borderColor = "var(--red)";
  }

  if (inputCvc.value === "") {
    errCv.style.display = "block";
    inputCvc.style.borderColor = "var(--red)";
  } else if (cvcValid.test(inputCvc.value) === true) {
    errCv.style.display = "none";
    inputCvc.style.borderColor = "var(--very-dark-violet)";
    valid++;
  } else {
    errCv.style.display = "block";
    errCv.innerHTML = "Wrong format";
    inputCvc.style.borderColor = "var(--red)";
  }

  if (valid === 4) {
    form.style.display = "none";
    completed.style.display = "flex";
  } else {
    form.style.display = "block";
    completed.style.display = "none";
  }
});
