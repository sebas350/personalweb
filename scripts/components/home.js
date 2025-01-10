//import { document } from '../dom.js';

export function Home(language='es') {

    const translations = {
    en: {
        sec1_h1: `Welcome to my Professional Page`,
        sec1_p1: `Hello, I am Sebastián and I am dedicated to the development of web applications. With 3 years of experience, I am capable of creating websites using the latest in design, taking into account the aesthetics and elegance that each project requires.`,
        sec1_p2: `On this site, you will find information about my professional career, my technical skills, and a sample of the projects I have worked on and are currently working on.`,
        sec1_h2: `Who am I?`,
        sec1_p3: `I am a developer who is always looking to focus on code quality, best development practices and the latest in technologies.`,
        sec1_p4: `I have experience working with a variety of technologies on both the frontend and backend.`,
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
        sec1_p3: `Soy un desarrollador que siempre esta en buscando enforcarse en la calidad del código, las mejores prácticas de desarrollo y lo ultimo en tecnologias.`,
        sec1_p4:`Tengo experiencia trabajando con una variedad de tecnologías tanto en el frontend como en el backend.`,
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
    sec1_h1, sec1_p1, sec1_p2, sec1_h2, sec1_p3, sec1_p4, 
    sec2_h2, sec2_p1, sec2_p2, sec2_p3, sec2_p4, sec2_p5, 
    sec2_h2_2, sec2_p6, sec2_p7, sec2_p8, sec2_h2_3, sec2_p9,sec2_p10,sec2_p11, sec2_p12 
} = translations[language];



    const container = document.createElement('div');
    const div = document.createElement('div');
    const secMe= document.createElement('section');
    const secMe_1= document.createElement('section');
    const secMe_2= document.createElement('section');
    const circle = document.createElement('div');
    circle.id = 'circle';
  
//secction 1    
    
    secMe_1.innerHTML = `
    <h1 style="text-align: center; font-size: 2em;">${sec1_h1}</h1>
    <div>
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">

<path d="M96 128a128 128 0 1 0 256 0A128 128 0 1 0 96 128zm94.5 200.2l18.6 31L175.8 483.1l-36-146.9c-2-8.1-9.8-13.4-17.9-11.3C51.9 342.4 0 405.8 0 481.3c0 17 13.8 30.7 30.7 30.7l131.7 0c0 0 0 0 .1 0l5.5 0 112 0 5.5 0c0 0 0 0 .1 0l131.7 0c17 0 30.7-13.8 30.7-30.7c0-75.5-51.9-138.9-121.9-156.4c-8.1-2-15.9 3.3-17.9 11.3l-36 146.9L238.9 359.2l18.6-31c6.4-10.7-1.3-24.2-13.7-24.2L224 304l-19.7 0c-12.4 0-20.1 13.6-13.7 24.2z"/>

</svg>
        
        <p>${sec1_p1}</p>
        
    </div>
    
    <div>
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
            <path d="M352 256c0 22.2-1.2 43.6-3.3 64l-185.3 0c-2.2-20.4-3.3-41.8-3.3-64s1.2-43.6 3.3-64l185.3 0c2.2 20.4 3.3 41.8 3.3 64zm28.8-64l123.1 0c5.3 20.5 8.1 41.9 8.1 64s-2.8 43.5-8.1 64l-123.1 0c2.1-20.6 3.2-42 3.2-64s-1.1-43.4-3.2-64zm112.6-32l-116.7 0c-10-63.9-29.8-117.4-55.3-151.6c78.3 20.7 142 77.5 171.9 151.6zm-149.1 0l-176.6 0c6.1-36.4 15.5-68.6 27-94.7c10.5-23.6 22.2-40.7 33.5-51.5C239.4 3.2 248.7 0 256 0s16.6 3.2 27.8 13.8c11.3 10.8 23 27.9 33.5 51.5c11.6 26 20.9 58.2 27 94.7zm-209 0L18.6 160C48.6 85.9 112.2 29.1 190.6 8.4C165.1 42.6 145.3 96.1 135.3 160zM8.1 192l123.1 0c-2.1 20.6-3.2 42-3.2 64s1.1 43.4 3.2 64L8.1 320C2.8 299.5 0 278.1 0 256s2.8-43.5 8.1-64zM194.7 446.6c-11.6-26-20.9-58.2-27-94.6l176.6 0c-6.1 36.4-15.5 68.6-27 94.6c-10.5 23.6-22.2 40.7-33.5 51.5C272.6 508.8 263.3 512 256 512s-16.6-3.2-27.8-13.8c-11.3-10.8-23-27.9-33.5-51.5zM135.3 352c10 63.9 29.8 117.4 55.3 151.6C112.2 482.9 48.6 426.1 18.6 352l116.7 0zm358.1 0c-30 74.1-93.6 130.9-171.9 151.6c25.5-34.2 45.2-87.7 55.3-151.6l116.7 0z"/>
     </svg>
     
        <p>${sec1_p2}</p>
    </div>
    
    
    <div class="resume">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 512">
<path d="M392.8 1.2c-17-4.9-34.7 5-39.6 22l-128 448c-4.9 17 5 34.7 22 39.6s34.7-5 39.6-22l128-448c4.9-17-5-34.7-22-39.6zm80.6 120.1c-12.5 12.5-12.5 32.8 0 45.3L562.7 256l-89.4 89.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0l112-112c12.5-12.5 12.5-32.8 0-45.3l-112-112c-12.5-12.5-32.8-12.5-45.3 0zm-306.7 0c-12.5-12.5-32.8-12.5-45.3 0l-112 112c-12.5 12.5-12.5 32.8 0 45.3l112 112c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L77.3 256l89.4-89.4c12.5-12.5 12.5-32.8 0-45.3z"/>
</svg>
        <h2>${sec1_h2}</h2>
        <p>${sec1_p3}</p>
    
    </div>    
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

//style section 1    
    
    secMe_1.style.display = 'flex';
    secMe_1.style.flexDirection = 'column';
    secMe_1.style.gap = '15px';
    secMe_1.style.paddingTop = '20px';
    secMe_1.style.padding = '10px';
    
    const divResume2 = document.createElement('div');
    divResume2.className = 'resume';
    divResume2.innerHTML = `
        <p>${sec1_p4}</p>
    `;   
    
    secMe_1.appendChild(circle);
    secMe_1.appendChild(divResume2);
    
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
    
    const classResume = secMe_1.querySelectorAll('.resume');
    classResume.forEach(div => div.style.background = '#001F3F');
    
//style circle    
    const styleCircle = secMe_1.querySelector('#circle');
    styleCircle.style.width = "300px";
    styleCircle.style.height = "300px";
    styleCircle.style.borderRadius = "50%";
    styleCircle.style.backgroundImage= "url('https://raw.githubusercontent.com/sebas350/personalweb/main/scripts/components/img/me.jpg')";
    styleCircle.style.backgroundSize = 'cover';
    styleCircle.style.backgroundPosition = 'center';    
    
const tecnos = document.createElement('div');
    
    tecnos.innerHTML = `
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512">
            <path fill="#74C0FC" d="M0 32l34.9 395.8L192 480l157.1-52.2L384 32H0zm313.1 80l-4.8 47.3L193 208.6l-.3 .1h111.5l-12.8 146.6-98.2 28.7-98.8-29.2-6.4-73.9h48.9l3.2 38.3 52.6 13.3 54.7-15.4 3.7-61.6-166.3-.5v-.1l-.2 .1-3.6-46.3L193.1 162l6.5-2.7H76.7L70.9 112h242.2z"/></svg>

<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512">
    <path fill="#ff8605" d="M0 32l34.9 395.8L191.5 480l157.6-52.2L384 32H0zm308.2 127.9H124.4l4.1 49.4h175.6l-13.6 148.4-97.9 27v.3h-1.1l-98.7-27.3-6-75.8h47.7L138 320l53.5 14.5 53.7-14.5 6-62.2H84.3L71.5 112.2h241.1l-4.4 47.7z"/></svg>
    
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
    <path fill="#FFD43B" d="M448 96c0-35.3-28.7-64-64-64H64C28.7 32 0 60.7 0 96V416c0 35.3 28.7 64 64 64H384c35.3 0 64-28.7 64-64V96zM180.9 444.9c-33.7 0-53.2-17.4-63.2-38.5L152 385.7c6.6 11.7 12.6 21.6 27.1 21.6c13.8 0 22.6-5.4 22.6-26.5V237.7h42.1V381.4c0 43.6-25.6 63.5-62.9 63.5zm85.8-43L301 382.1c9 14.7 20.8 25.6 41.5 25.6c17.4 0 28.6-8.7 28.6-20.8c0-14.4-11.4-19.5-30.7-28l-10.5-4.5c-30.4-12.9-50.5-29.2-50.5-63.5c0-31.6 24.1-55.6 61.6-55.6c26.8 0 46 9.3 59.8 33.7L368 290c-7.2-12.9-15-18-27.1-18c-12.3 0-20.1 7.8-20.1 18c0 12.6 7.8 17.7 25.9 25.6l10.5 4.5c35.8 15.3 55.9 31 55.9 66.2c0 37.8-29.8 58.6-69.7 58.6c-39.1 0-64.4-18.6-76.7-43z"/></svg>
    
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
    <path fill="#63E6BE" d="M356.9 64.3H280l-56 88.6-48-88.6H0L224 448 448 64.3h-91.1zm-301.2 32h53.8L224 294.5 338.4 96.3h53.8L224 384.5 55.7 96.3z"/></svg>
    
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 512">
    <path fill="#5fad47" d="M316.3 452c-2.1 0-4.2-.6-6.1-1.6L291 439c-2.9-1.6-1.5-2.2-.5-2.5 3.8-1.3 4.6-1.6 8.7-4 .4-.2 1-.1 1.4 .1l14.8 8.8c.5 .3 1.3 .3 1.8 0L375 408c.5-.3 .9-.9 .9-1.6v-66.7c0-.7-.3-1.3-.9-1.6l-57.8-33.3c-.5-.3-1.2-.3-1.8 0l-57.8 33.3c-.6 .3-.9 1-.9 1.6v66.7c0 .6 .4 1.2 .9 1.5l15.8 9.1c8.6 4.3 13.9-.8 13.9-5.8v-65.9c0-.9 .7-1.7 1.7-1.7h7.3c.9 0 1.7 .7 1.7 1.7v65.9c0 11.5-6.2 18-17.1 18-3.3 0-6 0-13.3-3.6l-15.2-8.7c-3.7-2.2-6.1-6.2-6.1-10.5v-66.7c0-4.3 2.3-8.4 6.1-10.5l57.8-33.4c3.7-2.1 8.5-2.1 12.1 0l57.8 33.4c3.7 2.2 6.1 6.2 6.1 10.5v66.7c0 4.3-2.3 8.4-6.1 10.5l-57.8 33.4c-1.7 1.1-3.8 1.7-6 1.7zm46.7-65.8c0-12.5-8.4-15.8-26.2-18.2-18-2.4-19.8-3.6-19.8-7.8 0-3.5 1.5-8.1 14.8-8.1 11.9 0 16.3 2.6 18.1 10.6 .2 .8 .8 1.3 1.6 1.3h7.5c.5 0 .9-.2 1.2-.5 .3-.4 .5-.8 .4-1.3-1.2-13.8-10.3-20.2-28.8-20.2-16.5 0-26.3 7-26.3 18.6 0 12.7 9.8 16.1 25.6 17.7 18.9 1.9 20.4 4.6 20.4 8.3 0 6.5-5.2 9.2-17.4 9.2-15.3 0-18.7-3.8-19.8-11.4-.1-.8-.8-1.4-1.7-1.4h-7.5c-.9 0-1.7 .7-1.7 1.7 0 9.7 5.3 21.3 30.6 21.3 18.5 0 29-7.2 29-19.8zm54.5-50.1c0 6.1-5 11.1-11.1 11.1s-11.1-5-11.1-11.1c0-6.3 5.2-11.1 11.1-11.1 6-.1 11.1 4.8 11.1 11.1zm-1.8 0c0-5.2-4.2-9.3-9.4-9.3-5.1 0-9.3 4.1-9.3 9.3 0 5.2 4.2 9.4 9.3 9.4 5.2-.1 9.4-4.3 9.4-9.4zm-4.5 6.2h-2.6c-.1-.6-.5-3.8-.5-3.9-.2-.7-.4-1.1-1.3-1.1h-2.2v5h-2.4v-12.5h4.3c1.5 0 4.4 0 4.4 3.3 0 2.3-1.5 2.8-2.4 3.1 1.7 .1 1.8 1.2 2.1 2.8 .1 1 .3 2.7 .6 3.3zm-2.8-8.8c0-1.7-1.2-1.7-1.8-1.7h-2v3.5h1.9c1.6 0 1.9-1.1 1.9-1.8zM137.3 191c0-2.7-1.4-5.1-3.7-6.4l-61.3-35.3c-1-.6-2.2-.9-3.4-1h-.6c-1.2 0-2.3 .4-3.4 1L3.7 184.6C1.4 185.9 0 188.4 0 191l.1 95c0 1.3 .7 2.5 1.8 3.2 1.1 .7 2.5 .7 3.7 0L42 268.3c2.3-1.4 3.7-3.8 3.7-6.4v-44.4c0-2.6 1.4-5.1 3.7-6.4l15.5-8.9c1.2-.7 2.4-1 3.7-1 1.3 0 2.6 .3 3.7 1l15.5 8.9c2.3 1.3 3.7 3.8 3.7 6.4v44.4c0 2.6 1.4 5.1 3.7 6.4l36.4 20.9c1.1 .7 2.6 .7 3.7 0 1.1-.6 1.8-1.9 1.8-3.2l.2-95zM472.5 87.3v176.4c0 2.6-1.4 5.1-3.7 6.4l-61.3 35.4c-2.3 1.3-5.1 1.3-7.4 0l-61.3-35.4c-2.3-1.3-3.7-3.8-3.7-6.4v-70.8c0-2.6 1.4-5.1 3.7-6.4l61.3-35.4c2.3-1.3 5.1-1.3 7.4 0l15.3 8.8c1.7 1 3.9-.3 3.9-2.2v-94c0-2.8 3-4.6 5.5-3.2l36.5 20.4c2.3 1.2 3.8 3.7 3.8 6.4zm-46 128.9c0-.7-.4-1.3-.9-1.6l-21-12.2c-.6-.3-1.3-.3-1.9 0l-21 12.2c-.6 .3-.9 .9-.9 1.6v24.3c0 .7 .4 1.3 .9 1.6l21 12.1c.6 .3 1.3 .3 1.8 0l21-12.1c.6-.3 .9-.9 .9-1.6v-24.3zm209.8-.7c2.3-1.3 3.7-3.8 3.7-6.4V192c0-2.6-1.4-5.1-3.7-6.4l-60.9-35.4c-2.3-1.3-5.1-1.3-7.4 0l-61.3 35.4c-2.3 1.3-3.7 3.8-3.7 6.4v70.8c0 2.7 1.4 5.1 3.7 6.4l60.9 34.7c2.2 1.3 5 1.3 7.3 0l36.8-20.5c2.5-1.4 2.5-5 0-6.4L550 241.6c-1.2-.7-1.9-1.9-1.9-3.2v-22.2c0-1.3 .7-2.5 1.9-3.2l19.2-11.1c1.1-.7 2.6-.7 3.7 0l19.2 11.1c1.1 .7 1.9 1.9 1.9 3.2v17.4c0 2.8 3.1 4.6 5.6 3.2l36.7-21.3zM559 219c-.4 .3-.7 .7-.7 1.2v13.6c0 .5 .3 1 .7 1.2l11.8 6.8c.4 .3 1 .3 1.4 0L584 235c.4-.3 .7-.7 .7-1.2v-13.6c0-.5-.3-1-.7-1.2l-11.8-6.8c-.4-.3-1-.3-1.4 0L559 219zm-254.2 43.5v-70.4c0-2.6-1.6-5.1-3.9-6.4l-61.1-35.2c-2.1-1.2-5-1.4-7.4 0l-61.1 35.2c-2.3 1.3-3.9 3.7-3.9 6.4v70.4c0 2.8 1.9 5.2 4 6.4l61.2 35.2c2.4 1.4 5.2 1.3 7.4 0l61-35.2c1.8-1 3.1-2.7 3.6-4.7 .1-.5 .2-1.1 .2-1.7zm-74.3-124.9l-.8 .5h1.1l-.3-.5zm76.2 130.2l-.4-.7v.9l.4-.2z"/></svg>
    
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
    <path fill="#74C0FC" d="M418.2 177.2c-5.4-1.8-10.8-3.5-16.2-5.1 .9-3.7 1.7-7.4 2.5-11.1 12.3-59.6 4.2-107.5-23.1-123.3-26.3-15.1-69.2 .6-112.6 38.4-4.3 3.7-8.5 7.6-12.5 11.5-2.7-2.6-5.5-5.2-8.3-7.7-45.5-40.4-91.1-57.4-118.4-41.5-26.2 15.2-34 60.3-23 116.7 1.1 5.6 2.3 11.1 3.7 16.7-6.4 1.8-12.7 3.8-18.6 5.9C38.3 196.2 0 225.4 0 255.6c0 31.2 40.8 62.5 96.3 81.5 4.5 1.5 9 3 13.6 4.3-1.5 6-2.8 11.9-4 18-10.5 55.5-2.3 99.5 23.9 114.6 27 15.6 72.4-.4 116.6-39.1 3.5-3.1 7-6.3 10.5-9.7 4.4 4.3 9 8.4 13.6 12.4 42.8 36.8 85.1 51.7 111.2 36.6 27-15.6 35.8-62.9 24.4-120.5-.9-4.4-1.9-8.9-3-13.5 3.2-.9 6.3-1.9 9.4-2.9 57.7-19.1 99.5-50 99.5-81.7 0-30.3-39.4-59.7-93.8-78.4zM282.9 92.3c37.2-32.4 71.9-45.1 87.7-36 16.9 9.7 23.4 48.9 12.8 100.4-.7 3.4-1.4 6.7-2.3 10-22.2-5-44.7-8.6-67.3-10.6-13-18.6-27.2-36.4-42.6-53.1 3.9-3.7 7.7-7.2 11.7-10.7zM167.2 307.5c5.1 8.7 10.3 17.4 15.8 25.9-15.6-1.7-31.1-4.2-46.4-7.5 4.4-14.4 9.9-29.3 16.3-44.5 4.6 8.8 9.3 17.5 14.3 26.1zm-30.3-120.3c14.4-3.2 29.7-5.8 45.6-7.8-5.3 8.3-10.5 16.8-15.4 25.4-4.9 8.5-9.7 17.2-14.2 26-6.3-14.9-11.6-29.5-16-43.6zm27.4 68.9c6.6-13.8 13.8-27.3 21.4-40.6s15.8-26.2 24.4-38.9c15-1.1 30.3-1.7 45.9-1.7s31 .6 45.9 1.7c8.5 12.6 16.6 25.5 24.3 38.7s14.9 26.7 21.7 40.4c-6.7 13.8-13.9 27.4-21.6 40.8-7.6 13.3-15.7 26.2-24.2 39-14.9 1.1-30.4 1.6-46.1 1.6s-30.9-.5-45.6-1.4c-8.7-12.7-16.9-25.7-24.6-39s-14.8-26.8-21.5-40.6zm180.6 51.2c5.1-8.8 9.9-17.7 14.6-26.7 6.4 14.5 12 29.2 16.9 44.3-15.5 3.5-31.2 6.2-47 8 5.4-8.4 10.5-17 15.5-25.6zm14.4-76.5c-4.7-8.8-9.5-17.6-14.5-26.2-4.9-8.5-10-16.9-15.3-25.2 16.1 2 31.5 4.7 45.9 8-4.6 14.8-10 29.2-16.1 43.4zM256.2 118.3c10.5 11.4 20.4 23.4 29.6 35.8-19.8-.9-39.7-.9-59.5 0 9.8-12.9 19.9-24.9 29.9-35.8zM140.2 57c16.8-9.8 54.1 4.2 93.4 39 2.5 2.2 5 4.6 7.6 7-15.5 16.7-29.8 34.5-42.9 53.1-22.6 2-45 5.5-67.2 10.4-1.3-5.1-2.4-10.3-3.5-15.5-9.4-48.4-3.2-84.9 12.6-94zm-24.5 263.6c-4.2-1.2-8.3-2.5-12.4-3.9-21.3-6.7-45.5-17.3-63-31.2-10.1-7-16.9-17.8-18.8-29.9 0-18.3 31.6-41.7 77.2-57.6 5.7-2 11.5-3.8 17.3-5.5 6.8 21.7 15 43 24.5 63.6-9.6 20.9-17.9 42.5-24.8 64.5zm116.6 98c-16.5 15.1-35.6 27.1-56.4 35.3-11.1 5.3-23.9 5.8-35.3 1.3-15.9-9.2-22.5-44.5-13.5-92 1.1-5.6 2.3-11.2 3.7-16.7 22.4 4.8 45 8.1 67.9 9.8 13.2 18.7 27.7 36.6 43.2 53.4-3.2 3.1-6.4 6.1-9.6 8.9zm24.5-24.3c-10.2-11-20.4-23.2-30.3-36.3 9.6 .4 19.5 .6 29.5 .6 10.3 0 20.4-.2 30.4-.7-9.2 12.7-19.1 24.8-29.6 36.4zm130.7 30c-.9 12.2-6.9 23.6-16.5 31.3-15.9 9.2-49.8-2.8-86.4-34.2-4.2-3.6-8.4-7.5-12.7-11.5 15.3-16.9 29.4-34.8 42.2-53.6 22.9-1.9 45.7-5.4 68.2-10.5 1 4.1 1.9 8.2 2.7 12.2 4.9 21.6 5.7 44.1 2.5 66.3zm18.2-107.5c-2.8 .9-5.6 1.8-8.5 2.6-7-21.8-15.6-43.1-25.5-63.8 9.6-20.4 17.7-41.4 24.5-62.9 5.2 1.5 10.2 3.1 15 4.7 46.6 16 79.3 39.8 79.3 58 0 19.6-34.9 44.9-84.8 61.4zm-149.7-15c25.3 0 45.8-20.5 45.8-45.8s-20.5-45.8-45.8-45.8c-25.3 0-45.8 20.5-45.8 45.8s20.5 45.8 45.8 45.8z"/></svg>

<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
    <path fill="#21a1de" d="M439.8 200.5c-7.7-30.9-22.3-54.2-53.4-54.2h-40.1v47.4c0 36.8-31.2 67.8-66.8 67.8H172.7c-29.2 0-53.4 25-53.4 54.3v101.8c0 29 25.2 46 53.4 54.3 33.8 9.9 66.3 11.7 106.8 0 26.9-7.8 53.4-23.5 53.4-54.3v-40.7H226.2v-13.6h160.2c31.1 0 42.6-21.7 53.4-54.2 11.2-33.5 10.7-65.7 0-108.6zM286.2 404c11.1 0 20.1 9.1 20.1 20.3 0 11.3-9 20.4-20.1 20.4-11 0-20.1-9.2-20.1-20.4 .1-11.3 9.1-20.3 20.1-20.3zM167.8 248.1h106.8c29.7 0 53.4-24.5 53.4-54.3V91.9c0-29-24.4-50.7-53.4-55.6-35.8-5.9-74.7-5.6-106.8 .1-45.2 8-53.4 24.7-53.4 55.6v40.7h106.9v13.6h-147c-31.1 0-58.3 18.7-66.8 54.2-9.8 40.7-10.2 66.1 0 108.6 7.6 31.6 25.7 54.2 56.8 54.2H101v-48.8c0-35.3 30.5-66.4 66.8-66.4zm-6.7-142.6c-11.1 0-20.1-9.1-20.1-20.3 .1-11.3 9-20.4 20.1-20.4 11 0 20.1 9.2 20.1 20.4s-9 20.3-20.1 20.3z"/></svg>
    
    <button>go</button>      
`;

//const btnResume = tecnos.querySelector('button');
    //btnResume.onclick = () => {
        //updateComponent(Resume);
   // };

    divResume2.appendChild(tecnos);

//svgs    
    const svgs = secMe_1.querySelectorAll('svg');
    svgs.forEach(svg => {
        svg.style.fill= 'white';
        svg.style.width = '30px';
        svg.style.height = '30px';
    })    
    
    secMe_2.style.display = 'flex';
    secMe_2.style.flexDirection = 'column';
    secMe_2.style.gap = '15px';
    
    secMe.appendChild(secMe_1);
    //secMe.appendChild(circle);
    secMe.appendChild(secMe_2);

    secMe.style.display = 'flex';
    secMe.style.flexDirection = 'column';
    secMe.style.gap= '20px';
    
    
//observer    
    
    //observer p
    
    const entriesp = secMe.querySelectorAll('p');

entriesp.forEach(p => {

p.style.opacity = '0';
p.style.transform = 'translateY(50px)';

p.style.transition = 'opacity 1500ms, transform 1500ms';});


const effect = entries => {
  entries.forEach(entry => {
      if (entry.isIntersecting) {
          entry.target.style.opacity ='1';
          entry.target.style.transform = 'translateY(0px)';
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
