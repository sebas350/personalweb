export function Resume() {
    const div = document.createElement('div');
    const h1 = document.createElement('h1');
    const p = document.createElement('p');

    h1.textContent = 'Resume';
    p.textContent = '[Your Resume Information]';

    div.appendChild(h1);
    div.appendChild(p);
    return div;
}
