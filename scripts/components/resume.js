export function Resume() {
    const container = document.createElement('div');
    const div = document.createElement('div');
    const h1 = document.createElement('h1');
    const p = document.createElement('p');
    const circle = document.createElement('div');

    circle.style.width = "100px";
    circle.style.height = "100px";
    circle.style.borderRadius = "50%";
    circle.style.backgroundColor = 'blue';

    h1.textContent = 'Resume';
    p.textContent = '[Your Resume Information]';

    div.appendChild(h1);
    div.appendChild(p);
    div.appendChild(circle);

    div.style.color = 'blue';
    div.style.border = '2px solid blue';
    div.style.display = 'flex';
    div.style.justifyContent = 'center';
    div.style.alignItems = 'center';
    div.style.flexDirection = 'column';

    container.appendChild(div);
    return container;
}
