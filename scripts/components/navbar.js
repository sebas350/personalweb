//import { document } from '../dom.js';

import {Resume} from './resume.js';
import {Home} from './home.js';
import {Portfolio} from './portfolio.js';

export function Navbar(main) {
    const nav = document.createElement('nav');
    const home = document.createElement('button');
    const resume = document.createElement('button');
    const portfolio = document.createElement('button');
    const languageSelect = document.createElement('select');
    
    // Traducciones de los elementos del navbar
    const translations = {
        en: {
            home: 'Home',
            resume: 'Resume',
            portfolio: 'Portfolio',
        },
        es: {
            home: 'Inicio',
            resume: 'Curriculum',
            portfolio: 'Portafolio',
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
    };
        
    resume.onclick = () => updateComponent(Resume);
    home.onclick = () => updateComponent(Home);
    portfolio.onclick = () => updateComponent(Portfolio);
    
     // Inicializa los textos del navbar
    updateNavbarTexts();
      
    const elements = [home,resume,portfolio,languageSelect];
    
    elements.forEach((element) => {
        nav.appendChild(element);
    }); 
    
//styles

    nav.style.display = 'flex';
    nav.style.justifyContent = 'flex-end';
    nav.style.position = 'fixed';
    nav.style.top = '0';
    nav.style.right = '0';
    nav.style.width = '100%';
    nav.style.height = '30px';
    nav.style.background = '#546de5';
    nav.style.zIndex = '1000';

    return nav;
}
