import './style.css';
import breakingBadLogo from './src/assets/breaking-bad-logo.png';
import { BreakingBadApp } from './src/breakingbad/breaking-bad-app';

document.querySelector('#app').innerHTML = `
  <div>
    <img src="${breakingBadLogo}" class="logo" />
    <h1 id="app-title">Hello Vite!</h1>
    <div class="card"></div>
  </div>
`;

const element = document.querySelector('.card');

BreakingBadApp(element);
