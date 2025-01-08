//import { document } from '../dom.js';

export function Home(language='es') {

    const translations = {
    en: {
        sec1_h1: `Welcome to my Professional Page`,
        sec1_p1: `Hello, I am Sebastián and I am dedicated to the development of web applications. With 3 years of experience, I am capable of creating websites using the latest in design, taking into account the aesthetics and elegance that each project requires.`,
        sec1_p2: `On this site, you will find information about my professional career, my technical skills, and a sample of the projects I have worked on and are currently working on.`,
        sec1_h2: `Who am I?`,
        sec1_p3: `I am a dedicated and creative developer, with a strong focus on code quality and development best practices. I have experience working with a variety of technologies on both the frontend and backend, including JavaScript, React, Node.js, Python, and many more.`,
        sec2_h2: `What can I do?`,
        sec2_p1: `From building intuitive user interfaces to developing complex backend systems, I have the ability to handle all aspects of web application development. My skills include:`,
        sec2_p2: `HTML, CSS, JavaScript, React, Angular`,
        sec2_p3: `Node.js, Express, Django, Ruby on Rails`,
        sec2_p4: `MySQL, PostgreSQL, MongoDB`,
        sec2_p5: `Git, Docker, Jenkins, AWS`,
        sec2_h2_2: `What will you find here?`,
        sec2_p6: `A detailed tour of my work experience, education and technical skills.`,
        sec2_p7: `Examples of projects I've worked on, highlighting challenges faced and solutions implemented.`,
        sec2_p8:`Articles and reflections on web development, new technologies and best practices.`,
        sec2_h2_3:`Contact`,
        sec2_p9: `I am always looking for new opportunities and collaborations. If you're interested in working with me or just want to learn more, don't hesitate to get in touch.`,
        sec2_p10: `Explore my work and see how I can help take your ideas to the next level. Thanks for visiting my page!`,
        sec2_p11: `Learn more about me`,
        sec2_p12: `Check my work`,
    },
    es: {
        sec1_h1: `Bienvenidos a mi Página Profesional`,
        sec1_p1: `Hola soy Sebastián y me dedico al desarrollo de aplicaciones web, con una experiencia de 3 años soy capaza de crear webs usando lo ultmo en diseño teniendo encuenta la estetica y elegancia que exige cada proyecto.`,
        sec1_p2: `En este sitio, encontrarás información sobre mi trayectoria profesional, mis habilidades técnicas, y una muestra de los proyectos en los que he trabajado y trabajo actuamente.`,
        sec1_h2: `¿Quién soy?`,
        sec1_p3: `Soy un desarrollador dedicado y creativo, con un fuerte enfoque en la calidad del código y las mejores prácticas de desarrollo. Tengo experiencia trabajando con una variedad de tecnologías tanto en el frontend como en el backend, incluyendo JavaScript, React, Node.js, Python, y muchas más.`,
        sec2_h2: `¿Qué puedo hacer?`,
        sec2_p1: `Desde construir interfaces de usuario intuitivas hasta desarrollar complejos sistemas backend, tengo la capacidad de manejar todos los aspectos del desarrollo de aplicaciones web. Mis habilidades incluyen:`,
        sec2_p2: `HTML, CSS, JavaScript, React, Angular`,
        sec2_p3: `Node.js, Express, Django, Ruby on Rails`,
        sec2_p4: `MySQL, PostgreSQL, MongoDB`,
        sec2_p5: `Git, Docker, Jenkins, AWS`,
        sec2_h2_2: `¿Qué encontrarás aquí?`,
        sec2_p6: `Un recorrido detallado por mi experiencia laboral, educación y habilidades técnicas.`,
        sec2_p7: `Ejemplos de proyectos en los que he trabajado, destacando los desafíos enfrentados y las soluciones implementadas.`,
        sec2_p8:`Artículos y reflexiones sobre desarrollo web, nuevas tecnologías y mejores prácticas.`,
        sec2_h2_3:`Contacto`,
        sec2_p9: `Estoy siempre en busca de nuevas oportunidades y colaboraciones. Si te interesa trabajar conmigo o simplemente quieres saber más, no dudes en contactarme.`,
        sec2_p10: `Explora mi trabajo y descubre cómo puedo ayudarte a llevar tus ideas al siguiente nivel. ¡Gracias por visitar mi página!`,
        sec2_p11: `Conoce más sobre mí`,
        sec2_p12: `Revisa mi trabajo`,
    },
};

// Traducciones según el idioma actual
const { 
    sec1_h1, sec1_p1, sec1_p2, sec1_h2, sec1_p3, 
    sec2_h2, sec2_p1, sec2_p2, sec2_p3, sec2_p4, sec2_p5, 
    sec2_h2_2, sec2_p6, sec2_p7, sec2_p8, sec2_h2_3, sec2_p9,sec2_p10,sec2_p11, sec2_p12 
} = translations[language];



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
    
    secMe_1.innerHTML = `
    <h1 style="text-align: center;">${sec1_h1}</h1>
    <div>
        <svg fill="white" style="width: 30px; height: 30px;" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">

<path d="M96 128a128 128 0 1 0 256 0A128 128 0 1 0 96 128zm94.5 200.2l18.6 31L175.8 483.1l-36-146.9c-2-8.1-9.8-13.4-17.9-11.3C51.9 342.4 0 405.8 0 481.3c0 17 13.8 30.7 30.7 30.7l131.7 0c0 0 0 0 .1 0l5.5 0 112 0 5.5 0c0 0 0 0 .1 0l131.7 0c17 0 30.7-13.8 30.7-30.7c0-75.5-51.9-138.9-121.9-156.4c-8.1-2-15.9 3.3-17.9 11.3l-36 146.9L238.9 359.2l18.6-31c6.4-10.7-1.3-24.2-13.7-24.2L224 304l-19.7 0c-12.4 0-20.1 13.6-13.7 24.2z"/>

</svg>
        
        <p>${sec1_p1}</p>
        
    </div>
    
    <div>
        <svg fill="white" style="width: 30px; height: 30px;" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
            <path d="M352 256c0 22.2-1.2 43.6-3.3 64l-185.3 0c-2.2-20.4-3.3-41.8-3.3-64s1.2-43.6 3.3-64l185.3 0c2.2 20.4 3.3 41.8 3.3 64zm28.8-64l123.1 0c5.3 20.5 8.1 41.9 8.1 64s-2.8 43.5-8.1 64l-123.1 0c2.1-20.6 3.2-42 3.2-64s-1.1-43.4-3.2-64zm112.6-32l-116.7 0c-10-63.9-29.8-117.4-55.3-151.6c78.3 20.7 142 77.5 171.9 151.6zm-149.1 0l-176.6 0c6.1-36.4 15.5-68.6 27-94.7c10.5-23.6 22.2-40.7 33.5-51.5C239.4 3.2 248.7 0 256 0s16.6 3.2 27.8 13.8c11.3 10.8 23 27.9 33.5 51.5c11.6 26 20.9 58.2 27 94.7zm-209 0L18.6 160C48.6 85.9 112.2 29.1 190.6 8.4C165.1 42.6 145.3 96.1 135.3 160zM8.1 192l123.1 0c-2.1 20.6-3.2 42-3.2 64s1.1 43.4 3.2 64L8.1 320C2.8 299.5 0 278.1 0 256s2.8-43.5 8.1-64zM194.7 446.6c-11.6-26-20.9-58.2-27-94.6l176.6 0c-6.1 36.4-15.5 68.6-27 94.6c-10.5 23.6-22.2 40.7-33.5 51.5C272.6 508.8 263.3 512 256 512s-16.6-3.2-27.8-13.8c-11.3-10.8-23-27.9-33.5-51.5zM135.3 352c10 63.9 29.8 117.4 55.3 151.6C112.2 482.9 48.6 426.1 18.6 352l116.7 0zm358.1 0c-30 74.1-93.6 130.9-171.9 151.6c25.5-34.2 45.2-87.7 55.3-151.6l116.7 0z"/>
     </svg>
     
        <p>${sec1_p2}</p>
    </div>
    
    <h2>${sec1_h2}</h2>
    <p>${sec1_p3}</p>
`;

secMe_2.innerHTML = `
    <h2>${sec2_h2}</h2>
    <p>${sec2_p1}</p>
    <div>
        <p><strong>Frontend:</strong> ${sec2_p2}</p>
        <p><strong>Backend:</strong> ${sec2_p3}</p>
        <p><strong>Bases de datos:</strong> ${sec2_p4}</p>
        <p><strong>Herramientas y DevOps:</strong> ${sec2_p5}</p>
    </div>
    <h2>${sec2_h2_2}</h2>
    <div>
        <p><strong>Resume:</strong> ${sec2_p6}</p>
        <p><strong>Portfolio:</strong> ${sec2_p7}</p>
        <p><strong>Blog:</strong> ${sec2_p8}</p>
    </div>
    <h2>${sec2_h2_3}</h2>
    <div>
        <p>${sec2_p9}</p>
        <p>${sec2_p10}</p>
        <p>${sec2_p11}</p>
        <p>${sec2_p12}</p>
    </div>
`;

    secMe_1.style.display = 'flex';
    secMe_1.style.flexDirection = 'column';
    secMe_1.style.gap = '15px';
    secMe_1.style.paddingTop = '20px';
    secMe_1.style.padding = '10px';
    
    const sec1_divs = secMe_1.querySelectorAll('div');
    
    sec1_divs.forEach(div=>{
        div.style.border = '1px solid black';
        div.style.borderRadius = '5px';
        div.style.padding = '20px';
        div.style.display = 'flex';
        div.style.flexDirection = 'column';
        div.style.gap = '10px';
        div.style.color = 'white';
        div.style.background = 'black';
        div.style.boxShadow = '0px 10px 10px rgba(0, 0, 0, 0.5)'
        
    });
    
    
    
    
    secMe_2.style.display = 'flex';
    secMe_2.style.flexDirection = 'column';
    secMe_2.style.gap = '15px';
    
    secMe.appendChild(secMe_1);
    secMe.appendChild(circle);
    secMe.appendChild(secMe_2);

    secMe.style.display = 'flex';
    secMe.style.flexDirection = 'column';
    secMe.style.gap= '20px';
    
    
//observer    
    
    const entriesp = secMe.querySelectorAll('p');

entriesp.forEach(p => {

p.style.opacity = '0';

p.style.transition = 'opacity 1500ms';});

const effect = entries => {
  entries.forEach(entry => {
      if (entry.isIntersecting) {
          entry.target.style.opacity ='1';
        }else{
      entry.target.style.opacity = '0';
     }
      
  })
};

const observer = new IntersectionObserver(effect,{threshold: 0.3});

entriesp.forEach(entry => observer.observe(entry));

    
    
    //h1.style.color = 'blue';
    //h1.style.textAlign = 'center';
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
    //div.style.padding = '0 5%';
    //div.style.justifyContent = 'space-around';
    div.style.alignItems = 'center';
    //div.style.padding = '0';
    //div.style.margin = '0';
    container.appendChild(div);
    return container;
}
