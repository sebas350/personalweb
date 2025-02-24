//import { document } from '../dom.js';

export function Footer(language = 'es'){
  
  const container = document.createElement('div');
  const info1 = document.createElement('div');
  const info2 = document.createElement('div');
  const info3 = document.createElement('div');
  const info = document.createElement('section');
  const date = document.createElement('section');
  
  
 const translations = {
    en: {
      contact: "Contact",
      email: "Email",
      date1: 'Date',
    },
    es: {
      contact: "Contacto",
      email: "Correo",
      date1: 'Fecha',
    },
  }; 
  
 // Traducciones dinámicas
  const { contact, email, date1 } = translations[language]; 
  
  
  
  info1.innerHTML = `<svg style="cursor: pointer;" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
      <path fill="#5fad47" d="M380.9 97.1C339 55.1 283.2 32 223.9 32c-122.4 0-222 99.6-222 222 0 39.1 10.2 77.3 29.6 111L0 480l117.7-30.9c32.4 17.7 68.9 27 106.1 27h.1c122.3 0 224.1-99.6 224.1-222 0-59.3-25.2-115-67.1-157zm-157 341.6c-33.2 0-65.7-8.9-94-25.7l-6.7-4-69.8 18.3L72 359.2l-4.4-7c-18.5-29.4-28.2-63.3-28.2-98.2 0-101.7 82.8-184.5 184.6-184.5 49.3 0 95.6 19.2 130.4 54.1 34.8 34.9 56.2 81.2 56.1 130.5 0 101.8-84.9 184.6-186.6 184.6zm101.2-138.2c-5.5-2.8-32.8-16.2-37.9-18-5.1-1.9-8.8-2.8-12.5 2.8-3.7 5.6-14.3 18-17.6 21.8-3.2 3.7-6.5 4.2-12 1.4-32.6-16.3-54-29.1-75.5-66-5.7-9.8 5.7-9.1 16.3-30.3 1.8-3.7 .9-6.9-.5-9.7-1.4-2.8-12.5-30.1-17.1-41.2-4.5-10.8-9.1-9.3-12.5-9.5-3.2-.2-6.9-.2-10.6-.2-3.7 0-9.7 1.4-14.8 6.9-5.1 5.6-19.4 19-19.4 46.3 0 27.3 19.9 53.7 22.6 57.4 2.8 3.7 39.1 59.7 94.8 83.8 35.2 15.2 49 16.5 66.6 13.9 10.7-1.6 32.8-13.4 37.4-26.4 4.6-13 4.6-24.1 3.2-26.4-1.3-2.5-5-3.9-10.5-6.6z"/></svg>
  <p>${contact}</p>`;
  
info2.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
      <path fill="#74C0FC" d="M416 32H31.9C14.3 32 0 46.5 0 64.3v383.4C0 465.5 14.3 480 31.9 480H416c17.6 0 32-14.5 32-32.3V64.3c0-17.8-14.4-32.3-32-32.3zM135.4 416H69V202.2h66.5V416zm-33.2-243c-21.3 0-38.5-17.3-38.5-38.5S80.9 96 102.2 96c21.2 0 38.5 17.3 38.5 38.5 0 21.3-17.2 38.5-38.5 38.5zm282.1 243h-66.4V312c0-24.8-.5-56.7-34.5-56.7-34.6 0-39.9 27-39.9 54.9V416h-66.4V202.2h63.7v29.2h.9c8.9-16.8 30.6-34.5 62.9-34.5 67.2 0 79.7 44.3 79.7 101.9V416z"/></svg>
  <p>Linkin</p>`;
  
info3.innerHTML = `<svg style="cursor: pointer;"
  xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
      <path fill="#FFD43B" d="M64 112c-8.8 0-16 7.2-16 16l0 22.1L220.5 291.7c20.7 17 50.4 17 71.1 0L464 150.1l0-22.1c0-8.8-7.2-16-16-16L64 112zM48 212.2L48 384c0 8.8 7.2 16 16 16l384 0c8.8 0 16-7.2 16-16l0-171.8L322 328.8c-38.4 31.5-93.7 31.5-132 0L48 212.2zM0 128C0 92.7 28.7 64 64 64l384 0c35.3 0 64 28.7 64 64l0 256c0 35.3-28.7 64-64 64L64 448c-35.3 0-64-28.7-64-64L0 128z"/></svg>
  <p>${email}</p>`;

date.innerHTML = `<p id="date-time" ></p>`;

function sendMsj() {
    const phone = "543804712955";
    const message = "Hola, estoy interesado en contactarme contigo.";
    window.open(`https://wa.me/${phone}?text=${encodeURIComponent(message)}`, '_blank');
};

function sendEmail() {
    const email = "profesebastian8@gmail.com";
    const subject = "Contacto desde tu página";
    const body = "Hola, me gustaría comunicarme contigo.";
    window.open(`mailto:${email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`, '_blank');
}


var timeLang = '';

if (language == 'es') {
    timeLang = 'es-ES';    
}else{
    timeLang = 'en-US';
};


async function fetchTime() {
    try {
        const response = await fetch('https://worldtimeapi.org/api/timezone/America/Argentina/Buenos_Aires');
        if (!response.ok) {
            throw new Error(`Error fetching time: ${response.statusText}`);
        }
        const data = await response.json();
        const dateTime = new Date(data.datetime);
        const formattedDate = dateTime.toLocaleDateString(timeLang, {
            weekday: 'long',
            year: 'numeric',
            month: 'long',
            day: 'numeric',
        });
        const formattedTime = dateTime.toLocaleTimeString('es-ES', {
            hour: '2-digit',
            minute: '2-digit',
        });
        date.querySelector('#date-time').textContent = `${formattedDate} - ${formattedTime}`;
    } catch (error) {
        console.error(error);
        //date.querySelector('#date-time').textContent = "Actualizando...";
    }
}

fetchTime();

setInterval(fetchTime, 10000);

info1.onclick = sendMsj;
info3.onclick = sendEmail;

info.appendChild(info1);
info.appendChild(info2);
info.appendChild(info3);

container.appendChild(info);
container.appendChild(date);

const svgs = container.querySelectorAll('svg');
    svgs.forEach(svg => {
        svg.style.width = '30px';
        svg.style.height = '30px';
    })

container.style.background = 'black';
container.style.color = 'white';
container.style.display = 'flex';
container.style.flexDirection = 'column';
//container.style.justifyContent = 'space-around';
container.style.padding = '20px';
container.style.gap = '20px';
    
info.style.display = 'inline-flex';
info.style.justifyContent = 'space-around';
//info.style.background = 'black';
//info.style.color = 'white';
//info.style.padding = '20px';

date.style.textAlign = 'center';

  
  return container;
};
