import './style.css';

document.querySelector('#app').innerHTML = `
    <h1 class="brand__name">Color Identifier</h1>
    <div class="card">
      <h3 id="expected">Expected Color: <span id="color-code"></span></h3>
    </div>
    <div class="btns">
      <button id="again-btn">Again</button>
      <button id="log-btn">Log Data</button>
      <button id="get-btn">Get Color</button>
      <button id="set-btn">Set Color</button>
    </div>
    <div class="inputs">
      <input type="color" id="color-picker" />
    </div>
`;