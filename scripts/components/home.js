export function Home() {
    const container = document.createElement('div');
    const div = document.createElement('div');
    const h1 = document.createElement('h1');
    const p = document.createElement('p');

    h1.textContent = 'Welcome to My Personal Website';
    p.textContent = 'Hi, I\'m [Your Name], a Fullstack Developer.';

    div.appendChild(h1);
    div.appendChild(p);

    div.style.color = 'blue';
    div.style.border = '2px solid blue';
    div.style.display = 'flex';
    div.style.justifyContent = 'center';
    div.style.alignItems = 'center';
    div.style.flexDirection = 'column';
    container.appendChild(div);
    return container;
}
