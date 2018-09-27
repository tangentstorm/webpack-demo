import _ from 'lodash';
import './style.css';
import Icon from './tangentstorm.png';

function component() {
  let element = document.createElement('div');
  element.innerHTML = _.join(['Hello', 'webpack'], ' ');
  element.classList.add('hello');
  let img = new Image(); img.src = Icon;
  element.appendChild(img);
  return element;
}

document.body.appendChild(component());
