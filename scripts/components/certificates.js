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
              title:'Fullstack web developer',
              subtitle:'Fullstack Python Web Developer and Soft Skills',
          },
          cert3:{
              title:'Fullstack web developer',
              subtitle:'Fullstack Python Web Developer and Soft Skills',
          },
          cert4:{
              title:'Fullstack web developer',
              subtitle:'Fullstack Python Web Developer and Soft Skills',
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
              title:'Desarrollador Web fullstack',
              subtitle:'Desarrollador Web Fullstack Python y Habilidades Blandas',
          },
          cert3:{
              title:'Desarrollador Web fullstack',
              subtitle:'Desarrollador Web Fullstack Python y Habilidades Blandas',
          },
          cert4:{
              title:'Desarrollador Web fullstack',
              subtitle:'Desarrollador Web Fullstack Python y Habilidades Blandas',
          }, 
      }, 
    },
  };

  // Traducciones dinámicas
  const { title, subtitle, certificates } = translations[language];

  const container = document.createElement('div'); 
  
  container.innerHTML = `
    <h1>${title}</h1>
    <p>${subtitle}</p>
    <p>${certificates.cert1.title}</p>
    <p>${certificates.cert1.subtitle}</p>
    
    <img src="https://raw.githubusercontent.com/sebas350/personalweb/main/scripts/components/img/cert1.png" style="width:100%;"  alt="">
  
    <p>${certificates.cert2.title}</p>
    <p>${certificates.cert2.subtitle}</p>
    
    <img src="https://raw.githubusercontent.com/sebas350/personalweb/main/scripts/components/img/cert2.png" style="width:100%;"  alt="">
    
    <p>${certificates.cert3.title}</p>
    <p>${certificates.cert3.subtitle}</p>
    
    <img src="https://raw.githubusercontent.com/sebas350/personalweb/main/scripts/components/img/cert3.png" style="width:100%;"  alt="">
    
    <p>${certificates.cert4.title}</p>
    <p>${certificates.cert4.subtitle}</p>
    
    <img src="https://raw.githubusercontent.com/sebas350/personalweb/main/scripts/components/img/cert4.png" style="width:100%;"  alt="">
  
  `;
  
    container.style.width = '100%';
    //container.style.margin = 'auto';
    //container.style.height = '90vh';
    container.style.border = '2px solid red';
    container.style.display = 'flex';
    container.style.flexDirection = 'column';
    container.style.alignItems = 'center';
    container.style.justifyContent = 'center';
    container.style.gap = '10px';
    //container.style.backgroundColor = '#546de5';
    //container.style.color = '#e0e0e0';
  
  const imgs = container.querySelectorAll('img');
  

  imgs.forEach(img => {

    img.style.opacity = '0';
    //img.style.transform = 'translateX(-10%)';

    img.style.transition = 'transform 1000ms, opacity 1000ms';

    img.style.borderRadius = '10px';
    img.style.boxShadow = '2px 2px 2px #E0E0E0';
    //img.style.justifyContent = 'center';

});

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.style.opacity = '1';
        } else {
          entry.target.style.opacity = '0';
        }
      });
    },
    { threshold: 0.3 }
  );

  imgs.forEach((el) => observer.observe(el));

  return container;
}
