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

    h1.textContent = 'Bienvenidos a mi Pagina Profesional';
    p.textContent = `¡Bienvenido a mi página profesional!
Hola, soy Tello, Sebastián José un apasionado desarrollador fullstack con más de 2 años de experiencia en el diseño y desarrollo de aplicaciones web robustas y escalables. Mi objetivo es crear soluciones tecnológicas que no solo cumplan con los requisitos técnicos, sino que también ofrezcan una experiencia de usuario excepcional.

En este sitio, encontrarás información sobre mi trayectoria profesional, mis habilidades técnicas, y una muestra de los proyectos en los que he trabajado. Me encanta enfrentar nuevos desafíos y aprender continuamente para mejorar mis competencias y ofrecer lo mejor de mí en cada proyecto.

¿Quién soy?
Soy un desarrollador dedicado y creativo, con un fuerte enfoque en la calidad del código y las mejores prácticas de desarrollo. Tengo experiencia trabajando con una variedad de tecnologías tanto en el frontend como en el backend, incluyendo JavaScript, React, Node.js, Python, y muchas más.

¿Qué puedo hacer?
Desde construir interfaces de usuario intuitivas hasta desarrollar complejos sistemas backend, tengo la capacidad de manejar todos los aspectos del desarrollo de aplicaciones web. Mis habilidades incluyen:

Frontend: HTML, CSS, JavaScript, React, Angular
Backend: Node.js, Express, Django, Ruby on Rails
Bases de datos: MySQL, PostgreSQL, MongoDB
Herramientas y DevOps: Git, Docker, Jenkins, AWS
¿Qué encontrarás aquí?
Resume: Un recorrido detallado por mi experiencia laboral, educación y habilidades técnicas.
Portfolio: Ejemplos de proyectos en los que he trabajado, destacando los desafíos enfrentados y las soluciones implementadas.
Blog: Artículos y reflexiones sobre desarrollo web, nuevas tecnologías y mejores prácticas.
Contacto
Estoy siempre en busca de nuevas oportunidades y colaboraciones. Si te interesa trabajar conmigo o simplemente quieres saber más, no dudes en contactarme.

Explora mi trabajo y descubre cómo puedo ayudarte a llevar tus ideas al siguiente nivel. ¡Gracias por visitar mi página!

Botones:

Conoce más sobre mí
Revisa mi trabajo`;
    
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
