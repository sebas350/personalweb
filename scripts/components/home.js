//import { document } from '../dom.js';
import {Resume} from './resume.js';
import {Portfolio} from './portfolio.js';
import {Certificates} from './certificates.js';
import {styleSvgs} from './utils.js';
import {svgsTecno} from './svgs.js';

export function Home(language='es') {

    const translations = {
    en: {
        sec1_h1: `Professional Page`,
        sec1_h2_:`Welcome to my`,
        sec1_p1: `Hello, I am Sebastián and I am dedicated to the development of web applications. With 3 years of experience, I am capable of creating websites using the latest in design, taking into account the aesthetics and elegance that each project requires.`,
        sec1_p2: `On this site, you will find information about my professional career, my technical skills, and a sample of the projects I have worked on and are currently working on.`,
        sec1_h2: `Who am I`,
        sec1_p3: `I am a developer who is always looking to focus on code quality, best development practices and the latest in technologies.`,
        sec1_p4: `I have experience working with a variety of technologies on both the frontend and backend.`,
        btnResumeLang:`Get to know my CV`,
        sec2_h2: `What can I do`,
        sec2_p1: `From building intuitive user interfaces to developing complex backend systems, I have the ability to handle all aspects of web application development. My skills include:`,
        sec2_p2: `HTML, CSS, JavaScript, React, Angular`,
        sec2_p3: `Node.js, Express, Django, Ruby on Rails`,
        sec2_p4: `MySQL, PostgreSQL, MongoDB`,
        sec2_p5: `Git, Docker, Jenkins, AWS`,
        btnPortLang:'Get to know my works and projects',
        sec2_h2_2: `ACADEMIC DISTINCTIONS`,
        sec2_p6: `The most notable achievements obtained during my academic and professional training reflect my commitment to continuous learning and excellence in specific areas of knowledge.`,
        sec2_p7: `WEB DEVELOPER`,
        sec2_p8:`FullStack`,
        btnCertiLang:`LEARN ABOUT OTHER CERTIFICATES`,
        sec2_p9: `PROGRAMMER`,
        sec2_p10: `Advanced in Python`,
        sec2_p11: `PROGRAMMER`,
        sec2_p12: `Object Oriented and Visualization with Python`,
        btnTopLang: 'Back to top',
    },
    es: {
        sec1_h1:`PÁGINA PROFESIONAL`,
        sec1_h2_:`Bienvenidos a mi`,
        sec1_p1: `Hola soy Sebastián y me dedico al desarrollo de aplicaciones web, con una experiencia de 3 años soy capaza de crear webs usando lo ultmo en diseño teniendo encuenta la estetica y elegancia que exige cada proyecto.`,
        sec1_p2: `En este sitio, encontrarás información sobre mi trayectoria profesional, mis habilidades técnicas, y una muestra de los proyectos en los que he trabajado y trabajo actuamente.`,
        sec1_h2: `Quien Soy`,
        sec1_p3: `Soy un desarrollador que siempre esta en buscando enforcarse en la calidad del código, las mejores prácticas de desarrollo y lo ultimo en tecnologias.`,
        sec1_p4:`Tengo experiencia trabajando con una variedad de tecnologías tanto en el frontend como en el backend.`,
        btnResumeLang:`CONOCE MI CURRICULUM`,
        sec2_h2: `Que Puedo Hacer`,
        sec2_p1: `Desde construir interfaces de usuario intuitivas hasta desarrollar complejos sistemas backend, tengo la capacidad de manejar todos los aspectos del desarrollo de aplicaciones web. Mis habilidades incluyen:`,
        sec2_p2: `HTML, CSS, JavaScript, React, Angular`,
        sec2_p3: `Node.js, Express, Django, Ruby on Rails`,
        sec2_p4: `MySQL, PostgreSQL, MongoDB`,
        sec2_p5: `Git, Docker, Jenkins, AWS`,
        btnPortLang:'CONOCE MIS TRABAJOS Y PROYECTOS',
        sec2_h2_2: `DISTINCIONES ACADEMICAS`,
        sec2_p6: `Los logros más destacados obtenidos durante mi formación académica y profesional, refleja mi compromiso con el aprendizaje continuo y la excelencia en áreas específicas de conocimiento.`,
        sec2_p7: `DESARROLLADOR WEB`,
        sec2_p8:`FullStack`,
        btnCertiLang:`CONOCE OTROS CERTIFICADOS`,
        sec2_p9: `PROGRAMADOR`,
        sec2_p10: `Avanzado en Python`,
        sec2_p11: `PROGRAMADOR`,
        sec2_p12: `Orientada a Objetos y Visualizacion con Python`,
        btnTopLang: 'Volver arriba',
    },
};

// Traducciones según el idioma actual
const { 
    sec1_h1, sec1_h2_, sec1_p1, sec1_p2, sec1_h2, sec1_p3, sec1_p4, btnResumeLang, sec2_h2, sec2_p1, sec2_p2, sec2_p3, sec2_p4, sec2_p5, btnPortLang, sec2_h2_2, sec2_p6, sec2_p7, sec2_p8, btnCertiLang, sec2_p9,sec2_p10,sec2_p11, sec2_p12, btnTopLang 
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
    
    <section>
        <h2 class="light" style="text-align: center; font-size: 1em;">${sec1_h2_}</h2>
    <h1 class="light" style="text-align: center; font-size: 2em;">${sec1_h1}</h1>
    
    </section>
    
    <div>
        <svg class="svg" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">

<path d="M96 128a128 128 0 1 0 256 0A128 128 0 1 0 96 128zm94.5 200.2l18.6 31L175.8 483.1l-36-146.9c-2-8.1-9.8-13.4-17.9-11.3C51.9 342.4 0 405.8 0 481.3c0 17 13.8 30.7 30.7 30.7l131.7 0c0 0 0 0 .1 0l5.5 0 112 0 5.5 0c0 0 0 0 .1 0l131.7 0c17 0 30.7-13.8 30.7-30.7c0-75.5-51.9-138.9-121.9-156.4c-8.1-2-15.9 3.3-17.9 11.3l-36 146.9L238.9 359.2l18.6-31c6.4-10.7-1.3-24.2-13.7-24.2L224 304l-19.7 0c-12.4 0-20.1 13.6-13.7 24.2z"/>

</svg>
        
        <p>${sec1_p1}</p>
        
    </div>
    
    <div>
       
        <svg class="svg" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
            <path d="M352 256c0 22.2-1.2 43.6-3.3 64l-185.3 0c-2.2-20.4-3.3-41.8-3.3-64s1.2-43.6 3.3-64l185.3 0c2.2 20.4 3.3 41.8 3.3 64zm28.8-64l123.1 0c5.3 20.5 8.1 41.9 8.1 64s-2.8 43.5-8.1 64l-123.1 0c2.1-20.6 3.2-42 3.2-64s-1.1-43.4-3.2-64zm112.6-32l-116.7 0c-10-63.9-29.8-117.4-55.3-151.6c78.3 20.7 142 77.5 171.9 151.6zm-149.1 0l-176.6 0c6.1-36.4 15.5-68.6 27-94.7c10.5-23.6 22.2-40.7 33.5-51.5C239.4 3.2 248.7 0 256 0s16.6 3.2 27.8 13.8c11.3 10.8 23 27.9 33.5 51.5c11.6 26 20.9 58.2 27 94.7zm-209 0L18.6 160C48.6 85.9 112.2 29.1 190.6 8.4C165.1 42.6 145.3 96.1 135.3 160zM8.1 192l123.1 0c-2.1 20.6-3.2 42-3.2 64s1.1 43.4 3.2 64L8.1 320C2.8 299.5 0 278.1 0 256s2.8-43.5 8.1-64zM194.7 446.6c-11.6-26-20.9-58.2-27-94.6l176.6 0c-6.1 36.4-15.5 68.6-27 94.6c-10.5 23.6-22.2 40.7-33.5 51.5C272.6 508.8 263.3 512 256 512s-16.6-3.2-27.8-13.8c-11.3-10.8-23-27.9-33.5-51.5zM135.3 352c10 63.9 29.8 117.4 55.3 151.6C112.2 482.9 48.6 426.1 18.6 352l116.7 0zm358.1 0c-30 74.1-93.6 130.9-171.9 151.6c25.5-34.2 45.2-87.7 55.3-151.6l116.7 0z"/>
     </svg>
     
        <p>${sec1_p2}</p>
    </div>
    
    
    <div class="resume">
          
          <section class="div-1">
              <svg class="svg-absolute" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
                  <path fill="#2C2C2C" d="M224 16c-6.7 0-10.8-2.8-15.5-6.1C201.9 5.4 194 0 176 0c-30.5 0-52 43.7-66 89.4C62.7 98.1 32 112.2 32 128c0 14.3 25 27.1 64.6 35.9c-.4 4-.6 8-.6 12.1c0 17 3.3 33.2 9.3 48l-59.9 0C38 224 32 230 32 237.4c0 1.7 .3 3.4 1 5l38.8 96.9C28.2 371.8 0 423.8 0 482.3C0 498.7 13.3 512 29.7 512l388.6 0c16.4 0 29.7-13.3 29.7-29.7c0-58.5-28.2-110.4-71.7-143L415 242.4c.6-1.6 1-3.3 1-5c0-7.4-6-13.4-13.4-13.4l-59.9 0c6-14.8 9.3-31 9.3-48c0-4.1-.2-8.1-.6-12.1C391 155.1 416 142.3 416 128c0-15.8-30.7-29.9-78-38.6C324 43.7 302.5 0 272 0c-18 0-25.9 5.4-32.5 9.9c-4.8 3.3-8.8 6.1-15.5 6.1zm56 208l-12.4 0c-16.5 0-31.1-10.6-36.3-26.2c-2.3-7-12.2-7-14.5 0c-5.2 15.6-19.9 26.2-36.3 26.2L168 224c-22.1 0-40-17.9-40-40l0-14.4c28.2 4.1 61 6.4 96 6.4s67.8-2.3 96-6.4l0 14.4c0 22.1-17.9 40-40 40zm-88 96l16 32L176 480 128 288l64 32zm128-32L272 480 240 352l16-32 64-32z"/></svg>
            <h2 class="light relative">${sec1_h2}</h2>
            <p class="relative">${sec1_p3}</p>
              
          </section>            
     
    </div>    
`;



secMe_2.innerHTML = `
    
    <div id="port">
        
        <section class="div-1">
            
            <svg class="svg-absolute" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 512">
            <path d="M192 96a48 48 0 1 0 0-96 48 48 0 1 0 0 96zm-8 384l0-128 16 0 0 128c0 17.7 14.3 32 32 32s32-14.3 32-32l0-288 56 0 64 0 16 0c17.7 0 32-14.3 32-32s-14.3-32-32-32l-16 0 0-64 192 0 0 192-192 0 0-32-64 0 0 48c0 26.5 21.5 48 48 48l224 0c26.5 0 48-21.5 48-48l0-224c0-26.5-21.5-48-48-48L368 0c-26.5 0-48 21.5-48 48l0 80-76.9 0-65.9 0c-33.7 0-64.9 17.7-82.3 46.6l-58.3 97c-9.1 15.1-4.2 34.8 10.9 43.9s34.8 4.2 43.9-10.9L120 256.9 120 480c0 17.7 14.3 32 32 32s32-14.3 32-32z"/></svg>
           <h2 class="light relative diagonal" >${sec2_h2}</h2>
           <p class="relative">${sec2_p1}</p>
            
        </section>
            
    <svg class="svg" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512">
        <path d="M64 0C28.7 0 0 28.7 0 64L0 352c0 35.3 28.7 64 64 64l176 0-10.7 32L160 448c-17.7 0-32 14.3-32 32s14.3 32 32 32l256 0c17.7 0 32-14.3 32-32s-14.3-32-32-32l-69.3 0L336 416l176 0c35.3 0 64-28.7 64-64l0-288c0-35.3-28.7-64-64-64L64 0zM512 64l0 224L64 288 64 64l448 0z"/></svg>
    
        <p><strong>Frontend:</strong> ${sec2_p2}</p>
        
        <svg class="svg" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 512">
            <path d="M64 96c0-35.3 28.7-64 64-64l384 0c35.3 0 64 28.7 64 64l0 256-64 0 0-256L128 96l0 256-64 0L64 96zM0 403.2C0 392.6 8.6 384 19.2 384l601.6 0c10.6 0 19.2 8.6 19.2 19.2c0 42.4-34.4 76.8-76.8 76.8L76.8 480C34.4 480 0 445.6 0 403.2zM281 209l-31 31 31 31c9.4 9.4 9.4 24.6 0 33.9s-24.6 9.4-33.9 0l-48-48c-9.4-9.4-9.4-24.6 0-33.9l48-48c9.4-9.4 24.6-9.4 33.9 0s9.4 24.6 0 33.9zM393 175l48 48c9.4 9.4 9.4 24.6 0 33.9l-48 48c-9.4 9.4-24.6 9.4-33.9 0s-9.4-24.6 0-33.9l31-31-31-31c-9.4-9.4-9.4-24.6 0-33.9s24.6-9.4 33.9 0z"/></svg>
        <p><strong>Backend:</strong> ${sec2_p3}</p>
        
        <svg class="svg" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
            <path d="M64 32C28.7 32 0 60.7 0 96l0 64c0 35.3 28.7 64 64 64l384 0c35.3 0 64-28.7 64-64l0-64c0-35.3-28.7-64-64-64L64 32zm280 72a24 24 0 1 1 0 48 24 24 0 1 1 0-48zm48 24a24 24 0 1 1 48 0 24 24 0 1 1 -48 0zM64 288c-35.3 0-64 28.7-64 64l0 64c0 35.3 28.7 64 64 64l384 0c35.3 0 64-28.7 64-64l0-64c0-35.3-28.7-64-64-64L64 288zm280 72a24 24 0 1 1 0 48 24 24 0 1 1 0-48zm56 24a24 24 0 1 1 48 0 24 24 0 1 1 -48 0z"/></svg>
        
        <p><strong>Bases de datos:</strong> ${sec2_p4}</p>
        
        <svg class="svg" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
            <path d="M78.6 5C69.1-2.4 55.6-1.5 47 7L7 47c-8.5 8.5-9.4 22-2.1 31.6l80 104c4.5 5.9 11.6 9.4 19 9.4l54.1 0 109 109c-14.7 29-10 65.4 14.3 89.6l112 112c12.5 12.5 32.8 12.5 45.3 0l64-64c12.5-12.5 12.5-32.8 0-45.3l-112-112c-24.2-24.2-60.6-29-89.6-14.3l-109-109 0-54.1c0-7.5-3.5-14.5-9.4-19L78.6 5zM19.9 396.1C7.2 408.8 0 426.1 0 444.1C0 481.6 30.4 512 67.9 512c18 0 35.3-7.2 48-19.9L233.7 374.3c-7.8-20.9-9-43.6-3.6-65.1l-61.7-61.7L19.9 396.1zM512 144c0-10.5-1.1-20.7-3.2-30.5c-2.4-11.2-16.1-14.1-24.2-6l-63.9 63.9c-3 3-7.1 4.7-11.3 4.7L352 176c-8.8 0-16-7.2-16-16l0-57.4c0-4.2 1.7-8.3 4.7-11.3l63.9-63.9c8.1-8.1 5.2-21.8-6-24.2C388.7 1.1 378.5 0 368 0C288.5 0 224 64.5 224 144l0 .8 85.3 85.3c36-9.1 75.8 .5 104 28.7L429 274.5c49-23 83-72.8 83-130.5zM56 432a24 24 0 1 1 48 0 24 24 0 1 1 -48 0z"/></svg>
        
        <p><strong>Herramientas y DevOps:</strong> ${sec2_p5}</p>
    </div>
    
   <div id="certifi">
        
     <section class="div-1">
         
         <svg class="svg-absolute" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
             <path fill="#FFFDD0" d="M219.3 .5c3.1-.6 6.3-.6 9.4 0l200 40C439.9 42.7 448 52.6 448 64s-8.1 21.3-19.3 23.5L352 102.9l0 57.1c0 70.7-57.3 128-128 128s-128-57.3-128-128l0-57.1L48 93.3l0 65.1 15.7 78.4c.9 4.7-.3 9.6-3.3 13.3s-7.6 5.9-12.4 5.9l-32 0c-4.8 0-9.3-2.1-12.4-5.9s-4.3-8.6-3.3-13.3L16 158.4l0-71.8C6.5 83.3 0 74.3 0 64C0 52.6 8.1 42.7 19.3 40.5l200-40zM111.9 327.7c10.5-3.4 21.8 .4 29.4 8.5l71 75.5c6.3 6.7 17 6.7 23.3 0l71-75.5c7.6-8.1 18.9-11.9 29.4-8.5C401 348.6 448 409.4 448 481.3c0 17-13.8 30.7-30.7 30.7L30.7 512C13.8 512 0 498.2 0 481.3c0-71.9 47-132.7 111.9-153.6z"/></svg>
            
       <h2 class="light relative" style="color:black;" >${sec2_h2_2}</h2>
       <p class="relative" style="color:black;"> ${sec2_p6} </p>
    
     </section>
     
     <svg class="svg" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512">
         <path fill="#FFFDD0" d="M173.8 5.5c11-7.3 25.4-7.3 36.4 0L228 17.2c6 3.9 13 5.8 20.1 5.4l21.3-1.3c13.2-.8 25.6 6.4 31.5 18.2l9.6 19.1c3.2 6.4 8.4 11.5 14.7 14.7L344.5 83c11.8 5.9 19 18.3 18.2 31.5l-1.3 21.3c-.4 7.1 1.5 14.2 5.4 20.1l11.8 17.8c7.3 11 7.3 25.4 0 36.4L366.8 228c-3.9 6-5.8 13-5.4 20.1l1.3 21.3c.8 13.2-6.4 25.6-18.2 31.5l-19.1 9.6c-6.4 3.2-11.5 8.4-14.7 14.7L301 344.5c-5.9 11.8-18.3 19-31.5 18.2l-21.3-1.3c-7.1-.4-14.2 1.5-20.1 5.4l-17.8 11.8c-11 7.3-25.4 7.3-36.4 0L156 366.8c-6-3.9-13-5.8-20.1-5.4l-21.3 1.3c-13.2 .8-25.6-6.4-31.5-18.2l-9.6-19.1c-3.2-6.4-8.4-11.5-14.7-14.7L39.5 301c-11.8-5.9-19-18.3-18.2-31.5l1.3-21.3c.4-7.1-1.5-14.2-5.4-20.1L5.5 210.2c-7.3-11-7.3-25.4 0-36.4L17.2 156c3.9-6 5.8-13 5.4-20.1l-1.3-21.3c-.8-13.2 6.4-25.6 18.2-31.5l19.1-9.6C65 70.2 70.2 65 73.4 58.6L83 39.5c5.9-11.8 18.3-19 31.5-18.2l21.3 1.3c7.1 .4 14.2-1.5 20.1-5.4L173.8 5.5zM272 192a80 80 0 1 0 -160 0 80 80 0 1 0 160 0zM1.3 441.8L44.4 339.3c.2 .1 .3 .2 .4 .4l9.6 19.1c11.7 23.2 36 37.3 62 35.8l21.3-1.3c.2 0 .5 0 .7 .2l17.8 11.8c5.1 3.3 10.5 5.9 16.1 7.7l-37.6 89.3c-2.3 5.5-7.4 9.2-13.3 9.7s-11.6-2.2-14.8-7.2L74.4 455.5l-56.1 8.3c-5.7 .8-11.4-1.5-15-6s-4.3-10.7-2.1-16zm248 60.4L211.7 413c5.6-1.8 11-4.3 16.1-7.7l17.8-11.8c.2-.1 .4-.2 .7-.2l21.3 1.3c26 1.5 50.3-12.6 62-35.8l9.6-19.1c.1-.2 .2-.3 .4-.4l43.2 102.5c2.2 5.3 1.4 11.4-2.1 16s-9.3 6.9-15 6l-56.1-8.3-32.2 49.2c-3.2 5-8.9 7.7-14.8 7.2s-11-4.3-13.3-9.7z"/></svg>
     <p style="color: black"><strong>${sec2_p7}: </strong>${sec2_p8}</p>
     
<svg class="svg" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512">
         <path fill="#FFFDD0" d="M173.8 5.5c11-7.3 25.4-7.3 36.4 0L228 17.2c6 3.9 13 5.8 20.1 5.4l21.3-1.3c13.2-.8 25.6 6.4 31.5 18.2l9.6 19.1c3.2 6.4 8.4 11.5 14.7 14.7L344.5 83c11.8 5.9 19 18.3 18.2 31.5l-1.3 21.3c-.4 7.1 1.5 14.2 5.4 20.1l11.8 17.8c7.3 11 7.3 25.4 0 36.4L366.8 228c-3.9 6-5.8 13-5.4 20.1l1.3 21.3c.8 13.2-6.4 25.6-18.2 31.5l-19.1 9.6c-6.4 3.2-11.5 8.4-14.7 14.7L301 344.5c-5.9 11.8-18.3 19-31.5 18.2l-21.3-1.3c-7.1-.4-14.2 1.5-20.1 5.4l-17.8 11.8c-11 7.3-25.4 7.3-36.4 0L156 366.8c-6-3.9-13-5.8-20.1-5.4l-21.3 1.3c-13.2 .8-25.6-6.4-31.5-18.2l-9.6-19.1c-3.2-6.4-8.4-11.5-14.7-14.7L39.5 301c-11.8-5.9-19-18.3-18.2-31.5l1.3-21.3c.4-7.1-1.5-14.2-5.4-20.1L5.5 210.2c-7.3-11-7.3-25.4 0-36.4L17.2 156c3.9-6 5.8-13 5.4-20.1l-1.3-21.3c-.8-13.2 6.4-25.6 18.2-31.5l19.1-9.6C65 70.2 70.2 65 73.4 58.6L83 39.5c5.9-11.8 18.3-19 31.5-18.2l21.3 1.3c7.1 .4 14.2-1.5 20.1-5.4L173.8 5.5zM272 192a80 80 0 1 0 -160 0 80 80 0 1 0 160 0zM1.3 441.8L44.4 339.3c.2 .1 .3 .2 .4 .4l9.6 19.1c11.7 23.2 36 37.3 62 35.8l21.3-1.3c.2 0 .5 0 .7 .2l17.8 11.8c5.1 3.3 10.5 5.9 16.1 7.7l-37.6 89.3c-2.3 5.5-7.4 9.2-13.3 9.7s-11.6-2.2-14.8-7.2L74.4 455.5l-56.1 8.3c-5.7 .8-11.4-1.5-15-6s-4.3-10.7-2.1-16zm248 60.4L211.7 413c5.6-1.8 11-4.3 16.1-7.7l17.8-11.8c.2-.1 .4-.2 .7-.2l21.3 1.3c26 1.5 50.3-12.6 62-35.8l9.6-19.1c.1-.2 .2-.3 .4-.4l43.2 102.5c2.2 5.3 1.4 11.4-2.1 16s-9.3 6.9-15 6l-56.1-8.3-32.2 49.2c-3.2 5-8.9 7.7-14.8 7.2s-11-4.3-13.3-9.7z"/></svg>     
     
     <p style="color: black"><strong>${sec2_p9}:</strong> ${sec2_p10}</p>

<svg class="svg" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512">
         <path fill="#FFFDD0" d="M173.8 5.5c11-7.3 25.4-7.3 36.4 0L228 17.2c6 3.9 13 5.8 20.1 5.4l21.3-1.3c13.2-.8 25.6 6.4 31.5 18.2l9.6 19.1c3.2 6.4 8.4 11.5 14.7 14.7L344.5 83c11.8 5.9 19 18.3 18.2 31.5l-1.3 21.3c-.4 7.1 1.5 14.2 5.4 20.1l11.8 17.8c7.3 11 7.3 25.4 0 36.4L366.8 228c-3.9 6-5.8 13-5.4 20.1l1.3 21.3c.8 13.2-6.4 25.6-18.2 31.5l-19.1 9.6c-6.4 3.2-11.5 8.4-14.7 14.7L301 344.5c-5.9 11.8-18.3 19-31.5 18.2l-21.3-1.3c-7.1-.4-14.2 1.5-20.1 5.4l-17.8 11.8c-11 7.3-25.4 7.3-36.4 0L156 366.8c-6-3.9-13-5.8-20.1-5.4l-21.3 1.3c-13.2 .8-25.6-6.4-31.5-18.2l-9.6-19.1c-3.2-6.4-8.4-11.5-14.7-14.7L39.5 301c-11.8-5.9-19-18.3-18.2-31.5l1.3-21.3c.4-7.1-1.5-14.2-5.4-20.1L5.5 210.2c-7.3-11-7.3-25.4 0-36.4L17.2 156c3.9-6 5.8-13 5.4-20.1l-1.3-21.3c-.8-13.2 6.4-25.6 18.2-31.5l19.1-9.6C65 70.2 70.2 65 73.4 58.6L83 39.5c5.9-11.8 18.3-19 31.5-18.2l21.3 1.3c7.1 .4 14.2-1.5 20.1-5.4L173.8 5.5zM272 192a80 80 0 1 0 -160 0 80 80 0 1 0 160 0zM1.3 441.8L44.4 339.3c.2 .1 .3 .2 .4 .4l9.6 19.1c11.7 23.2 36 37.3 62 35.8l21.3-1.3c.2 0 .5 0 .7 .2l17.8 11.8c5.1 3.3 10.5 5.9 16.1 7.7l-37.6 89.3c-2.3 5.5-7.4 9.2-13.3 9.7s-11.6-2.2-14.8-7.2L74.4 455.5l-56.1 8.3c-5.7 .8-11.4-1.5-15-6s-4.3-10.7-2.1-16zm248 60.4L211.7 413c5.6-1.8 11-4.3 16.1-7.7l17.8-11.8c.2-.1 .4-.2 .7-.2l21.3 1.3c26 1.5 50.3-12.6 62-35.8l9.6-19.1c.1-.2 .2-.3 .4-.4l43.2 102.5c2.2 5.3 1.4 11.4-2.1 16s-9.3 6.9-15 6l-56.1-8.3-32.2 49.2c-3.2 5-8.9 7.7-14.8 7.2s-11-4.3-13.3-9.7z"/></svg>
         <p style="color: black"><strong>${sec2_p11}: </strong>${sec2_p12}</p>         
   
   </div>
               
`;

//style section 1    
    
    secMe_1.style.display = 'flex';
    secMe_1.style.flexDirection = 'column';
    secMe_1.style.gap = '15px';
    secMe_1.style.paddingTop = '20px';
    //secMe_1.style.padding = '10px';
    
    
//segundo div resumen    
    
    const divResume2 = document.createElement('div');
    divResume2.className = 'resume';
    divResume2.innerHTML = `
        <svg class="svg" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512">
            <path fill="white" d="M320 464c8.8 0 16-7.2 16-16l0-288-80 0c-17.7 0-32-14.3-32-32l0-80L64 48c-8.8 0-16 7.2-16 16l0 384c0 8.8 7.2 16 16 16l256 0zM0 64C0 28.7 28.7 0 64 0L229.5 0c17 0 33.3 6.7 45.3 18.7l90.5 90.5c12 12 18.7 28.3 18.7 45.3L384 448c0 35.3-28.7 64-64 64L64 512c-35.3 0-64-28.7-64-64L0 64z"/></svg>
        <p>${sec1_p4}</p>
    `;   
    
    secMe_1.appendChild(circle);
    secMe_1.appendChild(divResume2);        
    
const tecnos = document.createElement('section');
    
    tecnos.innerHTML = svgsTecno;
    
//btn resume    
    const updateComp = (newComponent)=>{
        container.textContent = '';
        container.appendChild(newComponent(language)); //pasar el lenguaje actual al componente.
    };

const btnResume = document.createElement('button');

    btnResume.textContent = btnResumeLang;
    
    btnResume.onclick = () => {
        window.scrollTo(0,0);
        updateComp(Resume);
    };
      
    
    divResume2.appendChild(tecnos);
    divResume2.appendChild(btnResume);    
    
    
//style sec2

const port = secMe_2.querySelector('#port');

const btnPort = document.createElement('button');

    btnPort.textContent = btnPortLang;
    
    btnPort.onclick = () => {
        window.scrollTo(0,0);
        updateComp(Portfolio);     
    };
    
    port.appendChild(btnPort);    
    
    secMe_2.style.display = 'flex';
    secMe_2.style.flexDirection = 'column';
    secMe_2.style.gap = '15px';
    
    secMe.appendChild(secMe_1);
    //secMe.appendChild(circle);
    secMe.appendChild(secMe_2);
    

//svgs    
styleSvgs(secMe);



const sec1_divs = secMe.querySelectorAll('div');
    
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
    
//style secMe(sec1 y sec2)    
    
    secMe.style.display = 'flex';
    secMe.style.flexDirection = 'column';
    secMe.style.gap= '20px';
    secMe.style.padding = '10px';
    
//style circle    
    const styleCircle = secMe_1.querySelector('#circle');
    styleCircle.style.width = "300px";
    styleCircle.style.height = "300px";
    styleCircle.style.borderRadius = "50%";
    styleCircle.style.backgroundImage= "url('https://raw.githubusercontent.com/sebas350/personalweb/main/scripts/components/img/me.jpg')";
    styleCircle.style.backgroundSize = 'cover';
    styleCircle.style.backgroundPosition = 'center';
       
       //centrar circle
    styleCircle.style.margin = 'auto';
    
//style sec resume(class resume)    
    const classResume = secMe_1.querySelectorAll('.resume');
    classResume.forEach(div => div.style.background = '#001F3F');
    
    port.style.background = '#013220';
    
const div1s = secMe.querySelectorAll('.div-1');

div1s.forEach(div => {
    div.style.position = 'relative';
    div.style.width = '100%';
    div.style.height = '400px';
    div.style.display = 'flex';
    div.style.flexDirection = 'column';
    div.style.justifyContent = 'flex-end';
    div.style.gap = '20px';
});

//div1Res.style.border = '3px solid red';

const elemRes = secMe.querySelectorAll('.relative');
elemRes.forEach(e => e.style.position = 'relative');

const svgsAbso = secMe.querySelectorAll('.svg-absolute');

svgsAbso.forEach(svg => {
    svg.style.position = 'absolute';
    svg.style.top = '0';
    svg.style.left = '0';
    svg.style.width = '100%';
    svg.style.height = '100%';
});

const certi = secMe.querySelector('#certifi');
    
    certi.style.background = '#B8860B';
    

//btn certi

const btnCerti = document.createElement('button');

    btnCerti.textContent = btnCertiLang;
    
    btnCerti.onclick = () => {
        window.scrollTo(0,0);
        updateComp(Certificates);     
    };
    
    certi.appendChild(btnCerti);
    

//btn go top

const btnTop = document.createElement('button');
btnTop.textContent = btnTopLang;

btnTop.onclick = () => window.scrollTo({top: 0,
      behavior: 'smooth'});

secMe.appendChild(btnTop);


//style light

const classLight = secMe.querySelectorAll('.light');
    
    classLight.forEach(e => e.style.fontWeight = '300');
    


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

    
    
//AQUI!!!!!!!!!!!!!!!!!!!    
    
    
    //secMe.style.padding = '10px'; YA TIENE PADDING
    secMe.style.margin = 'auto';
    secMe.style.width = 'min(90vw, 720px)';
    secMe.style.margin = 'auto';
    secMe.style.width = 'min(90vw, 720px)';
    
    
    //h1.style.color = 'blue';
    //h1.style.textAlign = 'center';
    
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
