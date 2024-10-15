// import App from './App';
// import './index.scss';

// const app = new App();

import { dbank_backend } from '../../declarations/dbank_backend';

window.addEventListener("load", async () => {
  const currentValue = await dbank_backend.checkBalance();
  document.getElementById("value").innerText = Math.round(currentValue * 100) /100;
})
