const taxesButton = document.querySelector(".get-taxes__button");
const taxesInput = document.querySelector(".get-taxes__input");
const taxesForm = document.querySelector(".form-taxes");
const pensionFundId = document.getElementById("pens-tax");
const ndflId = document.getElementById("ndfl-tax");
const socialFundId = document.getElementById("social-tax");
const medicalFundId = document.getElementById("medical-tax");
const totalId = document.getElementById("total");

function getTaxes(e) {
  e.preventDefault();
  const taxesInputValue = Number(taxesInput.value);
  const pensionFund = Math.round(taxesInputValue * 0.22);
  const medicalFund = Math.round(taxesInputValue * 0.05);
  const socialFund = Math.round(taxesInputValue * 0.03);
  const ndfl = Math.round(taxesInputValue * 0.13);
  const total = taxesInputValue + pensionFund + medicalFund + socialFund;
  pensionFundId.textContent = pensionFund;
  medicalFundId.textContent = medicalFund;
  socialFundId.textContent = socialFund;
  ndflId.textContent = ndfl;
  totalId.textContent = total;
  return;
}

// taxesInput.addEventListener("input", getTaxes);

taxesForm.addEventListener("submit", getTaxes);
