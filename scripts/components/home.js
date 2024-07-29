export function Home() {
    const container = document.createElement('div');
    const div = document.createElement('div');
    const h1 = document.createElement('h1');
    const p = document.createElement('p');
    const circle = document.createElement('div');

    circle.style.width = "300px";
    circle.style.height = "300px";
    circle.style.borderRadius = "50%";
    circle.style.backgroundImage= "url('https://raw.githubusercontent.com/sebas350/personalweb/main/scripts/components/img/me.jpg')";
    circle.style.backgroundSize = 'cover';
    circle.style.backgroundPosition = 'center';

    h1.textContent = 'Bienvenidos a mi Pagina Web';
    p.textContent = 'Hola, soy un desarrollador Fullstack.';
    
    //h1.style.border = '2px solid blue';
    h1.style.textAlign = 'center';
    //p.style.border = '2px solid blue';
    p.style.color = 'rgb(173,()216,230)';
    h1.style.color = '#dd8e6';
    //circle.style.border = '2px solid blue';

    div.appendChild(h1);
    div.appendChild(p);
    div.appendChild(circle);
    

    div.style.color = 'blue';
    div.style.height = '80vh';
    //div.style.border = '2px solid blue';
    div.style.display = 'flex';
    div.style.flexDirection = 'column';
    div.style.justifyContent = 'space-around';
    div.style.alignItems = 'center';
    //div.style.padding = '0';
    //div.style.margin = '0';
    container.appendChild(div);
    return container;
}
