//import { document } from '../dom.js';

export function Main(language='es'){
    const div = document.createElement('div');
    //div.textContent='hola';
    //div.style.boxSizing = 'border-box';
    div.style.padding = '30px 0px';
    div.style.background = '#f0f0f3';
    //div.style.overflow = 'hidden';
    return div;
}
