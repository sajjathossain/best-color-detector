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
  <div id="inputs">
    <div class="input">
      <label for="color-picker">Pick color: </label>
      <input type="color" id="color-picker" />
    </div>
  </div>
  <div id="figure">
    <div id="diagram"></div>
    <h4 text-align="center">Fig: diagram </h4>
  </div>
`;
