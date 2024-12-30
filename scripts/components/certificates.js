//import { document } from '../dom.js';

export function Certificates

(language = 'es') {
  
  const translations = {
    en: {
      title: "Certificates",
      subtitle: "Here you can see the different certificates that demonstrate the acquired skills.",
      certificates:{
          cert1:{
              title:'Fullstack web developer',
              subtitle:'Fullstack Python Web Developer and Soft Skills',
          },    
      },
    },
    es: {
      title: "Certificados",
      subtitle: "Aqui puedes ver los distintos certificados que abalan las competencias adquiridas. ",
     certificates:{
         cert1:{
              title:'Desarrollador Web fullstack',
              subtitle:'Desarrollador Web Fullstack Python y Habilidades Blandas',
          }, 
      }, 
    },
  };

  // Traducciones dinámicas
  const { title, subtitle, certificates } = translations[language];

  const container = document.createElement('div');
  const cert1 = document.createElement('div');
  cert1.style.backgroundImage= "url('https://raw.githubusercontent.com/sebas350/personalweb/main/scripts/components/img/cert1.png')";
  
    cert1.style.width = "100%";
    cert1.style.height = "500px";
    cert1.style.backgroundSize = 'cover';
    cert1.style.backgroundPosition = 'center';
  
  container.innerHTML = `
    <h1>${title}</h1>
    <p>${subtitle}</p>
  `;
  
  cert1.innerHTML = `
  <p>${certificates.cert1.title}</p>
  <p>${certificates.cert1.subtitle}</p> `;
  
  container.appendChild(cert1);

  //container.style.padding = '5%';

  // Aplicar efecto de entrada con IntersectionObserver
  const cards = container.querySelectorAll('div');

  cards.forEach((el) => {
    el.style.opacity = '0';
    el.style.transition = 'opacity 1500ms';
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

  cards.forEach((el) => observer.observe(el));

  return container;
}
