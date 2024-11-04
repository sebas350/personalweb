export function Home() {
    const container = document.createElement('div');
    const div = document.createElement('div');
    const secMe= document.createElement('section');
    const secMe_1= document.createElement('div');
    const secMe_2= document.createElement('div');
    const circle = document.createElement('div');

    circle.style.width = "300px";
    circle.style.height = "300px";
    circle.style.borderRadius = "50%";
    circle.style.backgroundImage= "url('https://raw.githubusercontent.com/sebas350/personalweb/main/scripts/components/img/me.jpg')";
    circle.style.backgroundSize = 'cover';
    circle.style.backgroundPosition = 'center';
    
    secMe_1.innerHTML = `<h1>Bienvenidos a mi Pagina Profesional</h1>
    
    <div>
        <p>Hola, soy Tello, Sebastián José un apasionado desarrollador fullstack con más de 2 años de experiencia en el diseño y desarrollo de aplicaciones web robustas y escalables. Mi objetivo es crear soluciones tecnológicas que no solo cumplan con los requisitos técnicos, sino que también ofrezcan una experiencia de usuario excepcional.</p>

<p>En este sitio, encontrarás información sobre mi trayectoria profesional, mis habilidades técnicas, y una muestra de los proyectos en los que he trabajado. Me encanta enfrentar nuevos desafíos y aprender continuamente para mejorar mis competencias y ofrecer lo mejor de mí en cada proyecto.</p>
    </div>
    
<h2>¿Quién soy?</h2>
<p>Soy un desarrollador dedicado y creativo, con un fuerte enfoque en la calidad del código y las mejores prácticas de desarrollo. Tengo experiencia trabajando con una variedad de tecnologías tanto en el frontend como en el backend, incluyendo JavaScript, React, Node.js, Python, y muchas más.</p>`;


secMe_2.innerHTML =`<h2>¿Qué puedo hacer?</h2>
<p>Desde construir interfaces de usuario intuitivas hasta desarrollar complejos sistemas backend, tengo la capacidad de manejar todos los aspectos del desarrollo de aplicaciones web. Mis habilidades incluyen:</p>

<div>
    <p><strong>Frontend:</strong> HTML, CSS, JavaScript, React, Angular</p>
    <p><strong>Backend:</strong> Node.js, Express, Django, Ruby on Rails</p>
    <p><strong>Bases de datos:</strong> MySQL, PostgreSQL, MongoDB</p>
    <p><strong>Herramientas y DevOps:</strong> Git, Docker, Jenkins, AWS</p>
</div>

<h2>¿Qué encontrarás aquí?</h2>
<div>
    <p><strong>Resume:</strong> Un recorrido detallado por mi experiencia laboral, educación y habilidades técnicas.</p>
<p><strong>Portfolio:</strong> Ejemplos de proyectos en los que he trabajado, destacando los desafíos enfrentados y las soluciones implementadas.</p>
<p><strong>Blog:</strong> Artículos y reflexiones sobre desarrollo web, nuevas tecnologías y mejores prácticas.</p>
</div>

<h2>Contacto</h2>
<div>
    <p>Estoy siempre en busca de nuevas oportunidades y colaboraciones. Si te interesa trabajar conmigo o simplemente quieres saber más, no dudes en contactarme.</p>

<p>Explora mi trabajo y descubre cómo puedo ayudarte a llevar tus ideas al siguiente nivel. ¡Gracias por visitar mi página!</p>

<p>Conoce más sobre mí</p>
<p>Revisa mi trabajo</p>
</div>`;

    secMe_1.style.display = 'flex';
    secMe_1.style.flexDirection = 'column';
    secMe_1.style.gap = '15px';
    secMe_1.style.paddingTop = '20px';
    
    secMe_2.style.display = 'flex';
    secMe_2.style.flexDirection = 'column';
    secMe_2.style.gap = '15px';
    
    secMe.appendChild(secMe_1);
    secMe.appendChild(circle);
    secMe.appendChild(secMe_2);
    
    //seccion mia
const h1 = secMe.querySelector('h1');
const ps = secMe.querySelectorAll('p');

const h2s = secMe.querySelectorAll('h2');

for (const p of ps){
    p.style.textAlign = 'justify';
    //p.style.transform = 'translateX(100px)';
    p.style.opacity = '0';
    p.style.transition = 'opacity 1000ms';
    //p.style.textIndent = '20px';
    p.style.color = 'black';
};

const effect = entries => {
    entries.forEach(entry => {
        if (entry.isIntersecting){
            entry.target.style.opacity = '1';
        }else{
            entry.target.style.opacity = '0';
        }
    })
}



const observer = new IntersectionObserver(effect,{threshold:0.1, root: null});

ps.forEach(entry => observer.observe(entry));


for (const h2 of h2s){
    //h2.style.textIndent = '20px';
};
    
    
    secMe.style.display = 'flex';
    secMe.style.flexDirection = 'column';
    secMe.style.gap= '20px';
    
    h1.style.color = 'blue';
    h1.style.textAlign = 'center';
    circle.style.margin = 'auto';
    //pa.style.textAlign = 'justify';
    //pa.style.textIndent = '20px';
    //p.style.border = '2px solid blue';
    //p.style.color = 'rgb(173,()216,230)';
    //h1.style.color = '#dd8e6';
    //circle.style.border = '2px solid blue';
    
    //div.appendChild(h1);
    
    div.appendChild(secMe);
    
    

    //div.style.color = 'blue';
    //div.style.height = '80vh';
    //div.style.border = '2px solid blue';
    //div.gap = '100px';
    div.style.display = 'flex';
    div.style.flexDirection = 'column';
    div.style.padding = '0 20px';
    //div.style.justifyContent = 'space-around';
    div.style.alignItems = 'center';
    //div.style.padding = '0';
    //div.style.margin = '0';
    container.appendChild(div);
    return container;
}
