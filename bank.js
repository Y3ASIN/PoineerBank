//login event handler
document.getElementById("login").addEventListener("click", function () {
  document.getElementById("login-area").style.display = "none";
  document.getElementById("transaction-area").style.display = "block";
});
//deposit event handler

document.getElementById("addDeposit").addEventListener("click", function () {
  const depositAmount = document.getElementById("depositAmount").value;
  const depositNumber = parseFloat(depositAmount);

  const currentDeposit = document.getElementById("currentDeposit").innerText;
  const currentDepositNumber = parseFloat(currentDeposit);
  const totalDeposit = depositNumber + currentDepositNumber;

  document.getElementById("currentDeposit").innerText = totalDeposit;
  document.getElementById("depositAmount").value = "";

  const currentBalance = document.getElementById("currentBalance").innerText;
  const currentBalanceNumber = parseFloat(currentBalance);
  const totalBalance = depositNumber + currentBalanceNumber;

  document.getElementById("currentBalance").innerText = totalBalance;
});

//withdraw event handler
document.getElementById("subWithdraw").addEventListener("click", function () {
  const withdrawAmount = document.getElementById("withdrawAmount").value;
  const withdrawAmountNumber = parseFloat(withdrawAmount);

  const currentWithdraw = document.getElementById("currentWithdraw").innerText;
  const currentWithdrawNumber = parseFloat(currentWithdraw);
  const totalWithdraw = withdrawAmountNumber + currentWithdrawNumber;

  document.getElementById("currentWithdraw").innerText = totalWithdraw;
  document.getElementById("withdrawAmount").value = "";

  const currentBalance = document.getElementById("currentBalance").innerText;
  const currentBalanceNumber = parseFloat(currentBalance);
  const totalBalance = currentBalanceNumber - withdrawAmountNumber;

  document.getElementById("currentBalance").innerText = totalBalance;
});
