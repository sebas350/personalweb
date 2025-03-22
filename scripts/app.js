//import { document } from './dom.js';
import { Navbar } from './components/navbar.js';
import { Home } from './components/home.js';
import { Resume } from './components/resume.js';
import { Portfolio } from './components/portfolio.js';
import { Footer } from './components/footer.js';
import { Main } from './components/main.js';
import { Loader } from './components/loader.js';

function init(){
  const root = document.querySelector('#root');
  const footer = Footer();
  const main = Main();
  const home = Home();
  const nav = Navbar(main, footer);
  const resume = Resume();
  const portfolio = Portfolio();
  const loader = Loader();
  
  main.appendChild(home);
  
  root.appendChild(loader);
  
  setTimeout(() => {
      root.removeChild(loader);
      root.appendChild(nav);
      root.appendChild(main);
      root.appendChild(footer);
  }, 4000);
  
};

init();
