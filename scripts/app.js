import { Navbar } from './components/navbar.js';
import { Home } from './components/home.js';
import { Resume } from './components/resume.js';
import { Portfolio } from './components/portfolio.js';
import { Footer } from './components/footer.js';
import { Main } from './components/main.js';

function init(){
  const root = document.querySelector('#root');
  const nav = Navbar();
  const home = Home();
  const footer = Footer();
  const main = Main();
  const resume = Resume();
  const portfolio = Portfolio();
  root.appendChild(nav);
  root.appendChild(home);
  root.appendChild(footer);
};

init();
