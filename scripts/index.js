const taxesButton = document.querySelector(".get-taxes__button");
const taxesInput = document.querySelector(".get-taxes__input");
const taxesForm = document.querySelector(".form-taxes");
const pensionFundId = document.getElementById("pens-tax");
const ndflId = document.getElementById("ndfl-tax");
const socialFundId = document.getElementById("social-tax");
const medicalFundId = document.getElementById("medical-tax");
const totalId = document.getElementById("total");

function getTaxes(event) {
  event.preventDefault();
  const taxesInputValue = Number(taxesInput.value);
  const pensionFund = taxesInputValue * 0.22;
  const medicalFund = taxesInputValue * 0.05;
  const socialFund = taxesInputValue * 0.03;
  const ndfl = taxesInputValue * 0.13;
  const total = taxesInputValue + pensionFund + medicalFund + socialFund;
  pensionFundId.textContent = pensionFund;
  medicalFundId.textContent = medicalFund;
  socialFundId.textContent = socialFund;
  ndflId.textContent = ndfl;
  totalId.textContent = total;

  console.log(pensionFund, medicalFund, socialFund, total, ndfl);

  return pensionFund, medicalFund, socialFund, total;
}
taxesForm.addEventListener("submit", getTaxes);
