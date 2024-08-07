import {Resume} from './resume.js';
import {Home} from './home.js';
import {Portfolio} from './portfolio.js';

export function Navbar(main) {
    const nav = document.createElement('nav');
    const home = document.createElement('button');
    const resume = document.createElement('button');
    const portfolio = document.createElement('button');
    
    home.textContent = 'Home';
    resume.textContent = 'Resumen';
    portfolio.textContent = 'Portfolio';
    
    const inner = (main) => {
        return {
            home: () => {main.innerHTML = Home().innerHTML;},
            resume: () => {main.innerHTML = Resume().innerHTML;},
            portfolio: () => {main.innerHTML = Portfolio().innerHTML;},
        };
        
    };
        
    resume.onclick = inner(main).resume;
    home.onclick = inner(main).home;
    portfolio.onclick = inner(main).portfolio;
      
    const elements = [home,resume,portfolio];
    
    for (let element of elements){
        nav.appendChild(element);
    }; 
    
    nav.style.display = 'flex';
    nav.style.justifyContent = 'flex-end';
    nav.style.position = 'fixed';
    nav.style.top = '0';
    nav.style.right = '0';
    nav.style.width = '100%';
    nav.style.background = 'red';
    //nav.style.zIndex = '1000';

    return nav;
}
