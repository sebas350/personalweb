//import { document } from '../dom.js';

export function Home(language='es') {

    const translations = {
    en: {
        sec1_h1: `Welcome to my Professional Page`,
        sec1_p1: `Hello, I'm Tello, Sebastián José, a passionate fullstack developer with more than 2 years of experience in the design and development of robust and scalable web applications. My goal is to create technology solutions that not only meet technical requirements but also offer an exceptional user experience.`,
        sec1_p2: `On this site, you will find information about my professional career, my technical skills, and a sample of the projects I have worked on. I love facing new challenges and continually learning to improve my skills and offer the best of myself in each project.`,
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
        sec1_p1: `Hola, soy Tello, Sebastián José un apasionado desarrollador fullstack con más de 2 años de experiencia en el diseño y desarrollo de aplicaciones web robustas y escalables. Mi objetivo es crear soluciones tecnológicas que no solo cumplan con los requisitos técnicos, sino que también ofrezcan una experiencia de usuario excepcional.`,
        sec1_p2: `En este sitio, encontrarás información sobre mi trayectoria profesional, mis habilidades técnicas, y una muestra de los proyectos en los que he trabajado. Me encanta enfrentar nuevos desafíos y aprender continuamente para mejorar mis competencias y ofrecer lo mejor de mí en cada proyecto.`,
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
    <h1>${sec1_h1}</h1>
    <div>
        <p>${sec1_p1}</p>
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

p.style.transition = 'opacity 1000ms';});

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
    div.style.padding = '0 20px';
    //div.style.justifyContent = 'space-around';
    div.style.alignItems = 'center';
    //div.style.padding = '0';
    //div.style.margin = '0';
    container.appendChild(div);
    return container;
}
