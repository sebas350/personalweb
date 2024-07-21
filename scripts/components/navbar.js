import {Resume} from './resume.js';

export function Navbar(main) {
    const nav = document.createElement('nav');
    const home = document.createElement('button');
    const resume = document.createElement('button');
    const porfolio = document.createElement('button');
    
    home.textContent = 'Home';
    resume.textContent = 'Resumen';
    porfolio.textContent = 'Porfolio';
    
    const innerResume = function() {
        main.innerHTML = `${Resume().innerHTML}`;
        
    };
    
    resume.onclick = innerResume;
    
    const items = [home,resume,porfolio];
    for (let item of items){
        nav.appendChild(item);
    }; 
    
    nav.style.display = 'flex';
    nav.style.justifyContent = 'flex-end';

    return nav;
}
