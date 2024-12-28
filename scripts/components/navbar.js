//import { document } from '../dom.js';

import {Resume} from './resume.js';
import {Home} from './home.js';
import {Portfolio} from './portfolio.js';

export function Navbar(main) {
    const container = document.createElement('div');
    const nav = document.createElement('nav');
    const home = document.createElement('button');
    const resume = document.createElement('button');
    const portfolio = document.createElement('button');
    const languageSelect = document.createElement('select');
    const language = document.createElement('div');
    const textLang = document.createElement('p');
    language.appendChild(textLang);
    language.appendChild(languageSelect);
    
    const menu = document.createElement('div');
    const btn = document.createElement('button');
    
    // Traducciones de los elementos del navbar
    const translations = {
        en: {
            home: 'Home',
            resume: 'Resume',
            portfolio: 'Portfolio',
            language: 'Language >',
        },
        es: {
            home: 'Inicio',
            resume: 'Curriculum',
            portfolio: 'Portafolio',
            language: 'Lenguaje >',
        },
    };
    
    // objeto lenguaje
    const languages = { es: 'Español', en: 'English' };
    
    //creacion de etiqueta opciones con las dos opciones ingles-espanol
    for (const [value, text] of Object.entries(languages)) {
        const option = document.createElement('option');
        option.value = value;
        option.textContent = text;
        languageSelect.appendChild(option);
    };

    // Estado inicial del idioma
    let currentLanguage = 'es';
    
    // Función para actualizar los textos del navbar
    const updateNavbarTexts = () => {
        home.textContent = translations[currentLanguage].home;
        resume.textContent = translations[currentLanguage].resume;
        portfolio.textContent = translations[currentLanguage].portfolio;
        textLang.textContent = translations[currentLanguage].language;
    };
    
    
    const updateComponent = (newComponent)=>{
        main.textContent = '';
        main.appendChild(newComponent(currentLanguage)); //pasar el lenguaje actual al componente.
    };
    
     // Evento de cambio de idioma
    languageSelect.onchange = (event) => {
        currentLanguage = event.target.value; // Actualiza el idioma actual
        updateNavbarTexts(); // Actualiza los textos del navbar
        updateComponent(Home); // Recarga el contenido inicial en el nuevo idioma
        window.scrollTo(0,0);
        menu.style.transform = 'translateY(-100%)';
        svgMenu();
        
    };
        
    resume.onclick = () => {
        updateComponent(Resume);
        window.scrollTo(0,0);
        menu.style.transform = 'translateY(-100%)';
        svgMenu();
    };
    home.onclick = () => {
        updateComponent(Home);
        window.scrollTo(0,0);
        menu.style.transform = 'translateY(-100%)';
        svgMenu();
    };
    portfolio.onclick = () => {
        updateComponent(Portfolio);
        window.scrollTo(0,0);
        menu.style.transform = 'translateY(-100%)';
        svgMenu();
    };
    
     // Inicializa los textos del navbar
    updateNavbarTexts();
    
    
    
//svg

const svg = document.createElement('div');

const svgMenuCdn = `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
  <path stroke-linecap="round" stroke-linejoin="round" d="M3 4.5h14.25M3 9h9.75M3 13.5h9.75m4.5-4.5v12m0 0-3.75-3.75M17.25 21 21 17.25" />
</svg>`;

const svgXCdn = `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
  <path stroke-linecap="round" stroke-linejoin="round" d="M6 18 18 6M6 6l12 12" />
</svg>`;



const svgMenu = () => {
    svg.innerHTML = svgMenuCdn;
    const svgImg = svg.querySelector('svg');
    svgImg.style.width = '30px';
    svgImg.style.height = '30px';
};

svgMenu();



btn.appendChild(svg);
btn.style.all = 'unset';
btn.style.cursor = 'pointer';
    
      
    const elements = [home,resume,portfolio,language];
    
    elements.forEach((element) => {
        menu.appendChild(element);
    }); 
    
//styles

    nav.style.display = 'flex';
    nav.style.justifyContent = 'flex-end';
    nav.style.position = 'fixed';
    nav.style.top = '0';
    nav.style.right = '0';
    nav.style.width = '100%';
    nav.style.height = '40px';
    nav.style.background = '#546de5';
    nav.style.transform = 'translateY(-20px)';
    nav.style.transition = 'transform 500ms';
    nav.style.zIndex = '1000';
    
    language.style.display = 'flex';
    language.style.justifyContent = 'center';
    language.style.gap = '10px';
    
    textLang.textContent = 'Lenguaje >';
    //textLang.style.border = '3px solid red';
    
    languageSelect.style.all = 'unset';
    languageSelect.style.cursor = 'pointer';
    resume.style.all = 'unset';
    resume.style.cursor = 'pointer';
    home.style.all = 'unset';
    home.style.cursor = 'pointer';
    portfolio.style.all = 'unset';
    portfolio.style.cursor = 'pointer';
    
    
    
    
//observer

const effect = entries => {
    entries.forEach(entry => {
        if(entry.isIntersecting){
            entry.target.style.transform = 'translateY(0px)';
        }
    })
};    
    
const observer =  new IntersectionObserver(effect,{threshold: 0.3})

observer.observe(nav);

menu.style.width = '100%';
menu.style.height = '100vh';
//menu.style.border = '2px solid red';
menu.style.position = 'fixed';
menu.style.top = '30px';
menu.style.left = '0';
menu.style.background = 'white';
menu.style.zIndex = '999';
menu.style.display = 'flex';
menu.style.flexDirection = 'column';
menu.style.alignItems = 'center';
menu.style.justifyContent = 'space-evenly';
//menu.style.display = 'none';
menu.style.transform = 'translateY(-100%)'
menu.style.transition = 'transform 500ms';


const svgX = () => {
        svg.innerHTML = svgXCdn;
    const svgImg = svg.querySelector('svg');
    svgImg.style.width = '30px';
    svgImg.style.height = '30px';
};


btn.onclick = () => {
    if (menu.style.transform === 'translateY(-100%)') {
        menu.style.transform = 'translateY(0px)';
        svgX();
        

    }else{
        menu.style.transform = 'translateY(-100%)';
        svgMenu();
    }
};

nav.appendChild(btn);
container.appendChild(nav);
container.appendChild(menu);    

    return container;
}
