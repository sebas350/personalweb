export function Main(){
    const div = document.createElement('div');
    const h1 = document.createElement('h1');
    const p = document.createElement('p');

    h1.textContent = 'Welcome to My Personal Website';
    p.textContent = 'Hi, I\'m [Your Name], a Fullstack Developer.';

    div.appendChild(h1);
    div.appendChild(p);
    return div;
}
