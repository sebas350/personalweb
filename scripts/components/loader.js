export function Loader() {
  const div = document.createElement('div');
  div.style.position = 'fixed';
  div.style.top = '0';
  div.style.left = '0';
  div.style.width = '100vw';
  div.style.height = '100vh';
  div.style.display = 'flex';
  div.style.flexDirection = 'column';
  div.style.justifyContent = 'center';
  div.style.alignItems = 'center';
  div.style.backgroundColor = '#000'; // Fondo oscuro
  div.style.color = '#fff'; // Texto claro
  div.style.zIndex = '1000'; // Por encima de otros elementos
  //div.style.fontSize = '1.8em';
  const title = document.createElement('h1');
  const subtitle = document.createElement('p');
  
  
  title.textContent = 'PROFESIONAL WEB';
  subtitle.textContent = 'Creado por Tello sebastian jose';

//effect descubierto 

  //const spanTi = document.createElement('span');
  //const spanSub= document.createElement('span'); 
  
  //title.appendChild(spanTi);
  //subtitle.appendChild(spanSub);
  
  //spanTi.style.position = 'absolute';
  //spanTi.style.top = '0px';
  //spanTi.style.right = '0px';
  //spanTi.style.background = 'black';
  //spanTi.style.width = '100%';
  //spanTi.style.height = '100%';
  
  //spanSub.style.position = 'absolute';
  //spanSub.style.top = '0px';
  //spanSub.style.right = '0px';
  //spanSub.style.background = 'black';
  //spanSub.style.width = '100%';
  //panSub.style.height = '100%';
  
  //title.style.position = 'relative';
  //subtitle.style.position = 'relative';

//effect gradiant  
  //title.style.maskImage = 'linear-gradient(to bottom, rgba(0, 0, 0, 1) 0%, rgba(0, 0, 0, 0) 100%)';
//subtitle.style.maskImage = 'linear-gradient(to bottom, rgba(0, 0, 0, 1) 0%, rgba(0, 0, 0, 0) 100%)';
  
  //title.style.opacity = '0';
  title.style.transform = 'translateY(200%)';
  title.style.transition = 'transform 1800ms ease-out, opacity 1800ms ease-in';
  
  //subtitle.style.opacity = '0';
  subtitle.style.transform = 'translateY(200%)';
  subtitle.style.transition = 'transform 2000ms ease-out, opacity 2000ms ease-in';
  
//effect descubierto
  //spanTi.style.transition = '1500ms ease-out';
  //spanSub.style.transition = '1500ms ease-in';
  
  const mask = document.createElement('div');
  mask.style.position = 'absolute';
  mask.style.bottom = '0';
  mask.style.width = '100%';
  mask.style.height = '45%';
  mask.style.backgroundColor = '#000';
  mask.style.zIndex = '2';
  
  setTimeout(() => {
    //title.style.opacity = '1';
    title.style.transform = 'translateY(0)';
    //subtitle.style.opacity = '1';
    subtitle.style.transform = 'translateY(0)';

//effect descubierto    
    //spanTi.style.height = '0px';
    //spanSub.style.height = '0px';
  }, 100);
  
  div.appendChild(mask);
  div.appendChild(title);
  div.appendChild(subtitle);
  
  
  return div;
}
