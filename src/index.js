import _ from 'lodash';
import './style.css';

const component = () => {
  const element = document.createElement('div');
  const btn = document.createElement('button');

  element.innerHTML = _.join(['Hello', 'webpack'], ' ');
  btn.innerHTML = 'Click me and check the console!';
  btn.onclick = console.log("Print me");
  element.classList.add('body-color');
  element.appendChild(btn);

  return element;
}

document.body.appendChild(component());