import { Navbar } from './components/navbar.js';
import { Home } from './components/home.js';
import { Resume } from './components/resume.js';
import { Portfolio } from './components/portfolio.js';

function render(component, container) {
    container.innerHTML = '';
    container.appendChild(component());
}

function init() {
    const root = document.getElementById('root');

    const navbar = Navbar();
    root.appendChild(navbar);

    const mainContainer = document.createElement('div');
    mainContainer.className = 'container';
    root.appendChild(mainContainer);

    window.addEventListener('hashchange', () => {
        const hash = window.location.hash || '#/';
        switch (hash) {
            case '#/resume':
                render(Resume, mainContainer);
                break;
            case '#/portfolio':
                render(Portfolio, mainContainer);
                break;
            default:
                render(Home, mainContainer);
                break;
        }
    });

    // Initial render
    render(Home, mainContainer);
}

document.addEventListener('DOMContentLoaded', init);
