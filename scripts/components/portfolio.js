//import { document } from '../dom.js';
import { Present } from './present.js';

export function Portfolio(language='es') {


const translations = {
    es: {
        title: 'Portfolio',
        description: 'Este portafolio muestra proyectos de desarrollo web, programación con Arduino y soluciones de software, destacando mi experiencia y creatividad en tecnología.',
        webs: {
            title: 'Desarrollo Web',
            description: 'En esta seccion encotraras los proyectos mas destacados sobre desarrollo Web',
            beautySpa: {
                title: 'Beauty Spa',
                description: 'En esta aplicación web, los usuarios pueden explorar diferentes técnicas de cuidado de la piel, conocer los servicios que ofrecemos, y reservar turnos para realizar tratamientos. Además, proporcionamos información sobre nuestra ubicación física.',
                navbar: [
                    'En la barra de navegacion podemos ver como se trabajo con los botones y el diseno.',
                    'Los link nos llevan a distintas partes del la pagina',
                    'Por detras de la barra de navegacion podemos ver que su codigo esta compuesto por un html que cuenta con elementos ul y li',
                    'Tambien contamos con un menu amburgeza dependiendo del tamaneo de pantalla'
                ],
                main: [
                    'En el cuerpo principal de la Pagina podemos ver como esta organizada en secciones',
                    'Cuenta una carrucel para poder seleccionar y tener mas informacion acerca de los tratamientos',
                    'Cuenta con una secciones donde podemos encotrar a los profesionales, el codigo trabajado aqui se relizo usando la api nativa de js',
                    'Podemos contactarnos mediente un formulario donde podemos detallar los pedidos',
                    
                    'En la seccion de ubicacion usamos ijustramos un etiqueta iframe para logar mostrar la ubicacion del lugar'
                ],
                footer: [
                    'El foother cuenta con un codigo que nos muestra los contactos y usamos iconos para los link',
                    'Tambien podemos destacar que tanto el fooder como el navbar esta presente en todos los html usando un template',
                ],
                tools: [
                    'Herramientas usadas para este Proyecto',
                ],
            },
            employers: {},
            fastapi: {},
            plataform: {},
        },
        programs: {},
        softHard: {},
        others: {},
    },
    en: {
        title: 'Portfolio',
        description: 'This portfolio showcases web development projects, Arduino programming, and software solutions, highlighting my expertise and creativity in technology.',
        webs: {
            title: 'Web Development',
            description: 'In this section, you will find the most outstanding projects related to Web Development',
            beautySpa: {
                title: 'Beauty Spa',
                description: 'In this web application, users can explore different skincare techniques, learn about the services we offer, and book appointments for treatments. Additionally, we provide information about our physical location.',
                navbar: [
                    'In the navigation bar, we can see how the buttons and design were implemented.',
                    'The links take us to different sections of the page.',
                    'Behind the navigation bar, the code includes an HTML structure with ul and li elements.',
                    'We also have a hamburger menu depending on the screen size.'
                ],
                main: [
                    'In the main body of the page, we can see how it is organized into sections.',
                    'It includes a carousel to select and get more information about the treatments.',
                    'There is a section where we can find professionals, and the code here was created using the native JavaScript API.',
                    
                    'We can contact us through a form where we can detail the orders',

                    'In the location section, we use an iframe tag to display the location of the spa.'
                ],
                footer: [
                    'The footer includes code displaying contact details and icons for the links.',
                    'We also highlight that both the footer and the navbar are present across all HTML files using a template.'
                ],
                tools: [
                    'Tools used for this Project',
                ],
            },
            employers: {},
            fastapi: {},
            plataform: {},
        },
        programs: {},
        softHard: {},
        others: {},
    },
};
    
    const container = document.createElement('div');
    const {title, description, webs} = translations[language]
    
    const web1 = webs.beautySpa;
    
    
    //div presentacion
const divout = document.createElement('div');

    divout.appendChild(Present(description, title, 'skyblue'));
    
    
    
    
//div seccion desarrollo web
    
    const sectionWeb = document.createElement('div');
    
const beautySpa = document.createElement('div');    
    
    const htmlSpa = ` 
            
            <h1 style="color: blue;">${webs.title}</h1>
            <p class="salient">${webs.description}</p>
            </br>
            <h2 style="color: skyblue;">${web1.title}</h2>
            <p style="font-size:1.5em;">${web1.description}</p>
            
            <img src="https://raw.githubusercontent.com/sebas350/personalweb/main/scripts/components/img/navbar.png" style="width:100%; margin: 20px 0px;"  alt="">
            
            ${web1.navbar.map((p) => `<p>${p}</p>`).join('')}
  
  <div style="display: flex; flex-wrap: wrap; gap:10px; margin: 20px 0px; ">  
      <img src="https://raw.githubusercontent.com/sebas350/personalweb/main/scripts/components/img/navbar1.png" style="width:100%"  alt="">
 
 <img src="https://raw.githubusercontent.com/sebas350/personalweb/main/scripts/components/img/navbar2.png" style="width:100%;"  alt="">
 
 </div>
                  
            <p>${web1.main[0]}</p></br>
            <p>${web1.main[1]}</p>
            
            <img src="https://raw.githubusercontent.com/sebas350/personalweb/main/scripts/components/img/main1.png" style="width:100%; margin:20px 0px;"  alt="">
            <p>${web1.main[2]}</p>
            
            <img src="https://raw.githubusercontent.com/sebas350/personalweb/main/scripts/components/img/main2.png" style="width:100%; margin:20px 0px;"  alt="">
            <p>${web1.main[3]}</p>
            
            <img src="https://raw.githubusercontent.com/sebas350/personalweb/main/scripts/components/img/main3.png" style="width:100%; margin:20px 0px;"  alt="">
            <p>${web1.main[4]}</p>
            
            <img src="https://raw.githubusercontent.com/sebas350/personalweb/main/scripts/components/img/main4.png" style="width:100%; margin:20px 0px;"  alt="">
            
            ${web1.footer.map((p) => `<p>${p}</p>`).join('')}
            
            <img src="https://raw.githubusercontent.com/sebas350/personalweb/main/scripts/components/img/footer.png" style="width:100%; margin:20px 0px;"  alt="">
        
            `;
            
    beautySpa.innerHTML = htmlSpa;
    
const tecno = document.createElement('div');

tecno.style.border = '3px solid red';

tecno.innerHTML = `
        <p>Tecnologias Usadas en este Proyecto</p>
        <svg class="svg" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512">
            <path fill="#74C0FC" d="M0 32l34.9 395.8L192 480l157.1-52.2L384 32H0zm313.1 80l-4.8 47.3L193 208.6l-.3 .1h111.5l-12.8 146.6-98.2 28.7-98.8-29.2-6.4-73.9h48.9l3.2 38.3 52.6 13.3 54.7-15.4 3.7-61.6-166.3-.5v-.1l-.2 .1-3.6-46.3L193.1 162l6.5-2.7H76.7L70.9 112h242.2z"/></svg>

<svg class="svg" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512">
    <path fill="#ff8605" d="M0 32l34.9 395.8L191.5 480l157.6-52.2L384 32H0zm308.2 127.9H124.4l4.1 49.4h175.6l-13.6 148.4-97.9 27v.3h-1.1l-98.7-27.3-6-75.8h47.7L138 320l53.5 14.5 53.7-14.5 6-62.2H84.3L71.5 112.2h241.1l-4.4 47.7z"/></svg>
    
<svg class="svg" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
    <path fill="#FFD43B" d="M448 96c0-35.3-28.7-64-64-64H64C28.7 32 0 60.7 0 96V416c0 35.3 28.7 64 64 64H384c35.3 0 64-28.7 64-64V96zM180.9 444.9c-33.7 0-53.2-17.4-63.2-38.5L152 385.7c6.6 11.7 12.6 21.6 27.1 21.6c13.8 0 22.6-5.4 22.6-26.5V237.7h42.1V381.4c0 43.6-25.6 63.5-62.9 63.5zm85.8-43L301 382.1c9 14.7 20.8 25.6 41.5 25.6c17.4 0 28.6-8.7 28.6-20.8c0-14.4-11.4-19.5-30.7-28l-10.5-4.5c-30.4-12.9-50.5-29.2-50.5-63.5c0-31.6 24.1-55.6 61.6-55.6c26.8 0 46 9.3 59.8 33.7L368 290c-7.2-12.9-15-18-27.1-18c-12.3 0-20.1 7.8-20.1 18c0 12.6 7.8 17.7 25.9 25.6l10.5 4.5c35.8 15.3 55.9 31 55.9 66.2c0 37.8-29.8 58.6-69.7 58.6c-39.1 0-64.4-18.6-76.7-43z"/></svg>
    
<svg class="svg" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
    <path fill="#63E6BE" d="M356.9 64.3H280l-56 88.6-48-88.6H0L224 448 448 64.3h-91.1zm-301.2 32h53.8L224 294.5 338.4 96.3h53.8L224 384.5 55.7 96.3z"/></svg>
    
<svg class="svg" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 512">
    <path fill="#5fad47" d="M316.3 452c-2.1 0-4.2-.6-6.1-1.6L291 439c-2.9-1.6-1.5-2.2-.5-2.5 3.8-1.3 4.6-1.6 8.7-4 .4-.2 1-.1 1.4 .1l14.8 8.8c.5 .3 1.3 .3 1.8 0L375 408c.5-.3 .9-.9 .9-1.6v-66.7c0-.7-.3-1.3-.9-1.6l-57.8-33.3c-.5-.3-1.2-.3-1.8 0l-57.8 33.3c-.6 .3-.9 1-.9 1.6v66.7c0 .6 .4 1.2 .9 1.5l15.8 9.1c8.6 4.3 13.9-.8 13.9-5.8v-65.9c0-.9 .7-1.7 1.7-1.7h7.3c.9 0 1.7 .7 1.7 1.7v65.9c0 11.5-6.2 18-17.1 18-3.3 0-6 0-13.3-3.6l-15.2-8.7c-3.7-2.2-6.1-6.2-6.1-10.5v-66.7c0-4.3 2.3-8.4 6.1-10.5l57.8-33.4c3.7-2.1 8.5-2.1 12.1 0l57.8 33.4c3.7 2.2 6.1 6.2 6.1 10.5v66.7c0 4.3-2.3 8.4-6.1 10.5l-57.8 33.4c-1.7 1.1-3.8 1.7-6 1.7zm46.7-65.8c0-12.5-8.4-15.8-26.2-18.2-18-2.4-19.8-3.6-19.8-7.8 0-3.5 1.5-8.1 14.8-8.1 11.9 0 16.3 2.6 18.1 10.6 .2 .8 .8 1.3 1.6 1.3h7.5c.5 0 .9-.2 1.2-.5 .3-.4 .5-.8 .4-1.3-1.2-13.8-10.3-20.2-28.8-20.2-16.5 0-26.3 7-26.3 18.6 0 12.7 9.8 16.1 25.6 17.7 18.9 1.9 20.4 4.6 20.4 8.3 0 6.5-5.2 9.2-17.4 9.2-15.3 0-18.7-3.8-19.8-11.4-.1-.8-.8-1.4-1.7-1.4h-7.5c-.9 0-1.7 .7-1.7 1.7 0 9.7 5.3 21.3 30.6 21.3 18.5 0 29-7.2 29-19.8zm54.5-50.1c0 6.1-5 11.1-11.1 11.1s-11.1-5-11.1-11.1c0-6.3 5.2-11.1 11.1-11.1 6-.1 11.1 4.8 11.1 11.1zm-1.8 0c0-5.2-4.2-9.3-9.4-9.3-5.1 0-9.3 4.1-9.3 9.3 0 5.2 4.2 9.4 9.3 9.4 5.2-.1 9.4-4.3 9.4-9.4zm-4.5 6.2h-2.6c-.1-.6-.5-3.8-.5-3.9-.2-.7-.4-1.1-1.3-1.1h-2.2v5h-2.4v-12.5h4.3c1.5 0 4.4 0 4.4 3.3 0 2.3-1.5 2.8-2.4 3.1 1.7 .1 1.8 1.2 2.1 2.8 .1 1 .3 2.7 .6 3.3zm-2.8-8.8c0-1.7-1.2-1.7-1.8-1.7h-2v3.5h1.9c1.6 0 1.9-1.1 1.9-1.8zM137.3 191c0-2.7-1.4-5.1-3.7-6.4l-61.3-35.3c-1-.6-2.2-.9-3.4-1h-.6c-1.2 0-2.3 .4-3.4 1L3.7 184.6C1.4 185.9 0 188.4 0 191l.1 95c0 1.3 .7 2.5 1.8 3.2 1.1 .7 2.5 .7 3.7 0L42 268.3c2.3-1.4 3.7-3.8 3.7-6.4v-44.4c0-2.6 1.4-5.1 3.7-6.4l15.5-8.9c1.2-.7 2.4-1 3.7-1 1.3 0 2.6 .3 3.7 1l15.5 8.9c2.3 1.3 3.7 3.8 3.7 6.4v44.4c0 2.6 1.4 5.1 3.7 6.4l36.4 20.9c1.1 .7 2.6 .7 3.7 0 1.1-.6 1.8-1.9 1.8-3.2l.2-95zM472.5 87.3v176.4c0 2.6-1.4 5.1-3.7 6.4l-61.3 35.4c-2.3 1.3-5.1 1.3-7.4 0l-61.3-35.4c-2.3-1.3-3.7-3.8-3.7-6.4v-70.8c0-2.6 1.4-5.1 3.7-6.4l61.3-35.4c2.3-1.3 5.1-1.3 7.4 0l15.3 8.8c1.7 1 3.9-.3 3.9-2.2v-94c0-2.8 3-4.6 5.5-3.2l36.5 20.4c2.3 1.2 3.8 3.7 3.8 6.4zm-46 128.9c0-.7-.4-1.3-.9-1.6l-21-12.2c-.6-.3-1.3-.3-1.9 0l-21 12.2c-.6 .3-.9 .9-.9 1.6v24.3c0 .7 .4 1.3 .9 1.6l21 12.1c.6 .3 1.3 .3 1.8 0l21-12.1c.6-.3 .9-.9 .9-1.6v-24.3zm209.8-.7c2.3-1.3 3.7-3.8 3.7-6.4V192c0-2.6-1.4-5.1-3.7-6.4l-60.9-35.4c-2.3-1.3-5.1-1.3-7.4 0l-61.3 35.4c-2.3 1.3-3.7 3.8-3.7 6.4v70.8c0 2.7 1.4 5.1 3.7 6.4l60.9 34.7c2.2 1.3 5 1.3 7.3 0l36.8-20.5c2.5-1.4 2.5-5 0-6.4L550 241.6c-1.2-.7-1.9-1.9-1.9-3.2v-22.2c0-1.3 .7-2.5 1.9-3.2l19.2-11.1c1.1-.7 2.6-.7 3.7 0l19.2 11.1c1.1 .7 1.9 1.9 1.9 3.2v17.4c0 2.8 3.1 4.6 5.6 3.2l36.7-21.3zM559 219c-.4 .3-.7 .7-.7 1.2v13.6c0 .5 .3 1 .7 1.2l11.8 6.8c.4 .3 1 .3 1.4 0L584 235c.4-.3 .7-.7 .7-1.2v-13.6c0-.5-.3-1-.7-1.2l-11.8-6.8c-.4-.3-1-.3-1.4 0L559 219zm-254.2 43.5v-70.4c0-2.6-1.6-5.1-3.9-6.4l-61.1-35.2c-2.1-1.2-5-1.4-7.4 0l-61.1 35.2c-2.3 1.3-3.9 3.7-3.9 6.4v70.4c0 2.8 1.9 5.2 4 6.4l61.2 35.2c2.4 1.4 5.2 1.3 7.4 0l61-35.2c1.8-1 3.1-2.7 3.6-4.7 .1-.5 .2-1.1 .2-1.7zm-74.3-124.9l-.8 .5h1.1l-.3-.5zm76.2 130.2l-.4-.7v.9l.4-.2z"/></svg>
    
<svg class="svg" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
    <path fill="#74C0FC" d="M418.2 177.2c-5.4-1.8-10.8-3.5-16.2-5.1 .9-3.7 1.7-7.4 2.5-11.1 12.3-59.6 4.2-107.5-23.1-123.3-26.3-15.1-69.2 .6-112.6 38.4-4.3 3.7-8.5 7.6-12.5 11.5-2.7-2.6-5.5-5.2-8.3-7.7-45.5-40.4-91.1-57.4-118.4-41.5-26.2 15.2-34 60.3-23 116.7 1.1 5.6 2.3 11.1 3.7 16.7-6.4 1.8-12.7 3.8-18.6 5.9C38.3 196.2 0 225.4 0 255.6c0 31.2 40.8 62.5 96.3 81.5 4.5 1.5 9 3 13.6 4.3-1.5 6-2.8 11.9-4 18-10.5 55.5-2.3 99.5 23.9 114.6 27 15.6 72.4-.4 116.6-39.1 3.5-3.1 7-6.3 10.5-9.7 4.4 4.3 9 8.4 13.6 12.4 42.8 36.8 85.1 51.7 111.2 36.6 27-15.6 35.8-62.9 24.4-120.5-.9-4.4-1.9-8.9-3-13.5 3.2-.9 6.3-1.9 9.4-2.9 57.7-19.1 99.5-50 99.5-81.7 0-30.3-39.4-59.7-93.8-78.4zM282.9 92.3c37.2-32.4 71.9-45.1 87.7-36 16.9 9.7 23.4 48.9 12.8 100.4-.7 3.4-1.4 6.7-2.3 10-22.2-5-44.7-8.6-67.3-10.6-13-18.6-27.2-36.4-42.6-53.1 3.9-3.7 7.7-7.2 11.7-10.7zM167.2 307.5c5.1 8.7 10.3 17.4 15.8 25.9-15.6-1.7-31.1-4.2-46.4-7.5 4.4-14.4 9.9-29.3 16.3-44.5 4.6 8.8 9.3 17.5 14.3 26.1zm-30.3-120.3c14.4-3.2 29.7-5.8 45.6-7.8-5.3 8.3-10.5 16.8-15.4 25.4-4.9 8.5-9.7 17.2-14.2 26-6.3-14.9-11.6-29.5-16-43.6zm27.4 68.9c6.6-13.8 13.8-27.3 21.4-40.6s15.8-26.2 24.4-38.9c15-1.1 30.3-1.7 45.9-1.7s31 .6 45.9 1.7c8.5 12.6 16.6 25.5 24.3 38.7s14.9 26.7 21.7 40.4c-6.7 13.8-13.9 27.4-21.6 40.8-7.6 13.3-15.7 26.2-24.2 39-14.9 1.1-30.4 1.6-46.1 1.6s-30.9-.5-45.6-1.4c-8.7-12.7-16.9-25.7-24.6-39s-14.8-26.8-21.5-40.6zm180.6 51.2c5.1-8.8 9.9-17.7 14.6-26.7 6.4 14.5 12 29.2 16.9 44.3-15.5 3.5-31.2 6.2-47 8 5.4-8.4 10.5-17 15.5-25.6zm14.4-76.5c-4.7-8.8-9.5-17.6-14.5-26.2-4.9-8.5-10-16.9-15.3-25.2 16.1 2 31.5 4.7 45.9 8-4.6 14.8-10 29.2-16.1 43.4zM256.2 118.3c10.5 11.4 20.4 23.4 29.6 35.8-19.8-.9-39.7-.9-59.5 0 9.8-12.9 19.9-24.9 29.9-35.8zM140.2 57c16.8-9.8 54.1 4.2 93.4 39 2.5 2.2 5 4.6 7.6 7-15.5 16.7-29.8 34.5-42.9 53.1-22.6 2-45 5.5-67.2 10.4-1.3-5.1-2.4-10.3-3.5-15.5-9.4-48.4-3.2-84.9 12.6-94zm-24.5 263.6c-4.2-1.2-8.3-2.5-12.4-3.9-21.3-6.7-45.5-17.3-63-31.2-10.1-7-16.9-17.8-18.8-29.9 0-18.3 31.6-41.7 77.2-57.6 5.7-2 11.5-3.8 17.3-5.5 6.8 21.7 15 43 24.5 63.6-9.6 20.9-17.9 42.5-24.8 64.5zm116.6 98c-16.5 15.1-35.6 27.1-56.4 35.3-11.1 5.3-23.9 5.8-35.3 1.3-15.9-9.2-22.5-44.5-13.5-92 1.1-5.6 2.3-11.2 3.7-16.7 22.4 4.8 45 8.1 67.9 9.8 13.2 18.7 27.7 36.6 43.2 53.4-3.2 3.1-6.4 6.1-9.6 8.9zm24.5-24.3c-10.2-11-20.4-23.2-30.3-36.3 9.6 .4 19.5 .6 29.5 .6 10.3 0 20.4-.2 30.4-.7-9.2 12.7-19.1 24.8-29.6 36.4zm130.7 30c-.9 12.2-6.9 23.6-16.5 31.3-15.9 9.2-49.8-2.8-86.4-34.2-4.2-3.6-8.4-7.5-12.7-11.5 15.3-16.9 29.4-34.8 42.2-53.6 22.9-1.9 45.7-5.4 68.2-10.5 1 4.1 1.9 8.2 2.7 12.2 4.9 21.6 5.7 44.1 2.5 66.3zm18.2-107.5c-2.8 .9-5.6 1.8-8.5 2.6-7-21.8-15.6-43.1-25.5-63.8 9.6-20.4 17.7-41.4 24.5-62.9 5.2 1.5 10.2 3.1 15 4.7 46.6 16 79.3 39.8 79.3 58 0 19.6-34.9 44.9-84.8 61.4zm-149.7-15c25.3 0 45.8-20.5 45.8-45.8s-20.5-45.8-45.8-45.8c-25.3 0-45.8 20.5-45.8 45.8s20.5 45.8 45.8 45.8z"/></svg>

<svg class="svg" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
    <path fill="#21a1de" d="M439.8 200.5c-7.7-30.9-22.3-54.2-53.4-54.2h-40.1v47.4c0 36.8-31.2 67.8-66.8 67.8H172.7c-29.2 0-53.4 25-53.4 54.3v101.8c0 29 25.2 46 53.4 54.3 33.8 9.9 66.3 11.7 106.8 0 26.9-7.8 53.4-23.5 53.4-54.3v-40.7H226.2v-13.6h160.2c31.1 0 42.6-21.7 53.4-54.2 11.2-33.5 10.7-65.7 0-108.6zM286.2 404c11.1 0 20.1 9.1 20.1 20.3 0 11.3-9 20.4-20.1 20.4-11 0-20.1-9.2-20.1-20.4 .1-11.3 9.1-20.3 20.1-20.3zM167.8 248.1h106.8c29.7 0 53.4-24.5 53.4-54.3V91.9c0-29-24.4-50.7-53.4-55.6-35.8-5.9-74.7-5.6-106.8 .1-45.2 8-53.4 24.7-53.4 55.6v40.7h106.9v13.6h-147c-31.1 0-58.3 18.7-66.8 54.2-9.8 40.7-10.2 66.1 0 108.6 7.6 31.6 25.7 54.2 56.8 54.2H101v-48.8c0-35.3 30.5-66.4 66.8-66.4zm-6.7-142.6c-11.1 0-20.1-9.1-20.1-20.3 .1-11.3 9-20.4 20.1-20.4 11 0 20.1 9.2 20.1 20.4s-9 20.3-20.1 20.3z"/></svg>      
`;


beautySpa.appendChild(tecno);
    
    sectionWeb.appendChild(beautySpa);
    
    container.appendChild(divout);
    container.appendChild(sectionWeb);
    

//styles

    sectionWeb.style.padding = '10px';

    //container.style.fontFamily = "'Lora', serif";
    const salient = container.querySelectorAll('.salient');
    const webdescrip = container.querySelector('#subtitle');
    
    
    //outv.style.textShadow= '3px 3px #bdbdbd';
    //outv.style.paddingTop = '4%';
    //outv.style.transition = 'transform 1000ms, opacity 1000ms';
    //outv.style.opacity = '0';
    
    
    container.style.transition = 'transform 1000ms';
    

    const ps = container.querySelectorAll('p');
    ps.forEach(e => {
        e.style.fontSize = '1.2em';
        e.style.lineHeight = '1.5';
        //e.style.textAlign = 'center';
        e.style.color = '#333333';
        e.style.textShadow = '2px 2px #E0E0E0';
    });
    
    salient.forEach(e => {
        e.style.fontSize = '1.4em';
        e.style.lineHeight = '1.5';
        e.style.textAlign = 'center';
    });
    
    webdescrip.style.fontSize = '1.5em';
    //webdescrip.style.height = '100vh';
    //webdescrip.style.border = '3px solid red';
    //webdescrip.style.display = 'flex';
    //webdescrip.style.justifyContent = 'center';
    //webdescrip.style.alignContent = 'center';
    

//observer    
    
    const imgs = container.querySelectorAll('img');
    //webdescrip.style.opacity = '0';
    //webdescrip.style.transition = 'opacity 1500ms, transform 1500ms';
    //webdescrip.style.transform = 'translateY(50%)';
    webdescrip.style.textShadow = '0px 0px #E0E0E0';
    webdescrip.style.color = 'white';

imgs.forEach(img => {

img.style.opacity = '0';
img.style.transform = 'translateX(-10%)';

img.style.transition = 'transform 1000ms, opacity 1000ms';

img.style.borderRadius = '10px';
img.style.boxShadow = '2px 2px #E0E0E0';

});

const effect = entries => {
  entries.forEach(entry => {
      if (entry.isIntersecting) {
          entry.target.style.opacity ='1';
          if (entry.target.tagName === 'IMG') {
              entry.target.style.transform = 'translateX(0px)';    
          }
          if(entry.target.id === 'subtitle'){
                 entry.target.style.transform = 'translateY(0px)';
          }  
       }else{
      //entry.target.style.opacity = '0';
      //entry.target.style.transform = 'translateX(-50%)';
     }
      
  })
};

const observer = new IntersectionObserver(effect,{threshold: 0.3});

imgs.forEach(entry => observer.observe(entry));

//observer.observe(outv);
observer.observe(webdescrip);

    return container;
}
