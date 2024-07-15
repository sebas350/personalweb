export function Portfolio() {
    const div = document.createElement('div');
    const h1 = document.createElement('h1');
    const p = document.createElement('p');

    h1.textContent = 'Portfolio';
    p.textContent = '[Your Projects]';

    div.appendChild(h1);
    div.appendChild(p);
    return div;
}
