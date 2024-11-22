//import { document } from '../dom.js';

export function Footer(){
  const footer = document.createElement('div');
  footer.className = 'footer';
  footer.innerHTML =`hola footer`;
  footer.style.backgroundColor = 'black';
  footer.style.color = 'white';
  return footer;
};
