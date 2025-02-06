//import { document } from '../dom.js';
import { Present } from './present.js';
import {svgsTecno, others} from './svgs.js';
import {svgsSize} from './utils.js';

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
                    'Herramientas usadas para Beauty Spa',
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
                    'Tools used for Beauty Spa',
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
    
    sectionWeb.appendChild(beautySpa);
    
    container.appendChild(divout);
    container.appendChild(sectionWeb);
    

//section employee store

const webEmployee = document.createElement('div');

const slider = document.createElement('div');
slider.style.position = 'relative';


const sliderContainer = document.createElement('div');
sliderContainer.style.transition = 'transform 1000ms';
sliderContainer.style.overflow = 'scroll';
sliderContainer.style.zIndex = '1';
sliderContainer.style.position = 'relative';

sliderContainer.innerHTML = `<img src="https://raw.githubusercontent.com/sebas350/personalweb/main/scripts/components/img/employee-index1.png" alt="empleados">
<img src="https://raw.githubusercontent.com/sebas350/personalweb/main/scripts/components/img/employee-index2.png" alt="empleados">
<img src="https://raw.githubusercontent.com/sebas350/personalweb/main/scripts/components/img/employee-index3.png" alt="empleados">
<img src="https://raw.githubusercontent.com/sebas350/personalweb/main/scripts/components/img/employee-index4.png" alt="empleados">
`;


const sliderBtnRight = document.createElement('button');
sliderBtnRight.textContent = '>';
sliderBtnRight.style.position = 'absolute';
sliderBtnRight.style.top = '50%';
sliderBtnRight.style.right = '0px';
sliderBtnRight.style.zIndex = '10';
sliderBtnRight.style.padding = '20px';
sliderBtnRight.style.display = 'none';
sliderBtnRight.style.border = 'none';
sliderBtnRight.style.background = 'transparent';
sliderBtnRight.style.transform = 'scaleY(2)';


sliderBtnRight.onmouseenter = () => {
        sliderBtnRight.style.color = 'blue'; 
    };
    
    sliderBtnRight.onmouseleave = () => {
        sliderBtnRight.style.color = 'black'; 
    };
   
    
sliderBtnRight.onclick = () => {
    sliderContainer.scrollBy({ left: 300, behavior: 'smooth' });  
};

const sliderBtnLeft = document.createElement('button');
sliderBtnLeft.textContent = '<';
sliderBtnLeft.style.position = 'absolute';
sliderBtnLeft.style.padding = '20px';
sliderBtnLeft.style.top = '50%';
sliderBtnLeft.style.zIndex = '10';
sliderBtnLeft.style.display = 'none';
sliderBtnLeft.style.border = 'none';
sliderBtnLeft.style.background = 'transparent';
sliderBtnLeft.style.transform = 'scaleY(2)';


sliderBtnLeft.onmouseenter = () => {
        sliderBtnLeft.style.color = 'blue'; 
    };

sliderBtnLeft.onmouseleave = () => {
        sliderBtnLeft.style.color = 'black'; 
    };


sliderBtnLeft.onclick = () => {
    sliderContainer.scrollBy({ left: -300, behavior: 'smooth' });
};

slider.onmouseenter = () =>{
    sliderBtnLeft.style.display = 'block';
    sliderBtnRight.style.display = 'block';
};
    

slider.onmouseleave = () =>{
    sliderBtnRight.style.display = 'none';
    sliderBtnLeft.style.display = 'none';
};
    

slider.appendChild(sliderBtnLeft);
slider.appendChild(sliderContainer);
slider.appendChild(sliderBtnRight);

webEmployee.appendChild(slider);

sectionWeb.appendChild(webEmployee);


//style webEmployee

slider.style.borderRadius = '10px';
slider.style.border = '2px solid skyblue';
slider.style.overflow = 'hidden';
slider.style.display = 'flex';
//slider.style.flexDirection = 'column';
//slider.style.justifyContent = 'center';
//slider.style.justifyContent = 'space-between';


sliderContainer.style.display = 'flex';
//sliderContainer.style.border = '2px solid red';
sliderContainer.style.width = '100%';
sliderContainer.style.gap = '10px';
sliderContainer.style.padding = '10px';

//btns.style.border = '3px solid blue';
//btns.style.width = '100%';
//btns.style.display = 'flex';
//btns.style.justifyContent = 'space-between';
//btns.style.padding = '10px';

//btns.style.zIndex = '990';

slider.querySelectorAll('button').forEach(btn =>{
   btn.style.fontSize = '2em';
   btn.style.fontWeight = '300'; 
});

const sliderImgs = sliderContainer.querySelectorAll('img');

sliderImgs.forEach(img => {
img.style.width = '90%';
img.style.height = 'auto';
img.style.flexShrink = '0';
});


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

    return container;
}
