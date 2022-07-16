import { trainingData } from './trainingData.js';
const net = new brain.NeuralNetwork();

let randColor;
let colorValue;
let rgb;

const trainData = () => {
  const unique = [];
  trainingData.filter((item) => {
    const itemStr = JSON.stringify(item);
    let isFound = false;
    unique.filter((value) => {
      if (JSON.stringify(value) === itemStr) {
        isFound = true;
      }
    });
    unique.push(item);
    return !isFound && item;
  });
  net.train(trainingData);
};
trainData();

const trainModel = () => {
  randColor = {
    r: Math.random(),
    g: Math.random(),
    b: Math.random(),
  };
  const output = net.run(randColor);
  const expected = document.querySelector('#expected');
  const colorCode = document.querySelector('#color-code');
  const card = document.querySelector('.card');

  card.style.backgroundColor = `rgb(${randColor.r * 255}, ${
    randColor.g * 255
  }, ${randColor.b * 255})`;
  const expectedColorText = `rgb(${output.r * 255}, ${output.g * 255}, ${
    output.b * 255
  })`;
  expected.style.color = expectedColorText;
  colorCode.innerText = expectedColorText;
};

const getColorValue = () => {
  return document.querySelector('#color-picker').value;
};

function hexToRgb(
  hex,
  result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex)
) {
  return result ? result.map((i) => parseInt(i, 16)).slice(1) : null;
}

const getColor = () => {
  const colorPicker = document.querySelector('#color-picker');
  colorPicker.click();
};

const setColor = () => {
  const r = 1 - rgb[0] / 255;
  const g = 1 - rgb[1] / 255;
  const b = 1 - rgb[2] / 255;

  const newData = {
    input: { ...randColor },
    output: {
      r,
      g,
      b,
    },
  };

  trainingData.push(newData);
  alert('Data added!');
  trainData();
};

trainModel();
document.querySelector('#again-btn').addEventListener('click', trainModel);
document.querySelector('#log-btn').addEventListener('click', () => {
  console.log(trainingData);
});
document.querySelector('#get-btn').addEventListener('click', getColor);
document.querySelector('#set-btn').addEventListener('click', setColor);
document.querySelector('#color-picker').addEventListener('input', (e) => {
  colorValue = e.target.value;
  document.querySelector('#expected').style.color = colorValue;
  rgb = hexToRgb(colorValue);
});
