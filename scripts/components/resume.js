//import { document } from '../dom.js';
import { Present } from './present.js';

export function Resume(language = 'es') {
  const translations = {
    en: {
      title: "Resume",
      subtitle: "A detailed tour of my work experience, education, and technical skills.",
      sections: {
        personal: {
          title: "Personal Information",
          content: [
            "Name: Tello, Sebastián José",
            "ID: 30377854",
            "Phone: +54 3804712955",
            "Age: 41",
          ],
        },
        education: {
          title: "Education",
          content: [
            "Elementary, secondary, and tertiary completed.",
            "2 years of Electronic Engineering and 2 years of a Bachelor's Degree in Systems Analysis.",
            "Diploma in Robotics, National University of La Rioja.",
          ],
        },
        qualifications: {        
          title: "Qualifications",
          content: [
            "High School: EPET No. 2, La Rioja, awarded the title 'Electromechanical Technician'. Training in workshops such as sheet metal, carpentry, foundry, electricity, mechanics, and construction.",
            "Tertiary: ISFD Dr. Pedro Ignacio de Castro Barros, awarded the title of 'Professor in Primary Education'.",
          ],
        },
        certifications: {        
          title: "Certifications",
          content: [
            "Robotics Diploma - National University of La Rioja (UNLaR).",
            "Community Health Promoters - Universidad de la Matanza, Fundación Garrahan, and Ministry of Health of La Rioja.",
            "Computer Repair: Software and Hardware.",
            "PC Operator: Windows, Linux, macOS, Android.",
            "Office Operator: Microsoft Office Suite.",
            "Graphic Design: Photoshop.",
          ],
        },
        programming: {
          title: "Programming Skills",
          content: [
            "Initial Programmer with Python and Ruby.",
            "Advanced Programming in Python: OOP, databases, neural networks, AI - National University of Chilecito.",
            "FullStack Web Developer with Python (Frontend: HTML, CSS, JavaScript, Bootstrap 5; Backend: MySQL, MongoDB, Flask).",
          ],
        },
      },
    },
    es: {
      title: "Currículum",
      subtitle: "Un recorrido detallado por mi experiencia laboral, educación y habilidades técnicas.",
      sections: {
        personal: {
          title: "Información Personal",
          content: [
            "Nombre: Tello, Sebastián José",
            "DNI: 30377854",
            "Teléfono: +54 3804712955",
            "Edad: 41",
          ],
        },
        education: {
          title: "Educación",
          content: [
            "Primario, secundario y terciario completo.",
            "2 años de Ingeniería Electrónica y 2 años de Licenciatura en Análisis de Sistemas.",
            "Diplomatura en Robótica - Universidad Nacional de La Rioja.",
          ],
        },
        qualifications: {
          title: "Cualificaciones",
          content: [
            "Secundario: EPET N° 2 de La Rioja, título 'Técnico Electromecánico'. Talleres: hojalatería, carpintería, fundición, electricidad, mecánica y construcción.",
            "Terciario: ISFD Dr. Pedro Ignacio de Castro Barros, título de 'Profesor en Educación Primaria'.",
          ],
        },
        certifications: {
          title: "Certificaciones",
          content: [
            "Diplomatura en Robótica - Universidad Nacional de La Rioja (UNLaR).",
            "Promotores Comunitarios de la Salud - Universidad de la Matanza, Fundación Garrahan y Ministerio de Salud de La Rioja.",
            "Reparación de computadoras: Software y Hardware.",
            "Operador de PC: Windows, Linux, macOS, Android.",
            "Operador de Office: Microsoft Office Suite.",
            "Diseño Gráfico: Photoshop.",
          ],
        },
        programming: {
          title: "Habilidades de Programación",
          content: [
            "Programador inicial con Python y Ruby.",
            "Programación Avanzada en Python: OOP, bases de datos, redes neuronales, IA - Universidad Nacional de Chilecito.",
            "Desarrollador Web FullStack con Python (Frontend: HTML, CSS, JavaScript, Bootstrap 5; Backend: MySQL, MongoDB, Flask).",
          ],
        },
      },
    },
  };

  // Traducciones dinámicas
  const { title, subtitle, sections } = translations[language];

  const container = document.createElement('div');
  const heade = Present(subtitle, title, '#546de5');
  const secs = document.createElement('section');
  const btnDL = document.createElement('button');
  const link = document.createElement('a');
  
  
  
  btnDL.textContent = 'Descarga Mi Curriculum';
  btnDL.onclick = () => link.click();
  
  // Configurar atributos
link.setAttribute('id', 'downloadLink');
link.setAttribute('href', 'https://raw.githubusercontent.com/sebas350/personalweb/main/scripts/components/img/pdf1.pdf');
link.setAttribute('download', 'resume.pdf');
link.style.display = 'none';
  
heade.appendChild(link);  
  
const heade_p = heade.querySelector('#subtitle');
  
heade_p.insertAdjacentElement('afterend', btnDL);

const secSvgs = [`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512">
                <path fill="#63E6BE" d="M112 48a48 48 0 1 1 96 0 48 48 0 1 1 -96 0zm40 304l0 128c0 17.7-14.3 32-32 32s-32-14.3-32-32l0-223.1L59.4 304.5c-9.1 15.1-28.8 20-43.9 10.9s-20-28.8-10.9-43.9l58.3-97c17.4-28.9 48.6-46.6 82.3-46.6l29.7 0c33.7 0 64.9 17.7 82.3 46.6l58.3 97c9.1 15.1 4.2 34.8-10.9 43.9s-34.8 4.2-43.9-10.9L232 256.9 232 480c0 17.7-14.3 32-32 32s-32-14.3-32-32l0-128-16 0z"/></svg>`,
                `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
                    <path fill="#5fad47" d="M96 0C43 0 0 43 0 96L0 416c0 53 43 96 96 96l288 0 32 0c17.7 0 32-14.3 32-32s-14.3-32-32-32l0-64c17.7 0 32-14.3 32-32l0-320c0-17.7-14.3-32-32-32L384 0 96 0zm0 384l256 0 0 64L96 448c-17.7 0-32-14.3-32-32s14.3-32 32-32zm32-240c0-8.8 7.2-16 16-16l192 0c8.8 0 16 7.2 16 16s-7.2 16-16 16l-192 0c-8.8 0-16-7.2-16-16zm16 48l192 0c8.8 0 16 7.2 16 16s-7.2 16-16 16l-192 0c-8.8 0-16-7.2-16-16s7.2-16 16-16z"/></svg>`,
                    `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512">
                        <path fill="#FFD43B" d="M173.8 5.5c11-7.3 25.4-7.3 36.4 0L228 17.2c6 3.9 13 5.8 20.1 5.4l21.3-1.3c13.2-.8 25.6 6.4 31.5 18.2l9.6 19.1c3.2 6.4 8.4 11.5 14.7 14.7L344.5 83c11.8 5.9 19 18.3 18.2 31.5l-1.3 21.3c-.4 7.1 1.5 14.2 5.4 20.1l11.8 17.8c7.3 11 7.3 25.4 0 36.4L366.8 228c-3.9 6-5.8 13-5.4 20.1l1.3 21.3c.8 13.2-6.4 25.6-18.2 31.5l-19.1 9.6c-6.4 3.2-11.5 8.4-14.7 14.7L301 344.5c-5.9 11.8-18.3 19-31.5 18.2l-21.3-1.3c-7.1-.4-14.2 1.5-20.1 5.4l-17.8 11.8c-11 7.3-25.4 7.3-36.4 0L156 366.8c-6-3.9-13-5.8-20.1-5.4l-21.3 1.3c-13.2 .8-25.6-6.4-31.5-18.2l-9.6-19.1c-3.2-6.4-8.4-11.5-14.7-14.7L39.5 301c-11.8-5.9-19-18.3-18.2-31.5l1.3-21.3c.4-7.1-1.5-14.2-5.4-20.1L5.5 210.2c-7.3-11-7.3-25.4 0-36.4L17.2 156c3.9-6 5.8-13 5.4-20.1l-1.3-21.3c-.8-13.2 6.4-25.6 18.2-31.5l19.1-9.6C65 70.2 70.2 65 73.4 58.6L83 39.5c5.9-11.8 18.3-19 31.5-18.2l21.3 1.3c7.1 .4 14.2-1.5 20.1-5.4L173.8 5.5zM272 192a80 80 0 1 0 -160 0 80 80 0 1 0 160 0zM1.3 441.8L44.4 339.3c.2 .1 .3 .2 .4 .4l9.6 19.1c11.7 23.2 36 37.3 62 35.8l21.3-1.3c.2 0 .5 0 .7 .2l17.8 11.8c5.1 3.3 10.5 5.9 16.1 7.7l-37.6 89.3c-2.3 5.5-7.4 9.2-13.3 9.7s-11.6-2.2-14.8-7.2L74.4 455.5l-56.1 8.3c-5.7 .8-11.4-1.5-15-6s-4.3-10.7-2.1-16zm248 60.4L211.7 413c5.6-1.8 11-4.3 16.1-7.7l17.8-11.8c.2-.1 .4-.2 .7-.2l21.3 1.3c26 1.5 50.3-12.6 62-35.8l9.6-19.1c.1-.2 .2-.3 .4-.4l43.2 102.5c2.2 5.3 1.4 11.4-2.1 16s-9.3 6.9-15 6l-56.1-8.3-32.2 49.2c-3.2 5-8.9 7.7-14.8 7.2s-11-4.3-13.3-9.7z"/></svg>`,
                        `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                        <path fill="#d73920" d="M211 7.3C205 1 196-1.4 187.6 .8s-14.9 8.9-17.1 17.3L154.7 80.6l-62-17.5c-8.4-2.4-17.4 0-23.5 6.1s-8.5 15.1-6.1 23.5l17.5 62L18.1 170.6c-8.4 2.1-15 8.7-17.3 17.1S1 205 7.3 211l46.2 45L7.3 301C1 307-1.4 316 .8 324.4s8.9 14.9 17.3 17.1l62.5 15.8-17.5 62c-2.4 8.4 0 17.4 6.1 23.5s15.1 8.5 23.5 6.1l62-17.5 15.8 62.5c2.1 8.4 8.7 15 17.1 17.3s17.3-.2 23.4-6.4l45-46.2 45 46.2c6.1 6.2 15 8.7 23.4 6.4s14.9-8.9 17.1-17.3l15.8-62.5 62 17.5c8.4 2.4 17.4 0 23.5-6.1s8.5-15.1 6.1-23.5l-17.5-62 62.5-15.8c8.4-2.1 15-8.7 17.3-17.1s-.2-17.4-6.4-23.4l-46.2-45 46.2-45c6.2-6.1 8.7-15 6.4-23.4s-8.9-14.9-17.3-17.1l-62.5-15.8 17.5-62c2.4-8.4 0-17.4-6.1-23.5s-15.1-8.5-23.5-6.1l-62 17.5L341.4 18.1c-2.1-8.4-8.7-15-17.1-17.3S307 1 301 7.3L256 53.5 211 7.3z"/></svg>`,
                        `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 512">
                        <path fill="#ff8605" d="M392.8 1.2c-17-4.9-34.7 5-39.6 22l-128 448c-4.9 17 5 34.7 22 39.6s34.7-5 39.6-22l128-448c4.9-17-5-34.7-22-39.6zm80.6 120.1c-12.5 12.5-12.5 32.8 0 45.3L562.7 256l-89.4 89.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0l112-112c12.5-12.5 12.5-32.8 0-45.3l-112-112c-12.5-12.5-32.8-12.5-45.3 0zm-306.7 0c-12.5-12.5-32.8-12.5-45.3 0l-112 112c-12.5 12.5-12.5 32.8 0 45.3l112 112c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L77.3 256l89.4-89.4c12.5-12.5 12.5-32.8 0-45.3z"/></svg>`];

secs.innerHTML = `
    ${Object.values(sections)
      .map(
        (section, index) => `
        <section class="sec">
          ${secSvgs[index]}  
          <h2>${section.title}</h2>
          <ul>
            ${section.content.map((item) => `<li>${item}</li>`).join('')}
          </ul>
        </section>`
      )
      .join('')}
  `;

  //container.style.padding = '5%';

  // Aplicar efecto de entrada con IntersectionObserver
  const paragraphs = container.querySelectorAll('p, li');

  paragraphs.forEach((el) => {
    el.style.opacity = '0';
    el.style.transition = 'opacity 1500ms';
  });

//present subtitle

    const sub = heade.querySelector('#subtitle');
  
  
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.style.opacity = '1';
          entry.target.style.transform = 'translateY(0)';
        } else {
          entry.target.style.opacity = '0';
        }
      });
    },
    { threshold: 0.3 }
  );

    paragraphs.forEach((el) => observer.observe(el));
    
    observer.observe(sub);

//appendChild

container.appendChild(heade);
container.appendChild(secs);


const sec1_divs = secs.querySelectorAll('.sec');
    
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

secs.style.display = 'flex';
    secs.style.flexDirection = 'column';
    secs.style.gap= '20px';
    secs.style.padding = '10px';
    
    
//svgs    
    const svgs = secs.querySelectorAll('svg');
    svgs.forEach(svg => {
        svg.style.fill= 'white';
        svg.style.width = '30px';
        svg.style.height = '30px';
    });

  return container;
}
