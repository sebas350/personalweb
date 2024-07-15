export function Navbar() {
    const nav = document.createElement('nav');
    const ul = document.createElement('ul');

    const links = [
        { href: '#/', text: 'Home' },
        { href: '#/resume', text: 'Resume' },
        { href: '#/portfolio', text: 'Portfolio' }
    ];

    links.forEach(link => {
        const li = document.createElement('li');
        const a = document.createElement('a');
        a.href = link.href;
        a.textContent = link.text;
        li.appendChild(a);
        ul.appendChild(li);
    });

    nav.appendChild(ul);
    return nav;
}
