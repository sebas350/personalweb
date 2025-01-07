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
  subtitle.textContent = 'Designado por Tello sebastian jose';
  
  //title.style.maskImage = 'linear-gradient(to bottom, rgba(0, 0, 0, 1) 0%, rgba(0, 0, 0, 0) 100%)';
//subtitle.style.maskImage = 'linear-gradient(to bottom, rgba(0, 0, 0, 1) 0%, rgba(0, 0, 0, 0) 100%)';
  
  //title.style.opacity = '0';
  title.style.transform = 'translateY(200%)';
  title.style.transition = 'transform 1800ms ease-out, opacity 1800ms ease-in';
  
  //subtitle.style.opacity = '0';
  subtitle.style.transform = 'translateY(200%)';
  subtitle.style.transition = 'transform 2000ms ease-out, opacity 2000ms ease-in';
  
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
  }, 100);
  
  div.appendChild(mask);
  div.appendChild(title);
  div.appendChild(subtitle);
  
  
  return div;
}