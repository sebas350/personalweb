//import { document } from '../dom.js';

export function Certificates

(language = 'es') {
  
  const translations = {
    en: {
      title: "Certificates",
      subtitle: "Here you can see the different certificates that demonstrate the acquired skills",
      certificates:{
          cert1:{
              title:'Fullstack web developer',
              subtitle:'Fullstack Python Web Developer and Soft Skills',
          },
          cert2:{
              title:'Advanced Programming with Python',
              subtitle:'Data Analyst at the School of Engineering of the National University of Chilecito',
          },
          cert3:{
              title:'Object Oriented Programming and Visualization with Python',
              subtitle:'Data Analysis at the National University of the Litoral',
          },
          cert4:{
              title:'#BeProgrammed',
              subtitle:'Trayecto Formativo INTI',
          }, 
      },
    },
    es: {
      title: "Certificados",
      subtitle: "Aqui puedes ver los distintos certificados que abalan las competencias adquiridas ",
     certificates:{
         cert1:{
              title:'Desarrollador Web fullstack',
              subtitle:'Desarrollador Web Fullstack Python y Habilidades Blandas',
          },
          cert2:{
              title:'Programacion Avanzada con Python',
              subtitle:'Analista de Datos en La Escuela de Ingeniería de La Universidad Nacional de Chilecito',
          },
          cert3:{
              title:'Programacion Orientada a Objetos y Visualizacion con Python',
              subtitle:'Analisis de Datos en la Universidad Nacional del Litoral',
          },
          cert4:{
              title:'#SeProgramar',
              subtitle:'Trayecto Formativo INTI',
          }, 
      }, 
    },
  };

  // Traducciones dinámicas
  const { title, subtitle, certificates } = translations[language];

  const container = document.createElement('div'); 
  const head = document.createElement('div');
  const certs = document.createElement('div');
  
  
  
  
  
  head.innerHTML = `
    <h1 style="font-size:3em; color:white;">${title}</h1>
    <p style="font-size:1.8em;">${subtitle}</p>
  `;
  
 container.appendChild(head);
 
 const certsArray = Object.values(certificates);
 
 certsArray.forEach((cert,index) => {
     const div = document.createElement('div');
     div.innerHTML = `
         <h2>${cert.title}</h2>
         <p>${cert.subtitle}</p>
    
    <img src="https://raw.githubusercontent.com/sebas350/personalweb/main/scripts/components/img/cert${index+1}.png" style="width:100%;"  alt="">
     `;
     
     certs.appendChild(div);
 });
    

    container.appendChild(certs);    
    
//style
    
    head.style.display = 'flex';
    head.style.flexDirection = 'column';
    head.style.justifyContent = 'center';
    head.style.gap = '30px';
    head.style.height = '90vh';
    head.style.background = 'skyblue';
    //head.fontSize = 'em';
    
    
    certs.style.display = 'flex';
    certs.style.flexDirection = 'column';
    certs.style.gap = '30px';
      
    container.style.width = '100%';
    //container.style.margin = 'auto';
    //container.style.height = '90vh';
    //container.style.border = '2px solid red';
    container.style.display = 'flex';
    container.style.flexDirection = 'column';
    container.style.alignItems = 'center';
    container.style.justifyContent = 'center';
    container.style.gap = '30px';
    container.style.textAlign = 'center';
    //container.style.backgroundColor = '#546de5';
    //container.style.color = '#e0e0e0';
  
  const imgs = container.querySelectorAll('img');
  

  imgs.forEach(img => {

    img.style.opacity = '0';
    img.style.transform = 'translateY(100px)';
    img.style.filter = 'blur(10px)';

    img.style.transition = 'transform 1000ms, opacity 1000ms, filter 0.5s';

    img.style.borderRadius = '10px';
    img.style.boxShadow = '2px 2px 2px #E0E0E0';
    //img.style.justifyContent = 'center';

});

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.style.opacity = '1';
          entry.target.style.filter = 'blur(0)';
          entry.target.style.transform = 'translateY(0)';
        } else {
          //entry.target.style.opacity = '0';
        }
      });
    },
    { threshold: 0.3 }
  );

  imgs.forEach((el) => observer.observe(el));

  return container;
}
