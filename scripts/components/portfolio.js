//import { document } from '../dom.js';
import { Present } from './present.js';
import {svgsTecno, others, svgsEmployee} from './svgs.js';
import {svgsSize, createSlider, containerTecno} from './utils.js';

export function Portfolio(language='es') {


const translations = {
    es: {
        title: 'Portfolio',
        description: 'Este portafolio muestra proyectos de desarrollo web, programación con Arduino y soluciones de software, destacando mi experiencia y creatividad en tecnología.',
        webs: {
            title: 'Desarrollo Web',
            description: 'En esta sección encontrarás los proyectos mas destacados sobre Desarrollo Web',
            beautySpa: {
                title: 'Beauty Spa',
                description: 'En esta aplicación web, los usuarios pueden explorar diferentes técnicas de cuidado de la piel, conocer los servicios que ofrecemos, y reservar turnos para realizar tratamientos. Además, proporcionamos información sobre nuestra ubicación física.',
                visite: 'Visita BeautySpa',
                navbar: [
                    'Cabe destacar que esta Aplicacion Web se trabajo en conjunto con un equipo de trabajo de cuatro. Al tener formación sobre Habilidades Blandas pudimos aplicar todo lo aprendido y llevar adelante el proyecto con exito.',
                    'En la barra de navegación podemos ver como se trabajó con los botones y el diseño.',
                    'Los link nos llevan a distintas partes del la pagina',
                    'También contamos con un menu amburguesa dependiendo del tamaño de pantalla'
                ],
                main: [
                    'En el cuerpo principal de la Página podemos ver como esta organizada en secciones',
                    'Cuenta una carrucel para poder seleccionar y tener mas informacion acerca de los tratamientos',
                    'Posee con una secciones donde podemos encontrar a los profesionales, el código trabajado aqui se relizo usando la API nativa de javascript',
                    'Podemos contactarnos mediante un formulario donde detallamos los pedidos',
                    
                    'En la sección de ubicación usamos un etiqueta iframe para logar mostrar la ubicación del lugar'
                ],
                footer: [
                    'El Pie de Página cuenta con un código que nos muestra los contactos y usamos íconos para los link',
                    'También podemos destacar que tanto el Pie de Página como la Barra de Navegación esta presente en todos los HTML usando un template',
                ],
                tools: [
                    'Herramientas usadas para Beauty Spa',
                ],
            },
            storeEmployee: {
                title: 'StoreEmployee',
                description: 'En esta aplicación web, tanto las personas que buscan trabajo como aquellas que buscan empleados pueden encontrar una solución eficiente. La plataforma permite la conexión entre empleadores y candidatos de manera rápida y organizada.',
                visite: 'Visita Store Employee',
                p1:'Employee Store cuenta con una sección dedicada tanto a quienes buscan empleo como a quienes necesitan contratar personal. La plataforma ofrece un menú de navegación intuitivo para acceder rápidamente a las distintas funciones, facilitando la conexión entre empleadores y candidatos.',
                p2:'La plataforma permite que tanto empleadores como candidatos se registren y muestren sus habilidades o necesidades laborales. Además, cuenta con un sistema de inicio de sesión que facilita el control y gestión de los registros.',
                tools: 'Herramientas usadas para Employee Store',
            },
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
                visite: 'Go in Beauty Spa',
                navbar: [
    'It is worth mentioning that this Web Application was developed in collaboration with a team of four. Having training in Soft Skills allowed us to apply everything we learned and successfully carry out the project.',
    'In the navigation bar, we can see how the buttons and design were implemented.',
    'The links take us to different parts of the page.',
    'We also have a hamburger menu depending on the screen size.'
],
main: [
    'In the main body of the Page, we can see how it is organized into sections.',
    'It includes a carousel to select and obtain more information about the treatments.',
    'There are sections where we can find professionals; the code used here was developed using JavaScript’s native API.',
    'We can get in touch through a form where we provide details about our requests.',
    'In the location section, we use an iframe tag to display the location of the place.'
],
footer: [
    'The Footer includes code that displays contact information, and we use icons for the links.',
    'It is also worth noting that both the Footer and the Navigation Bar are present in all HTML files using a template.'
],
tools: [
    'Tools used for Beauty Spa.',
],
            },
            storeEmployee: {
                title: 'StoreEmployee',
                description: 'In this web application, both job seekers and employers can find an efficient solution. The platform facilitates the connection between employers and candidates quickly and in an organized manner.',
                visite: 'Go in Store Employee',
                p1: 'Employee Store features a dedicated section for both job seekers and employers looking to hire. The platform provides an intuitive navigation menu for quick access to different functions, making it easier to connect employers with candidates.',
                p2:'The platform allows both employers and job seekers to register and showcase their skills or job needs. Additionally, it includes a login system to manage and track registrations efficiently.',
                tools: 'Tools used for Employee Store',
            },
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
            
            <img class="img" src="https://raw.githubusercontent.com/sebas350/personalweb/main/scripts/components/img/navbar.png" style="width:100%; margin: 20px 0px;"  alt="">
            
            ${web1.navbar.map((p) => `<p>${p}</p>`).join('')}
  
  <div style="display: flex; flex-wrap: wrap; gap:10px; margin: 20px 0px; ">  
      <img class="img" src="https://raw.githubusercontent.com/sebas350/personalweb/main/scripts/components/img/navbar1.png" style="width:100%"  alt="">
 
 <img class="img" src="https://raw.githubusercontent.com/sebas350/personalweb/main/scripts/components/img/navbar2.png" style="width:100%;"  alt="">
 
 </div>
                  
            <p>${web1.main[0]}</p></br>
            <p>${web1.main[1]}</p>
            
            <img class="img" src="https://raw.githubusercontent.com/sebas350/personalweb/main/scripts/components/img/main1.png" style="width:100%; margin:20px 0px;"  alt="">
            <p>${web1.main[2]}</p>
            
            <img class="img" src="https://raw.githubusercontent.com/sebas350/personalweb/main/scripts/components/img/main2.png" style="width:100%; margin:20px 0px;"  alt="">
            <p>${web1.main[3]}</p>
            
            <img class="img" src="https://raw.githubusercontent.com/sebas350/personalweb/main/scripts/components/img/main3.png" style="width:100%; margin:20px 0px;"  alt="">
            <p>${web1.main[4]}</p>
            
            <img class="img" src="https://raw.githubusercontent.com/sebas350/personalweb/main/scripts/components/img/main4.png" style="width:100%; margin:20px 0px;"  alt="">
            
            ${web1.footer.map((p) => `<p>${p}</p>`).join('')}
            
            <img class="img" src="https://raw.githubusercontent.com/sebas350/personalweb/main/scripts/components/img/footer.png" style="width:100%; margin:20px 0px;"  alt="">
        
            `;
            
    beautySpa.innerHTML = htmlSpa;
    
const tecno1 = containerTecno(web1.tools, svgsTecno, others);

beautySpa.appendChild(tecno1);

//visita la pagina


const visiteWeb1 = document.createElement('div');

visiteWeb1.innerHTML = `<a href="https://beauty-grupo15.netlify.app/">${web1.visite}</a>`;

visiteWeb1.style.display = 'flex';
visiteWeb1.style.justifyContent = 'center';
visiteWeb1.style.padding = '10px';

beautySpa.appendChild(visiteWeb1);

const hr = document.createElement('hr');

    hr.style.border = "none"; // Elimina el borde por defecto
    hr.style.height = "2px"; // Define el grosor de la línea
    hr.style.backgroundColor = "#ccc"; // Define el color de la línea
    hr.style.width = "80%"; // Define el ancho de la línea
    hr.style.margin = "40px auto"; // Establece el margen superior e inferior

beautySpa.appendChild(hr);

beautySpa.style.display = 'flex';
beautySpa.style.flexDirection = 'column';
//beautySpa.style.alignItems = 'center';
beautySpa.style.gap = '10px';
 
    sectionWeb.appendChild(beautySpa);
    
    container.appendChild(divout);
    container.appendChild(sectionWeb);
    

//section employee store

const webEmployee = document.createElement('div');

const web2 = webs.storeEmployee;

const storeEmployeeSection = document.createElement('div');


//descripcion
const htmlStoreEmployee = `
    ${svgsEmployee.users} 
    <h2 style="color: skyblue;">${web2.title}</h2>
    <p style="font-size:1.5em;">${web2.description}</p>
`;
    
storeEmployeeSection.innerHTML = htmlStoreEmployee;

webEmployee.appendChild(storeEmployeeSection);

const slider1 = createSlider(['employee-index1.png', 'employee-index2.png', 'employee-index3.png', 'employee-index4.png']);

webEmployee.appendChild(slider1);

//primer parrafo
const p1Employee = document.createElement('div');
p1Employee.innerHTML = `${svgsEmployee.p1}<p>${web2.p1}</p>`;



webEmployee.appendChild(p1Employee);

const slider2 = createSlider(['employee-employee.png', 'employee-employeer.png', 'employee-menu.png']);

webEmployee.appendChild(slider2);


//segundo parrafo
const p2Employee = document.createElement('div');
p2Employee.innerHTML = `${svgsEmployee.p2}<p>${web2.p2}</p>`;

webEmployee.appendChild(p2Employee);

const slider3 = createSlider(['employee-register1.png', 'employee-register2.png', 'employee-admin.png']);

webEmployee.appendChild(slider3);

const tecno2 = containerTecno(web2.tools, svgsTecno, others);

webEmployee.appendChild(tecno2);

const visiteWeb2 = document.createElement('div');

visiteWeb2.innerHTML = `<a href="https://webemployerstore.onrender.com/">${web2.visite}</a>`;

webEmployee.appendChild(visiteWeb2);

const svgsSizeEmployee = webEmployee.querySelectorAll('.employee');
svgsSizeEmployee.forEach(svg => {
        svg.style.width = '50px';
        svg.style.height = '50px';
    });



webEmployee.style.display = 'flex';
webEmployee.style.flexDirection = 'column';
webEmployee.style.alignItems = 'center';
webEmployee.style.gap = '50px';


sectionWeb.appendChild(webEmployee);


//style webEmployee


//styles

    sectionWeb.style.padding = '10px';
    sectionWeb.style.display = 'flex';
    sectionWeb.style.flexDirection = 'column';
    sectionWeb.style.gap = '10px';
    sectionWeb.style.padding = '10px';
    sectionWeb.style.margin = 'auto';
    sectionWeb.style.width = 'min(90vw, 720px)';

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
    
    const imgs = container.querySelectorAll('.img');
    //webdescrip.style.opacity = '0';
    //webdescrip.style.transition = 'opacity 1500ms, transform 1500ms';
    //webdescrip.style.transform = 'translateY(50%)';
    webdescrip.style.textShadow = '0px 0px #E0E0E0';
    webdescrip.style.color = 'white';

imgs.forEach(img => {

img.style.opacity = '0';
img.style.transform = 'translateX(-10%)';

img.style.transition = 'transform 1000ms, opacity 1000ms';

img.style.borderRadius = '5px';
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

//container.style.gap = '10px';

    return container;
}
