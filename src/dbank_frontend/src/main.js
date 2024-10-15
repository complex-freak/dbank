import { dbank_backend } from "../../declarations/dbank_backend";

window.addEventListener("load", async () => {
  update();
});

document.querySelector("form").addEventListener("submit", async (event) => {
  event.preventDefault();

  const inputAmount = document.getElementById("input-amount").value;
  const outputAmount = document.getElementById("withdrawal-amount").value;
  const button = event.target.querySelector("#submit-btn");

  button.setAttribute("disabled", true);

  if (inputAmount) {
    await dbank_backend.topUp(parseFloat(inputAmount));
    document.getElementById("input-amount").value = "";
  }

  if (outputAmount) {
    await dbank_backend.withdraw(parseFloat(outputAmount));
    document.getElementById("withdrawal-amount").value = "";
  }

  await dbank_backend.compound();
  update();
  button.removeAttribute("disabled");
});

async function update() {
  const currentValue = await dbank_backend.checkBalance();
  document.getElementById("value").innerText =
    Math.round(currentValue * 100) / 100;
}
