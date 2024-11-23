//import { document } from '../dom.js';

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
  container.innerHTML = `
    <h1>${title}</h1>
    <p>${subtitle}</p>
    ${Object.values(sections)
      .map(
        (section) => `
        <section>
          <h2>${section.title}</h2>
          <ul>
            ${section.content.map((item) => `<li>${item}</li>`).join('')}
          </ul>
        </section>`
      )
      .join('')}
  `;

  container.style.padding = '20px';

  // Aplicar efecto de entrada con IntersectionObserver
  const paragraphs = container.querySelectorAll('p, li');

  paragraphs.forEach((el) => {
    el.style.opacity = '0';
    el.style.transition = 'opacity 1000ms';
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

  paragraphs.forEach((el) => observer.observe(el));

  return container;
}