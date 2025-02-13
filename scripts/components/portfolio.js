//import { document } from '../dom.js';
import { Present } from './present.js';
import {svgsTecno, others} from './svgs.js';
import {svgsSize, createSlider} from './utils.js';

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
                visite: 'Visita BeautySpa',
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
                    'Herramientas usadas para Beauty Spa',
                ],
            },
            storeEmployee: {
                title: 'StoreEmployee',
                description: 'En esta aplicación web, tanto las personas que buscan trabajo como aquellas que buscan empleados pueden encontrar una solución eficiente. La plataforma permite la conexión entre empleadores y candidatos de manera rápida y organizada.',
                visite: 'Visita Store Employee',
                p1:'hola',
                p2:'Chau',
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
                    'Tools used for Beauty Spa',
                ],
            },
            storeEmployee: {
                title: 'StoreEmployee',
                description: 'In this web application, both job seekers and employers can find an efficient solution. The platform facilitates the connection between employers and candidates quickly and in an organized manner.',
                visite: 'Go in Store Employee',
                p1: 'hello',
                p2:'By',
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
    
//display none para los svg

const tecno = document.createElement('div');
//const front = document.createElement('div');
//const back = document.createElement('div');

//const tecnoP = document.createElement('p');

tecno.style.border = '1px solid black';
tecno.style.borderRadius = '10px';
tecno.style.padding = '10px';


/*
//1era forma de incluir los svg de una variable.

tecno.innerHTML = `<p style="text-align: center;">${web1.tools}</p>`;

front.innerHTML = `<p>Frontend</p>${svgsTecno}`;
back.innerHTML = `<p>Backend</p>${svgsTecno}`;

const backOff = front.querySelectorAll('.back');

const frontOff = back.querySelectorAll('.front');

frontOff.forEach(svg => svg.style.display = 'none');

backOff.forEach(svg => svg.style.display = 'none');

tecno.appendChild(front);
tecno.appendChild(back);

*/

//2da forma  de filtrar svg de un variable

tecno.innerHTML = `<p style="text-align: center;">${web1.tools}</p>
<p>Frontend</p>
<div class="sec-front">${svgsTecno}</div>
<p>Backend</p>
<div class="sec-back">${svgsTecno}</div>
<p>Otros</p>
${others}`;

const secFront = tecno.querySelectorAll('.sec-front .back');
secFront.forEach(svg => svg.style.display = 'none');

const secBack = tecno.querySelectorAll('.sec-back .front');
secBack.forEach(svg => svg.style.display = 'none');


svgsSize(tecno);

const invisible = tecno.querySelectorAll('.invisible');

invisible.forEach(svg => svg.style.display = 'none');

beautySpa.appendChild(tecno);

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
 
    sectionWeb.appendChild(beautySpa);
    
    container.appendChild(divout);
    container.appendChild(sectionWeb);
    

//section employee store

const webEmployee = document.createElement('div');

const web2 = webs.storeEmployee;

const storeEmployeeSection = document.createElement('div');


//descripcion
const htmlStoreEmployee = ` 
    <h2 style="color: skyblue;">${web2.title}</h2>
    <p style="font-size:1.5em;">${web2.description}</p>
`;

storeEmployeeSection.innerHTML = htmlStoreEmployee;

sectionWeb.appendChild(storeEmployeeSection);

const slider1 = createSlider(['employee-index1.png', 'employee-index2.png', 'employee-index3.png', 'employee-index4.png']);

webEmployee.appendChild(slider1);

//primer parrafo
const p1Employee = document.createElement('p');
p1Employee.textContent = web2.p1;

webEmployee.appendChild(p1Employee);

const slider2 = createSlider(['employee-index1.png', 'employee-index2.png', 'employee-index3.png']);

webEmployee.appendChild(slider2);


//segundo parrafo
const p2Employee = document.createElement('p');
p2Employee.textContent = web2.p2;

webEmployee.appendChild(p2Employee);

const slider3 = createSlider(['employee-index1.png', 'employee-index2.png', 'employee-index3.png']);

webEmployee.appendChild(slider3);

const visiteWeb2 = document.createElement('div');

visiteWeb2.innerHTML = `<a href="https://webemployerstore.onrender.com/">${web2.visite}</a>`;

webEmployee.appendChild(visiteWeb2);

webEmployee.style.display = 'flex';
webEmployee.style.flexDirection = 'column';
webEmployee.style.alignItems = 'center';
webEmployee.style.gap = '10px';


sectionWeb.appendChild(webEmployee);


//style webEmployee


//styles

    sectionWeb.style.padding = '10px';
    sectionWeb.style.display = 'flex';
    sectionWeb.style.flexDirection = 'column';
    sectionWeb.style.gap = '10px';

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
